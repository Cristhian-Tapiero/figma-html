import blueWave from '../assets/wave-blue.svg'
import garza from '../assets/animals/garza.svg'

export default function Greeting() {
    return (
        <div className="w-screen h-screen bg-conejera-light_blue relative overflow-hidden flex items-center">
            <main className='w-11/12 h-[80vh] flex gap-x-16 mx-auto h-full justify-center'>
                <div className='flex flex-col gap-y-5 items-start justify-center grow'>
                    <h1 className='text-7xl text-conejera-white font-fredoka font-bold'>Guardianes del
                        <br />
                        <span className='text-conejera-orange text-8xl'>Humedal</span>
                    </h1>
                    <p className='font-montserrat text-conejera-white/95 text-2xl font-thin leading-relaxed max-w-3xl'>
                        Prepárate para reconectar con la Conejera, volviéndote un guardián del humedal, inicia tu experiencia recorriendo el humedal y descubriendo las especies más importantes.
                    </p>
                    <button className='bg-conejera-dark_blue text-conejera-orange text-4xl font-fredoka font-extrabold py-4 px-6 rounded-full shadow-xl hover:bg-conejera-orange/20 transition-colors max-w-max'>
                        Comenzar
                    </button>
                </div>
                <div className="flex items-center justify-center grow">
                    <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">
                        {/* background circle with darker orange shadow */}
                        <div className="absolute inset-0 rounded-full -translate-y-1/4 bg-conejera-orange shadow-[inset_0_-12px_24px_rgba(0,0,0,0.15),0_20px_40px_rgba(150,50,20,0.45)] animate-slide-up"></div>

                        {/* garza image centered above the circle and mirrored horizontally */}
                        <img
                            src={garza}
                            alt="Garza"
                            className="relative z-10 w-[52rem] object-contain transform scale-x-[-1] animate-slide-up-delay"
                        />
                    </div>
                </div>
            </main>
            <img src={blueWave} alt="Ola azul de decoración" className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10" />
        </div>
    )
}
