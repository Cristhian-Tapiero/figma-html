import { Animal, Plant } from '../types/types';

interface DescriptionsProps {
    selectedSpecies: Animal | Plant;
    onBack: () => void;
}

export default function Descriptions({ selectedSpecies, onBack }: DescriptionsProps) {
    const isAnimal = selectedSpecies instanceof Animal;

    // Determinar el color de fondo según el tipo
    const getBackgroundColor = () => {
        if (isAnimal) {
            const animal = selectedSpecies as Animal;
            return animal.type === 'mammal' ? 'bg-conejera-dark_blue' : 'bg-conejera-cyan';
        } else {
            const plant = selectedSpecies as Plant;
            return plant.type === 'flower' ? 'bg-conejera-dark_green' : 'bg-conejera-light_green';
        }
    };

    // Determinar si el texto debe ser blanco (mammal o flower)
    const isWhiteText = () => {
        if (isAnimal) {
            return (selectedSpecies as Animal).type === 'mammal';
        } else {
            return (selectedSpecies as Plant).type === 'flower';
        }
    };

    // Determinar la posición de la ilustración según orientation
    const getIconPosition = () => {
        return selectedSpecies.orientation === 'left'
            ? 'bottom-8 left-8'
            : 'bottom-8 right-8';
    };

    // Determinar dirección del flex y alineación según orientation
    const getFlexDirection = () => {
        return selectedSpecies.orientation === 'left' ? 'flex-row' : 'flex-row-reverse';
    };

    const getTextAlign = () => {
        return selectedSpecies.orientation === 'left' ? 'text-left' : 'text-right';
    };

    return (
        <section className={`w-screen h-screen ${getBackgroundColor()} relative overflow-hidden flex items-center justify-center p-8`}>
            {/* Botón de audio (solo para animales) - esquina superior derecha */}
            {isAnimal && (
                <button
                    className="absolute top-8 right-8 z-10 w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors shadow-lg"
                    aria-label={`Escuchar sonido de ${selectedSpecies.name}`}
                    onClick={() => {
                        console.log(`Playing sound: ${(selectedSpecies as Animal).sound}`);
                    }}
                >
                    <svg
                        width="28"
                        height="28"
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
            )}

            {/* Contenido central */}
            <div className="flex flex-col items-center text-center z-10 px-4 h-5/6">
                <div className='flex flex-col gap-y-3'>
                    <h1 className={`text-5xl md:text-7xl font-fredoka font-bold mb-4 ${isWhiteText() ? 'text-white' : 'text-white'}`}>
                        {selectedSpecies.name}
                    </h1>
                    <p className={`text-xl md:text-2xl font-montserrat italic mb-8 ${isWhiteText() ? 'text-white/90' : 'text-white/90'}`}>
                        ({selectedSpecies.scientificName})
                    </p>
                </div>
                <div className={`flex w-5/6 flex-grow gap-16 ${getFlexDirection()}`}>
                    <img src={selectedSpecies.image} alt={`Imagen de ${selectedSpecies.name}`} className="w-1/2 max-w-xl object-contain" />
                    <div className='flex flex-col justify-center items-end gap-y-8'>
                        <p className={`font-montserrat flex items-center text-3xl font-extralight ${getTextAlign()} ${isWhiteText() ? 'text-white' : 'text-white'}`}>
                            {selectedSpecies.description}
                        </p>
                        <button
                            className="px-8 py-3 md:px-10 md:py-4 bg-white/20 backdrop-blur-sm text-white font-fredoka text-xl md:text-2xl rounded-full hover:bg-white/30 transition-colors shadow-lg uppercase max-w-min"
                            onClick={onBack}
                        >
                            Volver
                        </button>
                    </div>
                </div>
            </div>

            {/* Ilustración posicionada en la esquina inferior según orientation */}
            <div className={`absolute ${getIconPosition()} z-10`}>
                <img
                    src={selectedSpecies.drawing}
                    alt={`Ilustración de ${selectedSpecies.name}`}
                    className="size-96 object-contain z-30"
                    style={
                        selectedSpecies.orientation === 'left'
                            ? { transform: 'scaleX(1)' }
                            : { transform: 'scaleX(-1)' }
                    }
                />
            </div>
        </section>
    );
}
