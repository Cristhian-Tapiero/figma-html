import botoncillo_real from '../assets/real/botoncillo.png';
import buchon_cucharita_real from '../assets/real/buchon.png';
import carreton_real from '../assets/real/carreton.png';
import garza_real from '../assets/real/garza.png';
import chucha_real from '../assets/real/chucha.png';
import comadreja_real from '../assets/real/comadreja.png';
import cucarachero_real from '../assets/real/cucarachero.png';
import curi_real from '../assets/real/curi.png';
import focha_real from '../assets/real/focha.png';
import gualola_real from '../assets/real/gualola.png';
import helecho_real from '../assets/real/helecho.png';
import ibis_real from '../assets/real/ibis.png';
import lenteja_de_agua_real from '../assets/real/lenteja_de_agua.png';
import pato_real from '../assets/real/pato.png';
import sombrilla_real from '../assets/real/sombrilla.png';
import tingua_real from '../assets/real/tingua.png';

import botoncillo_square from '../assets/plants/plants_square/botoncillo.svg';
import buchon_cucharita_square from '../assets/plants/plants_square/buchon_cucharita.svg';
import carreton_square from '../assets/plants/plants_square/carreton.svg';
import garza_square from '../assets/animals/big_square/garza.svg';
import chucha_square from '../assets/animals/big_square/chucha.svg';
import comadreja_square from '../assets/animals/big_square/comadreja.svg';
import cucarachero_square from '../assets/animals/big_square/cucarachero.svg';
import curi_square from '../assets/animals/big_square/curi.svg';
import focha_square from '../assets/animals/big_square/focha.svg';
import gualola_square from '../assets/plants/plants_square/gualola.svg';
import helecho_square from '../assets/plants/plants_square/helecho.svg';
import ibis_square from '../assets/animals/big_square/ibis.svg';
import lenteja_de_agua_square from '../assets/plants/plants_square/lenteja_de_agua.svg';
import pato_square from '../assets/animals/big_square/pato.svg';
import sombrilla_square from '../assets/plants/plants_square/sombrilla.svg';
import tingua_square from '../assets/animals/big_square/tingua.svg';

import botoncillo from '../assets/plants/botoncillo.svg';
import buchon_cucharita from '../assets/plants/buchon_cucharita.svg';
import carreton from '../assets/plants/carreton.svg';
import garza from '../assets/animals/garza.svg';
import chucha from '../assets/animals/chucha.svg';
import comadreja from '../assets/animals/comadreja.svg';
import cucarachero from '../assets/animals/cucarachero.svg';
import curi from '../assets/animals/curi.svg';
import focha from '../assets/animals/focha.svg';
import gualola from '../assets/plants/gualola.svg';
import helecho from '../assets/plants/helecho.svg';
import ibis from '../assets/animals/ibis.svg';
import lenteja_de_agua from '../assets/plants/lenteja_de_agua.svg';
import pato from '../assets/animals/pato.svg';
import sombrilla from '../assets/plants/sombrilla.svg';
import tingua from '../assets/animals/tingua.svg';

// Sonidos de animales
import sound_chucha from '../assets/animals/sounds/chucha.mp3';
import sound_cucarachero from '../assets/animals/sounds/cucarachero.mp3';
import sound_curi from '../assets/animals/sounds/curi.mp3';
import sound_focha from '../assets/animals/sounds/focha.mp3';
import sound_ibis from '../assets/animals/sounds/ibis.mp3';
import sound_pato from '../assets/animals/sounds/pato.mp3';
import sound_tingua from '../assets/animals/sounds/tingua.mp3';

// Lecturas de animales y plantas
import reading_garza from '../assets/animals/readings/garza.mp4';
import reading_cucha from '../assets/animals/readings/chucha.mp4';
import reading_comadreja from '../assets/animals/readings/comadreja.mp4';
import reading_cucarachero from '../assets/animals/readings/cucarachero.mp4';
import reading_curi from '../assets/animals/readings/curi.mp4';
import reading_focha from '../assets/animals/readings/focha.mp4';
import reading_ibis from '../assets/animals/readings/ibis.mp4';
import reading_pato from '../assets/animals/readings/pato.mp4';
import reading_tingua from '../assets/animals/readings/tingua.mp4';
import reading_botoncillo from '../assets/plants/readings/botoncillo.mp4';
import reading_buchon from '../assets/plants/readings/buchon_cucharita.mp4';
import reading_carreton from '../assets/plants/readings/carreton.mp4';
import reading_gualola from '../assets/plants/readings/gualola.mp4';
import reading_helecho from '../assets/plants/readings/helecho.mp4';
import reading_lenteja_de_agua from '../assets/plants/readings/lenteja_de_agua.mp4';
import reading_sombrilla from '../assets/plants/readings/sombrilla.mp4';


// Clases base para animales y plantas
export class Animal {
    public name: string;
    public scientificName: string;
    public description: string;
    public image: any;
    public icon: any;
    public drawing: any;
    public sound?: string; // Ahora es opcional
    public soundFile?: any; // Archivo de audio real
    public reading?: any;
    public type: 'mammal' | 'bird';
    public orientation: 'left' | 'right' = 'right';

    constructor(
        name: string, 
        scientificName: string, 
        description: string, 
        sound: string, 
        type: 'mammal' | 'bird', 
        image: any, 
        icon: any, 
        drawing: any, 
        orientation: 'left' | 'right' = 'right',
        soundFile?: any,
        reading?: any
    ) {
        this.name = name;
        this.scientificName = scientificName;
        this.description = description;
        this.sound = sound;
        this.type = type;
        this.image = image;
        this.icon = icon;
        this.drawing = drawing;
        this.orientation = orientation;
        this.soundFile = soundFile;
        this.reading = reading;
    }
}

export class Plant {
    public name: string;
    public scientificName: string;
    public description: string;
    public type: 'flower' | 'tree';
    public hints: string[];
    public image: any;
    public icon: any;
    public drawing: any;
    public orientation: 'left' | 'right' = 'right';
    public reading?: any;

    constructor(name: string, scientificName: string, description: string, type: 'flower' | 'tree', hints: string[], image: any, icon: any, drawing: any, orientation: 'left' | 'right' = 'right', reading?: any) {
        this.name = name;
        this.scientificName = scientificName;
        this.description = description;
        this.type = type;
        this.hints = hints;
        this.image = image;
        this.icon = icon;
        this.drawing = drawing;
        this.orientation = orientation;
        this.reading = reading;
    }
}

// Instancias de animales del humedal
export const garzaDelGanado = new Animal(
    'Garza del Ganado',
    'Bubulcus ibis',
    'Es una especie de ave de la familia Ardeidae, que habita en zonas tropicales, subtropicales y templadas de todo el mundo. Su plumaje blanco es una de sus principales características, y su alimentación se basa en insectos. Prefiere las áreas abiertas para perseguir el ganado.',
    'Croak croak!',
    'bird',
    garza_real,
    garza_square,
    garza,
    'right',
    undefined, // No tiene sonido
    reading_garza
);

export const fochaAmericana = new Animal(
    'Focha Americana',
    'Fulica americana',
    'Es una especie de ave acuática de la familia Rallidae que habita desde Alaska hasta el norte de Sudamérica, tiene plumaje gris oscuro en la cabeza y cuello, un pico blanco grueso con un punto rojizo, y mide de 34 a 50 cm, su dieta omnívora incluye plantas, insectos y peces. Vive en lagos, pantanos y marismas, es migratoria y destaca por su peculiar forma de nadar y gran resistencia al volar.',
    'Cluck cluck!',
    'bird',
    focha_real,
    focha_square,
    focha,
    'left',
    sound_focha,
    reading_focha
);

export const ibisAfeitado = new Animal(
    'Ibis Afeitado',
    'Phimosus infuscatus',
    'Es un ave de Sudamérica, con plumaje negro o parduzco con reflejos metalizados y cara desnuda rojiza, mide entre 46 y 56 cm y pesa 600 g, vive en pantanos, sabanas y arrozales, formando grandes bandadas que se alimentan de lombrices, peces pequeños, crustáceos e insectos acuáticos.',
    'Squawk squawk!',
    'bird',
    ibis_real,
    ibis_square,
    ibis,
    'right',
    sound_ibis,
    reading_ibis
);

export const tinguaBogotana = new Animal(
    'Tingua Bogotana',
    'Rallus semiplumbeus',
    'Ave endémica de la Cordillera Oriental de Colombia, mide 25 cm y tiene plumaje marrón oliváceo con alas rojizas, vive en pantanos entre 2.000 y 4.000 m a nivel del mar, se alimenta de invertebrados acuáticos y está en peligro de extinción, anida en vegetación acuática y emite un sonido agudo cuando se siente amenazada.',
    'Chirp chirp!',
    'bird',
    tingua_real,
    tingua_square,
    tingua,
    'left',
    sound_tingua,
    reading_tingua
);

export const cucaracheroDePantano = new Animal(
    'Cucarachero de pantano',
    'Cistothorus apolinari',
    'Ave endémica de la Cordillera Oriental de los Andes colombianos, mide 12,5 cm, con plumaje marrón oscuro y rayas grises, vive en pantanos y humedales entre 2.500 y 4.000 m sobre el nivel del mar, se alimenta de insectos acuáticos y está en peligro crítico su temporada de anidación es en marzo y agosto.',
    'Tweet tweet!',
    'bird',
    cucarachero_real,
    cucarachero_square,
    cucarachero,
    'right',
    sound_cucarachero,
    reading_cucarachero
);

export const patoZambullidor = new Animal(
    'Pato zambullidor',
    'Oxyura jamaicensis',
    'Es un ave de la familia Anatidae que habita en Centroamérica, América del Sur y el Caribe. Mide entre 30 y 35 cm, con plumaje marrón oscuro y manchas negras, vive en ciénagas, manglares y humedales hasta 800 m de altitud, se alimenta principalmente de semillas, flota semihundido y vuela más que otros patos zambullidores, pone de 4 a 6 huevos, con incubación de unos 28 días.',
    'Quack quack!',
    'bird',
    pato_real,
    pato_square,
    pato,
    'left',
    sound_pato,
    reading_pato
);

export const curiConejillo = new Animal(
    'Curi',
    'Cavia aperea',
    'Es un pequeño roedor de unos 27 cm que habita humedales y ríos de Sudamérica, su pelaje es marrón ocre con pelos negros, vive en colonias, es buen nadador y se alimenta de frutos, pastos y semillas, además, ayuda a dispersar semillas y favorecer la regeneración del ecosistema.',
    'Squeak squeak!',
    'mammal',
    curi_real,
    curi_square,
    curi,
    'right',
    sound_curi,
    reading_curi
);

export const chuchaComun = new Animal(
    'Chucha',
    'Didelphis pernigra',
    'Es un marsupial nocturno y solitario que habita humedales y bosques de Sudamérica. Mide entre 30 y 45 cm, su pelaje erizado tiene tonos negros, grises y blancos con una franja oscura en la cabeza, es omnívora, come frutas, invertebrados y pequeños vertebrados, ayuda a dispersar semillas y al sentirse amenazada, muestra los dientes, emite sonidos y libera un olor fuerte.',
    'Howl howl!',
    'mammal',
    chucha_real,
    chucha_square,
    chucha,
    'left',
    sound_chucha,
    reading_cucha
);

export const comadrejaColombiana = new Animal(
    'Comadreja',
    'Mustela frenata',
    'Es un mamífero carnívoro de 30 a 45 cm, con cola larga y pelaje marrón rojizo y blanco, habita humedales, bosques y praderas, refugiándose cerca del agua, se alimenta de invertebrados y pequeños vertebrados, es solitaria y activa día y noche, su rol ecológico es controlar poblaciones de roedores.',
    'Squeak squeak!',
    'mammal',
    comadreja_real,
    comadreja_square,
    comadreja,
    'right',
    undefined, // No tiene sonido
    reading_comadreja
);

// Instancias de plantas del humedal
export const buchonCucharita = new Plant(
    'Buchón Cucharita',
    'Limnobium laevigatum',
    'Es una planta acuática de la familia Pontederiaceae, variante del Buchón de agua, que crece en humedales y lagos, tiene hojas gruesas en forma de cuchara y raíces flotantes que ayudan a filtrar el agua, es importante para la filtración de contaminantes, pero puede volverse invasora.',
    'flower',
    [
        'Flota sin esfuerzo, formando verdes mantos en la superficie.', 
        'Ayudo a filtrar contaminantes en el agua',
        'Se considera invasora porque puede cubrir grandes áreas.'
    ],
    buchon_cucharita_real,
    buchon_cucharita_square,
    buchon_cucharita,
    'right',
    reading_buchon
);

export const carretonDeAgua = new Plant(
    'Carretón de agua',
    'Marsilea quadrifolia',
    'Es un helecho acuático perenne de la familia Marsileaceae, conocido como trébol de agua por sus hojas en forma de cuatro folíolos, habita humedales y lagos en Europa, Asia y América, se reproduce por rizomas y esporas, y se usa en alimentación y medicina tradicional, también puede cultivarse en acuarios con condiciones específicas.',
    'tree',
    [
        'Vive cerca de la orilla, donde el agua es calmada.',
        'Indica que el agua está limpia y equilibrada.',
        'Cumple un papel importante, ayudar a mantener la calidad del agua.'
    ],
    carreton_real,
    carreton_square,
    carreton,
    'left',
    reading_carreton
);

export const botoncilloAmarillo = new Plant(
    'Botoncillo',
    'Bidens laevis',
    'Es una planta acuática de la familia Asteraceae, conocida como mirasol de agua, puede crecer más de 1 m, con hojas lanceoladas y flores amarillas, habita humedales y riberas en América del Sur, México y EE.UU y es importante para la biodiversidad y como alimento de insectos polinizadores.',
    'flower',
    [
        'Forma parte de las plantas que indican un humedal saludable.', 
        'Crezco en humedales y a orillas de ríos',
        'Me llaman "Bidens laevis"'
    ],
    botoncillo_real,
    botoncillo_square,
    botoncillo,
    'right',
    reading_botoncillo
);

export const gualolaRojiza = new Plant(
    'Gualola',
    'Polygonum segetum',
    'Es una planta herbácea invasora que crece en humedales y suelos ácidos hasta 2.500 m, mide entre 20 y 80 cm, con tallo rojizo, hojas lanceoladas y flores coralinas, se reproduce por semillas y rizomas, puede afectar la biodiversidad por sus propiedades alelopáticas y se usa en infusiones medicinales y como planta ornamental.',
    'flower',
    [
        'Soy una planta invasora que crece en humedales', 
        'Es una especie que aprovecha la cercanía al agua para extenderse.',
        'Prefiere crecer en las orillas húmedas y fangosas.'
    ],
    gualola_real,
    gualola_square,
    gualola,
    'left',
    reading_gualola
);

export const helechoDeAgua = new Plant(
    'Helecho de agua',
    'Azolla filiculoides',
    'Planta herbácea invasora de humedales mide 20-80 cm, con tallo rojizo, hojas lanceoladas y flores coralinas, se reproduce por semillas y rizomas, sus propiedades alelopáticas inhiben el crecimiento de otras planta, se usa medicinalmente para hemorroides y como ornamental, pero puede afectar la biodiversidad acuática.',
    'tree',
    [
        'Soy una planta invasora con tallo rojizo característico.',
        'Mis propiedades especiales pueden inhibir el crecimiento de otras plantas.',
        'Me llaman "Azolla filiculoides" y tengo usos medicinales.'
    ],
    helecho_real,
    helecho_square,
    helecho,
    'right',
    reading_helecho
);

export const lentejaDeAgua = new Plant(
    'Lenteja de Agua',
    'Lemna gibba',
    'La lenteja de agua es una planta acuática flotante muy pequeña que crece rápido en estanques y lagos, forma alfombras densas y se reproduce por fragmentación, absorbe nutrientes, controla algas y sirve de alimento para aves y peces, se usa en biorremediación, alimentación animal y humana.',
    'flower',
    [
        'En algunos lugares se usa en jardinería acuática.', 
        'Floto formando densas alfombras verdes',
        'Me llaman "Lemna gibba"'
    ],
    lenteja_de_agua_real,
    lenteja_de_agua_square,
    lenteja_de_agua,
    'left',
    reading_lenteja_de_agua
);

export const sombrillaDeAgua = new Plant(
    'Sombrilla de agua',
    'Hydrocotyle ranunculoides',
    'La Sombrilla de agua es una planta acuática con hojas redondas en forma de paraguas, crece en humedales y lagos de América, se reproduce por rizomas y forma alfombras flotantes, ayuda a filtrar contaminantes, estabilizar suelos y ofrece refugio a fauna acuática.',
    'tree',
    [
        'Es valorada por su capacidad para cubrir y proteger espacios en el agua.', 
        'Me adapto muy bien a zonas húmedas y cuerpos de agua dulce',
        'Soy llamada "Hydrocotyle ranunculoides"'
    ],
    sombrilla_real,
    sombrilla_square,
    sombrilla,
    'right',
    reading_sombrilla
);

// Arrays para facilitar iteración en componentes
export const allAnimals: Animal[] = [
    garzaDelGanado,
    fochaAmericana,
    ibisAfeitado,
    tinguaBogotana,
    cucaracheroDePantano,
    patoZambullidor,
    curiConejillo,
    chuchaComun,
    comadrejaColombiana
];

export const allPlants: Plant[] = [
    buchonCucharita,
    carretonDeAgua,
    botoncilloAmarillo,
    gualolaRojiza,
    helechoDeAgua,
    lentejaDeAgua,
    sombrillaDeAgua
];

// Todos los elementos del ecosistema juntos
export const allSpecies = [...allAnimals, ...allPlants];

// Filtros útiles por tipo
export const birds = allAnimals.filter(a => a.type === 'bird');
export const mammals = allAnimals.filter(a => a.type === 'mammal');
export const flowers = allPlants.filter(p => p.type === 'flower');
export const trees = allPlants.filter(p => p.type === 'tree');