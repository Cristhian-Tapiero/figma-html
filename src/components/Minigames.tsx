import { useState, useEffect, useRef } from 'react';
import { Animal, Plant, allAnimals, allPlants } from '../types/types';
import garzaImage from '../assets/animals/garza.svg';
import qrImage from '../assets/qr.png';

interface MinigamesProps {
    onBack: () => void;
}

type Question = {
    species: Animal | Plant;
    isAnimal: boolean;
};

type GameState = 'question' | 'options' | 'feedback' | 'score' | 'thanks';

export default function Minigames({ onBack }: MinigamesProps) {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [gameState, setGameState] = useState<GameState>('question');
    const [options, setOptions] = useState<(Animal | Plant)[]>([]);
    const [isCorrect, setIsCorrect] = useState(false);
    const [score, setScore] = useState(0);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Inicializar el juego con 3 animales y 3 plantas aleatorias
    useEffect(() => {
        initializeGame();
    }, []);

    const initializeGame = () => {
        // Filtrar animales que tienen sonido
        const animalsWithSound = allAnimals.filter(animal => animal.soundFile);
        
        // Seleccionar 3 animales aleatorios con sonido
        const selectedAnimals = getRandomElements(animalsWithSound, 3);
        
        // Seleccionar 3 plantas aleatorias
        const selectedPlants = getRandomElements(allPlants, 3);
        
        // Crear array de preguntas mezcladas
        const allQuestions: Question[] = [
            ...selectedAnimals.map(animal => ({ species: animal, isAnimal: true })),
            ...selectedPlants.map(plant => ({ species: plant, isAnimal: false }))
        ];
        
        // Mezclar las preguntas
        const shuffledQuestions = shuffleArray(allQuestions);
        setQuestions(shuffledQuestions);
        setCurrentQuestionIndex(0);
        setGameState('question');
        setScore(0); // Reiniciar puntaje
    };

    const getRandomElements = <T,>(array: T[], count: number): T[] => {
        const shuffled = [...array].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, count);
    };

    const shuffleArray = <T,>(array: T[]): T[] => {
        return [...array].sort(() => Math.random() - 0.5);
    };

    const handleAdvanceToOptions = () => {
        const currentQuestion = questions[currentQuestionIndex];
        
        // Crear opciones: 1 correcta y 3 incorrectas
        const correctAnswer = currentQuestion.species;
        let incorrectOptions: (Animal | Plant)[];
        
        if (currentQuestion.isAnimal) {
            // Obtener animales que no sean la respuesta correcta
            incorrectOptions = allAnimals.filter(a => a !== correctAnswer);
        } else {
            // Obtener plantas que no sean la respuesta correcta
            incorrectOptions = allPlants.filter(p => p !== correctAnswer);
        }
        
        // Seleccionar 3 opciones incorrectas aleatorias
        const selectedIncorrect = getRandomElements(incorrectOptions, 3);
        
        // Combinar y mezclar todas las opciones
        const allOptions = shuffleArray([correctAnswer, ...selectedIncorrect]);
        
        setOptions(allOptions);
        setGameState('options');
    };

    const handleOptionSelect = (option: Animal | Plant) => {
        const currentQuestion = questions[currentQuestionIndex];
        const correct = option === currentQuestion.species;
        
        setIsCorrect(correct);
        if (correct) {
            setScore(prev => prev + 1); // Incrementar puntaje si es correcto
        }
        setGameState('feedback');
        
        // Detener el audio si está reproduciéndose
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setGameState('question');
        } else {
            // Juego completado, mostrar pantalla de puntaje
            setGameState('score');
        }
    };

    const playSound = () => {
        const currentQuestion = questions[currentQuestionIndex];
        if (currentQuestion.isAnimal) {
            const animal = currentQuestion.species as Animal;
            if (animal.soundFile && audioRef.current) {
                audioRef.current.src = animal.soundFile;
                audioRef.current.play();
            }
        }
    };

    if (questions.length === 0) {
        return <div className="w-screen h-screen flex items-center justify-center bg-conejera-bone">Cargando...</div>;
    }

    const currentQuestion = questions[currentQuestionIndex];

    // Si estamos en la pantalla de agradecimientos, renderizarla directamente
    if (gameState === 'thanks') {
        return <ThanksView />;
    }

    return (
        <section className="w-screen h-screen bg-conejera-bone relative overflow-hidden">
            <audio ref={audioRef} />
            
            {/* Botón volver - solo mostrar en pregunta, opciones y feedback */}
            {(gameState === 'question' || gameState === 'options' || gameState === 'feedback') && (
                <button
                    onClick={onBack}
                    className="absolute top-8 left-8 z-20 px-6 py-3 bg-white/80 backdrop-blur-sm text-conejera-dark_blue font-fredoka text-xl rounded-full hover:bg-white transition-colors shadow-lg"
                >
                    ← Volver
                </button>
            )}

            {/* Progreso - solo mostrar en pregunta, opciones y feedback */}
            {(gameState === 'question' || gameState === 'options' || gameState === 'feedback') && (
                <div className="absolute top-8 right-8 z-20 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                    <span className="font-fredoka text-xl text-conejera-dark_blue">
                        Pregunta {currentQuestionIndex + 1} de {questions.length}
                    </span>
                </div>
            )}

            {/* Contenido principal */}
            <div className="flex items-center justify-center h-full p-8">
                {gameState === 'question' && (
                    <QuestionView
                        question={currentQuestion}
                        onAdvance={handleAdvanceToOptions}
                        onPlaySound={playSound}
                    />
                )}

                {gameState === 'options' && (
                    <OptionsView
                        options={options}
                        onSelect={handleOptionSelect}
                    />
                )}

                {gameState === 'feedback' && (
                    <FeedbackView
                        isCorrect={isCorrect}
                        correctSpecies={currentQuestion.species}
                        onNext={handleNextQuestion}
                        isLastQuestion={currentQuestionIndex === questions.length - 1}
                    />
                )}

                {gameState === 'score' && (
                    <ScoreView
                        score={score}
                        total={questions.length}
                        onContinue={() => setGameState('thanks')}
                    />
                )}
            </div>
        </section>
    );
}

// Componente para mostrar la pregunta (sonido o hints)
function QuestionView({ question, onAdvance, onPlaySound }: { question: Question; onAdvance: () => void; onPlaySound: () => void }) {
    if (question.isAnimal) {
        return (
            <div className="flex flex-col items-center gap-8 max-w-2xl">
                <h2 className="text-5xl font-fredoka font-bold text-conejera-dark_blue text-center">
                    ¿Qué animal hace este sonido?
                </h2>
                
                <button
                    onClick={onPlaySound}
                    className="w-48 h-48 rounded-full bg-conejera-light_blue hover:bg-conejera-dark_blue transition-colors shadow-xl flex items-center justify-center group"
                    aria-label="Reproducir sonido"
                >
                    <svg 
                        width="80" 
                        height="80" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-white"
                    >
                        <path 
                            d="M11 5L6 9H2v6h4l5 4V5zM15.54 8.46a5 5 0 010 7.07M19.07 4.93a10 10 0 010 14.14" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>

                <p className="text-2xl font-montserrat text-conejera-dark_blue text-center">
                    Haz clic en el ícono para escuchar el sonido
                </p>

                <button
                    onClick={onAdvance}
                    className="mt-8 px-12 py-4 bg-conejera-orange text-white font-fredoka text-2xl rounded-full hover:bg-conejera-orange/80 transition-colors shadow-lg"
                >
                    Siguiente
                </button>
            </div>
        );
    } else {
        // Planta - mostrar hints
        const plant = question.species as Plant;
        return (
            <div className="flex flex-col items-center gap-8 max-w-4xl w-full">
                <h2 className="text-5xl font-fredoka font-bold text-conejera-dark_blue text-center">
                    ¿Qué planta es?
                </h2>
                
                <p className="text-2xl font-montserrat text-conejera-dark_blue text-center">
                    Pasa el cursor sobre las tarjetas para ver las pistas
                </p>

                <div className="flex flex-col gap-6 w-full">
                    {plant.hints.map((hint, index) => (
                        <HintCard key={index} hint={hint} index={index} />
                    ))}
                </div>

                <button
                    onClick={onAdvance}
                    className="mt-8 px-12 py-4 bg-conejera-orange text-white font-fredoka text-2xl rounded-full hover:bg-conejera-orange/80 transition-colors shadow-lg"
                >
                    Siguiente
                </button>
            </div>
        );
    }
}

// Componente para tarjeta de hint con hover
function HintCard({ hint, index }: { hint: string; index: number }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative h-24 bg-conejera-cyan rounded-2xl shadow-lg cursor-pointer overflow-hidden transition-all hover:scale-105"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {!isHovered ? (
                <div className="flex items-center justify-center h-full">
                    <span className="text-white font-fredoka text-6xl">
                        Pista {index + 1}
                    </span>
                </div>
            ) : (
                <div className="flex items-center justify-center h-full p-6 bg-conejera-dark_blue">
                    <p className="text-white font-montserrat text-lg text-center">
                        {hint}
                    </p>
                </div>
            )}
        </div>
    );
}

// Componente para mostrar las opciones
function OptionsView({ options, onSelect }: { options: (Animal | Plant)[]; onSelect: (option: Animal | Plant) => void }) {
    return (
        <div className="flex flex-col items-center gap-8 max-w-5xl w-full">
            <h2 className="text-5xl font-fredoka font-bold text-conejera-dark_blue text-center">
                Selecciona la respuesta correcta
            </h2>

            <div className="grid grid-cols-2 gap-4">
                {options.map((option, index) => (
                    <button
                        key={index}
                        onClick={() => onSelect(option)}
                        className="flex flex-col items-center gap-4 hover:scale-105 transition-all"
                    >
                        <img 
                            src={option.icon} 
                            alt={option.name}
                            className="object-contain h-48" 
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}

// Componente para mostrar retroalimentación
function FeedbackView({ isCorrect, correctSpecies, onNext, isLastQuestion }: { 
    isCorrect: boolean; 
    correctSpecies: Animal | Plant; 
    onNext: () => void;
    isLastQuestion: boolean;
}) {
    return (
        <div className="flex flex-col items-center gap-8 max-w-2xl">
            {/* Texto superior */}
            <h2 className={`text-6xl font-fredoka font-bold text-center ${isCorrect ? 'text-conejera-emerald' : 'text-conejera-orange'}`}>
                {isCorrect ? '¡Adivinaste!' : 'Inténtalo de nuevo :('}
            </h2>

            {/* Ícono correcto en el centro */}
            <div className="rounded-3xl shadow-2xl">
                <img 
                    src={correctSpecies.icon} 
                    alt={correctSpecies.name}
                    className="w-96 h-96 object-contain"
                />
            </div>

            {/* Texto inferior */}
            <p className="text-4xl font-fredoka text-conejera-dark_blue text-center">
                {isCorrect ? '¡Felicidades!' : 'Esta era la respuesta'}
            </p>

            <p className="text-3xl font-fredoka text-conejera-dark_blue text-center font-semibold">
                {correctSpecies.name}
            </p>

            {/* Botón siguiente */}
            <button
                onClick={onNext}
                className="mt-8 px-12 py-4 bg-conejera-light_blue text-white font-fredoka text-2xl rounded-full hover:bg-conejera-dark_blue transition-colors shadow-lg"
            >
                {isLastQuestion ? 'Ver resultados' : 'Siguiente pregunta'}
            </button>
        </div>
    );
}

// Componente para mostrar el puntaje
function ScoreView({ score, total, onContinue }: { score: number; total: number; onContinue: () => void }) {
    const percentage = Math.round((score / total) * 100);
    
    return (
        <div className="flex flex-col items-center gap-8 max-w-2xl">
            <h2 className="text-6xl font-fredoka font-bold text-conejera-dark_blue text-center">
                ¡Juego Completado!
            </h2>

            <div className="bg-white rounded-3xl shadow-2xl p-12 flex flex-col items-center gap-6">
                <p className="text-3xl font-fredoka text-conejera-dark_blue text-center">
                    Tu puntaje:
                </p>
                
                <div className="text-8xl font-fredoka font-bold text-conejera-orange">
                    {score}/{total}
                </div>

                <div className="text-5xl font-fredoka text-conejera-light_blue">
                    {percentage}%
                </div>

                <p className="text-2xl font-montserrat text-conejera-dark_blue text-center mt-4">
                    {percentage >= 80 
                        ? '¡Excelente! Conoces muy bien el humedal' 
                        : percentage >= 50 
                        ? '¡Buen trabajo! Sigue aprendiendo sobre el humedal'
                        : '¡Sigue explorando! Hay mucho por descubrir'}
                </p>
            </div>

            <button
                onClick={onContinue}
                className="mt-8 px-12 py-4 bg-conejera-orange text-white font-fredoka text-2xl rounded-full hover:bg-conejera-orange/80 transition-colors shadow-lg"
            >
                Continuar
            </button>
        </div>
    );
}

// Componente de agradecimientos
function ThanksView() {
    return (
        <section className="w-screen h-screen bg-white flex items-center justify-center p-8 md:p-12">
            <div className="max-w-7xl w-full flex flex-col md:flex-row gap-8 md:gap-28 items-center">
                {/* Imagen de la garza a la izquierda */}
                <div className="w-full md:w-1/3">
                    <img 
                        src={garzaImage} 
                        alt="Garza del Ganado" 
                        className="w-10/12 h-auto object-contain max-w-md mx-auto"
                    />
                </div>

                {/* Contenido a la derecha */}
                <div className="flex-1 flex flex-col gap-6 md:gap-8">
                    {/* Contenedor flex con QR y título */}
                    <div className="flex items-center gap-4 md:gap-6">
                        <div className="w-32 md:w-48 flex-shrink-0">
                            <img 
                                src={qrImage} 
                                alt="Código QR" 
                                className="w-full h-auto"
                            />
                        </div>
                        
                        <div className="flex-grow text-right">
                            <h1 className="text-4xl md:text-6xl font-fredoka font-bold leading-tight">
                                <span className="text-conejera-dark_blue">Visita el</span>
                                <br />
                                <span className="text-conejera-orange text-8xl">Humedal</span>
                            </h1>
                        </div>
                    </div>

                    {/* Texto informativo */}
                    <p className="text-lg font-montserrat text-conejera-dark_blue text-right leading-relaxed">
                        Si deseas visitarlo, puedes encontrar senderos naturales y miradores estratégicos para la observación de fauna y flora. Se recomienda programar un recorrido previamente, ya que el horario de ingreso y recorridos guiados a los ecosistemas son los días lunes, miércoles y viernes de 8:00 a 9:30, de 10:00 a 12:00 y de 12:00 a 2:00 de la tarde. Los sábados solo se hace un recorrido en la mañana.
                    </p>

                    {/* Enlace */}
                    <div className="text-center md:text-right">
                        <a 
                            href="https://www.ambientebogota.gov.co/web/sda/caminatas-ecologicas" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-block font-fredoka text-lg md:text-xl underline underline-offset-4 hover:scale-105 transition-transform text-conejera-dark_blue"
                        >
                            Clic aquí para ingresar a los formularios o escanea el QR
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
