import { useState } from 'react';
import botoncillo from '../assets/map_items/botoncillo.svg';
import buchon_cuchartrita from '../assets/map_items/buchon_cucharita.svg';
import carreton from '../assets/map_items/carreton.svg';
import garza from '../assets/map_items/garza.svg';
import chucha from '../assets/map_items/chucha.svg';
import comadreja from '../assets/map_items/comadreja.svg';
import cucarachero from '../assets/map_items/cucarachero.svg';
import curi from '../assets/map_items/curi.svg';
import focha from '../assets/map_items/focha.svg';
import gualola from '../assets/map_items/gualola.svg';
import helecho from '../assets/map_items/helecho.svg';
import ibis from '../assets/map_items/ibis.svg';
import lenteja_de_agua from '../assets/map_items/lenteja_de_agua.svg';
import pato from '../assets/map_items/pato.svg';
import sombrilla from '../assets/map_items/sombrilla.svg';
import tingua from '../assets/map_items/tingua.svg';
import map from '../assets/map_items/map.svg';
import marker from '../assets/map_items/marker.svg';
import Descriptions from './Descriptions';
import Minigames from './Minigames';
import {
    patoZambullidor,
    tinguaBogotana,
    gualolaRojiza,
    chuchaComun,
    buchonCucharita,
    garzaDelGanado,
    comadrejaColombiana,
    botoncilloAmarillo,
    lentejaDeAgua,
    carretonDeAgua,
    helechoDeAgua,
    cucaracheroDePantano,
    fochaAmericana,
    curiConejillo,
    ibisAfeitado,
    sombrillaDeAgua,
    Animal,
    Plant
} from '../types/types';

export default function Map() {
    const [selectedSpecies, setSelectedSpecies] = useState<Animal | Plant | null>(null);
    const [showMinigames, setShowMinigames] = useState(false);

    // array of overlay icons with approximate positions (percentages)
    // Ahora cada ícono está mapeado a su especie correspondiente
    const icons = [
        { src: pato, alt: 'Pato', top: '25%', left: '5%', species: patoZambullidor },
        { src: tingua, alt: 'Tingua', top: '20%', left: '20%', species: tinguaBogotana },
        { src: gualola, alt: 'Gualola', top: '6%', left: '35%', species: gualolaRojiza },
        { src: chucha, alt: 'Chucha', top: '13%', left: '50%', species: chuchaComun },
        { src: buchon_cuchartrita, alt: 'Buchon', top: '42%', left: '3%', species: buchonCucharita },
        { src: garza, alt: 'Garza', top: '33%', left: '20%', species: garzaDelGanado },
        { src: comadreja, alt: 'Comadreja', top: '29%', left: '38%', species: comadrejaColombiana },
        { src: botoncillo, alt: 'Botoncillo', top: '28%', left: '62%', species: botoncilloAmarillo },
        { src: lenteja_de_agua, alt: 'Lenteja de agua', top: '50%', left: '15%', species: lentejaDeAgua },
        { src: carreton, alt: 'Carretón', top: '47%', left: '30%', species: carretonDeAgua },
        { src: helecho, alt: 'Helecho', top: '62%', left: '38%', species: helechoDeAgua },
        { src: cucarachero, alt: 'Cucarachero', top: '50%', left: '52%', species: cucaracheroDePantano },
        { src: focha, alt: 'Focha', top: '52%', left: '70%', species: fochaAmericana },
        { src: curi, alt: 'Curi', top: '56%', left: '87%', species: curiConejillo },
        { src: ibis, alt: 'Ibis', top: '68%', left: '60%', species: ibisAfeitado },
        { src: sombrilla, alt: 'Sombrilla', top: '85%', left: '50%', species: sombrillaDeAgua },
    ];

    // Si hay una especie seleccionada, mostrar el componente Descriptions
    if (selectedSpecies) {
        return <Descriptions selectedSpecies={selectedSpecies} onBack={() => setSelectedSpecies(null)} />;
    }

    // Si se activaron los minijuegos, mostrar el componente Minigames
    if (showMinigames) {
        return <Minigames onBack={() => setShowMinigames(false)} />;
    }

    return (
        <section className="w-screen mx-auto h-screen">
            <div className="bg-white rounded-md shadow-lg overflow-hidden flex flex-col md:flex-row items-stretch h-full">
                {/* Left: Map area */}
                <div className="relative w-full bg-conejera-bone p-6 flex items-center justify-center">
                    <div className="relative w-full mx-auto">
                        <img src={map} alt="Mapa del humedal" className="w-full h-full object-contain" />

                        {/* Overlay icons positioned absolutely over the map using percentages */}
                        {icons.map((icon, idx) => (
                            <button
                                key={idx}
                                aria-label={icon.alt}
                                className="absolute size-24 hover:scale-110 transition"
                                style={{ top: icon.top, left: icon.left }}
                                onClick={() => setSelectedSpecies(icon.species)}
                            >
                                <img src={icon.src} alt={icon.alt} className="w-full h-full object-contain" />
                            </button>
                        ))}
                    </div>

                    {/* small instruction bubble bottom-left */}
                    <div className="absolute left-6 bottom-6 flex items-center gap-3">
                        <img src={marker} alt="icono" className="size-56" />

                        <p className="text-sm md:text-3xl font-montserrat text-conejera-dark_blue max-w-xs text-balance">
                            Has clic en los íconos para conocer más
                        </p>
                    </div>
                </div>

                {/* Right: Title / legend */}
                <aside className="md:w-2/5 w-full p-8 flex flex-col gap-8 justify-center bg-white">
                    <header className="flex items-start justify-center py-6">
                        <div className='text-right'>
                            <h2 className="text-6xl font-fredoka font-semibold text-conejera-light_blue">Mapa del</h2>
                            <h1 className="text-8xl font-fredoka font-semibold text-conejera-orange leading-tight">humedal</h1>
                        </div>
                    </header>

                    <div>
                        <div className="mt-4 space-y-3 text-right">
                            <LegendItem label="Aves" color="conejera-light_blue" />
                            <LegendItem label="Flores" color="conejera-medium_green" />
                            <LegendItem label="Plantas" color="conejera-light_green" />
                            <LegendItem label="Mamíferos" color="conejera-emerald" />
                        </div>
                    </div>

                    <div className="flex items-center justify-end mt-6">
                        <button 
                            onClick={() => setShowMinigames(true)}
                            className="h-12 md:h-14 gap-4 px-4 rounded-full border-2 border-conejera-light_blue flex items-center justify-center text-conejera-light_blue hover:bg-conejera-light_blue/10 transition"
                        >
                            Minijuegos
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 5v14M5 12h14" stroke="#1A659E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </aside>
            </div>
        </section>
    );
}

function LegendItem({ label, color }: { label: string; color: string }) {
    // color is a tailwind color token like 'conejera-light_blue' -> we use it in className
    return (
        <div className="flex items-end justify-end gap-3">
            <div className="flex items-center gap-2 justify-end text-right">
                <span className="text-5xl font-fredoka font-semibold text-conejera-dark_blue">{label}</span>
                <span className={`text-${color} text-5xl`}>★</span>
            </div>
        </div>
    );
}
