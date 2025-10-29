import { useState } from 'react'
import blueWave from '../assets/wave-blue.svg'
import garza from '../assets/animals/garza.svg'
import logo from '../assets/logo.svg'

export default function Greeting() {
    const [expanded, setExpanded] = useState(false)

    const handleStart = () => {
        // enter expanded / loading mode
        setExpanded(true)
        // after 4s redirect to the map interface (adjust route if needed)
        setTimeout(() => {
            window.location.href = '/map'
        }, 4000)
    }

    return (
        <div className="w-screen h-screen bg-conejera-light_blue relative overflow-hidden flex items-center">
            <main className={`${expanded ? 'w-full h-full' : 'w-11/12 h-[80vh]'} flex gap-x-16 mx-auto h-full justify-center`}> 
                {/* hide header/content while expanded so the circle + logo + garza form the loading screen */}
                {!expanded && (
                    <div className='flex flex-col gap-y-5 items-start justify-center grow'>
                        <h1 className='text-7xl text-conejera-white font-fredoka font-bold'>Guardianes del
                            <br />
                            <span className='text-conejera-orange text-8xl'>Humedal</span>
                        </h1>
                        <p className='font-montserrat text-conejera-white/95 text-2xl font-thin leading-relaxed max-w-3xl'>
                            Prepárate para reconectar con la Conejera, volviéndote un guardián del humedal, inicia tu experiencia recorriendo el humedal y descubriendo las especies más importantes.
                        </p>
                        <button onClick={handleStart} className='bg-conejera-dark_blue text-conejera-orange text-4xl font-fredoka font-extrabold py-4 px-6 rounded-full shadow-xl hover:bg-conejera-orange/20 transition-colors max-w-max'>
                            Comenzar
                        </button>
                    </div>
                )}
                <div className="flex items-center justify-center grow">
                    <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">
                        {/* background circle with darker orange shadow */}
                        <div
                            className={`rounded-full bg-conejera-orange shadow-[inset_0_-12px_24px_rgba(0,0,0,0.15),0_20px_40px_rgba(150,50,20,0.45)] transition-transform duration-700 ease-out ${expanded ? 'fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' : 'absolute inset-0 -translate-y-1/4 animate-slide-up'}`}
                                style={expanded ? { width: '18rem', height: '18rem', transform: 'translate(-50%,-50%) scale(40)', zIndex: 0 } : undefined}
                        />

                        {/* logo that appears on the right when expanded */}
                        <img
                            src={logo}
                            alt="Logo"
                            className={`absolute top-1/2 transform -translate-y-1/2 transition-all duration-700 ease-out z-30 ${expanded ? 'right-0 opacity-100 w-[50vw] pr-8' : 'right-6 opacity-0 w-32 pointer-events-none'}`}
                        />

                        {/* garza image centered above the circle and mirrored horizontally */}
                        <img
                            src={garza}
                            alt="Garza"
                            className={`relative z-20 w-[52rem] object-contain transform scale-x-[-1] transition-transform duration-700 ease-out ${expanded ? '-translate-x-[25vw] scale-125' : 'animate-slide-up-delay'}`}
                        />
                    </div>
                </div>
            </main>
            {/* removed loader overlay; when expanded we hide other decorative elements so loading screen shows only circle+garza+logo */}
            <img src={blueWave} alt="Ola azul de decoración" className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10 ${expanded ? 'hidden' : ''}`} />
        </div>
    )
}
