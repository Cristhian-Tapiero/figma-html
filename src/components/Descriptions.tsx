import { Animal, Plant } from '../types/types';
import gualolas_image from '../assets/plants/gualolas.svg';

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
            return animal.type === 'mammal' ? 'bg-conejera-light_blue' : 'bg-conejera-cyan';
        } else {
            const plant = selectedSpecies as Plant;
            return plant.type === 'flower' ? 'bg-conejera-dark_green' : 'bg-conejera-light_green';
        }
    };

    // Determinar si el texto debe ser blanco (mammal o flower)
    const getTextColor = () => {
        if (isAnimal) {
            const animal = selectedSpecies as Animal
            return animal.type === 'mammal' ? 'text-white' : 'text-conejera-dark_blue';
        } else {
            return (selectedSpecies as Plant).type === 'flower' ? 'text-white' : 'text-conejera-dark_blue';
        }
    };

    // Determinar la posición de la ilustración según orientation
    const getIconPosition = () => {
        return selectedSpecies.orientation === 'left'
            ? 'bottom-8 left-8'
            : 'bottom-8 right-8';
    };

    const reproduceAudio = (sound : any) => {
        const audio = new Audio(sound);
        audio.play();
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
            {/* Botón de audio (solo para animales) - esquina superior izquierda */}
            {isAnimal && (
                <button
                    className="absolute top-8 left-8 z-10 size-32 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors shadow-lg"
                    aria-label={`Escuchar sonido de ${selectedSpecies.name}`}
                    onClick={() => {
                        reproduceAudio((selectedSpecies as Animal).soundFile);
                    }}
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
            )}

            {
                selectedSpecies.reading && (
                    <button className='absolute top-8 right-8 z-10 size-32 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors shadow-lg'
                        onClick={() => {
                            reproduceAudio(selectedSpecies.reading!);
                        }}
                    >
                        <svg width="80" height="80" viewBox="0 0 103 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.0301039 56.7843C0.0301039 49.3496 -0.0376298 41.9109 0.0301039 34.4722C0.241274 15.4631 15.8957 0.0199215 34.897 0C51.1292 0 65.4728 11.411 68.9272 27.0933C70.6914 34.9024 69.7185 43.0806 66.1715 50.2579C62.6245 57.4353 56.7189 63.1758 49.4438 66.5179C49.0853 66.6852 48.7147 66.8287 48.3481 66.9881C45.0332 68.4264 44.1247 70.2392 44.9415 73.7932C47.6708 85.7262 41.0448 97.4361 29.55 100.998C15.0152 105.496 0.157595 94.6909 0.0221274 79.4828C-0.0296689 71.9246 0.0261195 64.3544 0.0301039 56.7843ZM6.00661 56.7404C6.00661 64.3106 5.94684 71.8808 6.00661 79.451C6.032 81.8041 6.55235 84.1255 7.53383 86.2643C8.51531 88.4031 9.93594 90.3113 11.7034 91.865C13.4708 93.4188 15.5454 94.5831 17.7924 95.2824C20.0393 95.9817 22.4083 96.2002 24.7452 95.9239C27.0822 95.6475 29.3349 94.8824 31.3567 93.6783C33.3786 92.4741 35.1244 90.858 36.4806 88.9348C37.8368 87.0117 38.7731 84.8247 39.2286 82.516C39.6841 80.2073 39.6486 77.8285 39.1244 75.5344C38.5507 72.9565 38.3275 70.4384 39.3236 67.9124C40.6345 64.5975 43.1725 62.7049 46.3599 61.3224C58.9903 55.844 66.0426 42.1978 63.1818 29.0496C60.2055 15.3754 48.4796 5.94058 34.5822 6.0123C19.2067 6.10792 6.29347 18.8218 6.02254 34.253C5.92293 41.7355 6.02652 49.238 6.02652 56.7285L6.00661 56.7404Z" fill="white" />
                            <path d="M70.4404 75.3309C70.5241 66.8044 73.4884 59.3458 79.3295 53.0188C81.0348 51.178 82.7401 50.8952 84.1625 52.1662C85.5849 53.4372 85.4454 55.2102 83.764 57.0429C73.8869 67.9241 73.8988 83.0843 83.7919 94.0013C85.4375 95.8182 85.561 97.6191 84.1226 98.8741C82.6843 100.129 81.0427 99.8423 79.4291 98.1171C73.4725 91.7382 70.4683 84.1601 70.4404 75.3309Z" fill="white" />
                            <path d="M82.418 75.6271C82.3444 70.3486 84.3096 65.2451 87.9044 61.3792C89.5181 59.6062 91.1676 59.3671 92.59 60.6102C94.0124 61.8533 93.9527 63.5426 92.4028 65.3276C86.9841 71.563 86.996 79.4878 92.4267 85.7511C93.9128 87.4723 94.0204 89.0621 92.7096 90.3331C91.3429 91.6638 89.5978 91.5005 88.016 89.7912C84.3875 85.9721 82.3809 80.8949 82.418 75.6271Z" fill="white" />
                            <path d="M98.689 68.3081C101.45 68.3639 102.916 70.9816 101.502 72.9179C100.151 74.7627 100.044 76.2727 101.502 78.0975C102.554 79.4243 102.235 80.8865 101.004 82.022C99.8444 83.0938 98.1112 82.9424 96.8641 81.7631C93.5731 78.6473 93.5332 72.4796 96.8641 69.3599C97.4458 68.7981 98.2905 68.5272 98.689 68.3081Z" fill="white" />
                            <path d="M20.1978 28.6704C24.4052 25.9571 28.8796 25.0845 33.6927 26.6782C39.4501 28.5986 43.6177 34.0332 43.8727 39.922C43.9723 42.217 42.9364 43.6753 41.1116 43.8187C39.2867 43.9621 38.0875 42.6672 37.8842 40.3563C37.4858 36.0254 34.5334 32.7184 30.3618 31.9893C26.5369 31.316 22.3931 33.4236 20.891 37.0454C20.4926 37.9578 20.4528 39.3563 20.891 40.193C24.9949 48.0381 24.8754 55.7796 20.9588 63.6685C18.7435 68.1269 17.9705 72.9798 17.9387 77.9642C17.9387 79.0001 17.6 80.3547 16.8987 80.9723C16.1975 81.5899 14.5918 81.9007 13.8826 81.4863C13.3898 81.1525 12.9736 80.7177 12.6617 80.2107C12.3498 79.7038 12.1494 79.1363 12.0737 78.5459C11.755 71.9957 13.2013 65.7682 16.058 59.8715C18.6758 54.4847 18.5801 49.1138 15.9226 43.7868C10.225 32.3399 13.9304 20.0962 24.7439 14.4384C35.4179 8.86043 48.9687 13.0001 54.8934 23.6422C56.4378 26.4014 57.3943 29.4505 57.7029 32.5975C58.0115 35.7444 57.6653 38.9212 56.6863 41.9278C55.7073 44.9345 54.1165 47.7061 52.0141 50.068C49.9118 52.4299 47.3433 54.3312 44.4703 55.6521C43.7532 55.9828 42.8487 56.5326 42.2431 56.3334C41.1594 55.9788 39.8844 55.3453 39.3226 54.4329C38.5735 53.2376 39.1473 51.8351 40.4024 50.9904C41 50.592 41.7212 50.3729 42.3626 50.0263C48.5742 46.6635 51.9848 41.464 51.7776 34.3839C51.5784 27.503 48.1917 22.3473 41.8606 19.4946C35.5295 16.6418 29.4693 17.5024 24.2498 22.0963C22.3892 23.7378 21.1341 26.0806 19.6041 28.0727L20.1978 28.6704Z" fill="white" />
                        </svg>
                    </button>
                )
            }

            {/* Contenido central */}
            <div className="flex flex-col items-center text-center z-10 px-4 h-5/6">
                <div className={`flex flex-col gap-y-3`}>
                    <h1 className={`text-9xl font-fredoka font-bold mb-4 ${getTextColor()}`}>
                        {selectedSpecies.name}
                    </h1>
                    <p className={`text-4xl font-montserrat italic font-semibold mb-8 ${getTextColor()}`}>
                        ({selectedSpecies.scientificName})
                    </p>
                </div>
                <div className={`flex w-5/6 flex-grow gap-16 ${getFlexDirection()}`}>
                    <img src={selectedSpecies.image} alt={`Imagen de ${selectedSpecies.name}`} className="w-1/2 max-w-xl object-contain" />
                    <div className='flex flex-col justify-center items-end gap-y-8'>
                        <p className={`font-montserrat flex items-center text-3xl mt-8  ${getTextAlign()} ${getTextColor()}`}>
                            {selectedSpecies.description}
                        </p>
                        <button
                            className={`px-8 py-3 md:px-10 md:py-4 bg-conejera-dark_blue backdrop-blur-sm ${selectedSpecies.type === 'mammal' ? 'text-conejera-orange' : 'text-conejera-bone'} font-fredoka text-xl md:text-4xl rounded-full hover:bg-opacity-80 transition-colors shadow-lg uppercase max-w-min font-extrabold`}
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
                    src={selectedSpecies.name == "Gualola" ? gualolas_image : selectedSpecies.drawing}
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
