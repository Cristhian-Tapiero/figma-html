import { useState } from 'react'
import blueWave from '../assets/wave-blue.svg'
import garza from '../assets/animals/garza.svg'
import logo from '../assets/logo.svg'
import Map from './Map'

export default function Greeting() {
    const [expanded, setExpanded] = useState(false)
    const [showMap, setShowMap] = useState(false)

    const handleStart = () => {
        setExpanded(true)
        // after the animation/intro completes, show the Map component in-place
        setTimeout(() => {
            setShowMap(true)
        }, 4000)
    }

    if (showMap) return <Map />

    return (
        <div className="w-screen h-screen bg-conejera-light_blue relative overflow-hidden flex items-center">
            <main className="w-full h-full flex mx-auto justify-center relative">
                {/* Text content with fade out */}
                <div className={`flex flex-col gap-y-5 items-start justify-center px-12 transition-all duration-700 ${expanded ? 'hidden' : 'opacity-100 grow'
                    }`}>
                    <h1 className='text-7xl text-white font-bold font-fredoka'>Guardianes del
                        <br />
                        <span className='text-conejera-orange text-8xl'>Humedal</span>
                    </h1>
                    <p className='text-white/95 text-2xl font-thin font-montserrat leading-relaxed max-w-3xl'>
                        Prepárate para reconectar con la Conejera, volviéndote un guardián del humedal, inicia tu experiencia recorriendo el humedal y descubriendo las especies más importantes.
                    </p>
                    <button
                        onClick={handleStart}
                        className='bg-conejera-dark_blue text-conejera-orange text-4xl font-extrabold py-4 px-6 rounded-full shadow-xl hover:bg-conejera-orange/20 transition-colors max-w-max z-40'
                    >
                        Comenzar
                    </button>
                </div>

                {/* Container for circle, garza and logo */}
                <div className={`flex items-center justify-center transition-all duration-1000 ${expanded ? 'grow-[2]' : 'grow'
                    }`}>
                    <div className={`relative w-full h-full flex items-center ${expanded ? 'justify-between' : 'justify-center'}`}>

                        {/* Orange circle that expands to full screen (kept centered).
                            Use fixed positioning so it stays out of layout flow and doesn't
                            affect the space distribution between the garza and the logo. */}
                        <div className={`fixed right-[10rem] top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none z-10 flex-none`}>
                            <div
                                className={`rounded-full bg-orange-500 shadow-[inset_0_-12px_24px_rgba(0,0,0,0.15),0_20px_40px_rgba(150,50,20,0.45)] transition-all duration-[1500ms] ease-out ${expanded
                                        ? 'w-[300vmax] h-[300vmax] translate-x-[50%] translate-y-0'
                                        : 'w-72 h-72 md:w-96 md:h-96 -translate-y-1/4'
                                    }`}
                                style={{
                                    animationName: expanded ? 'none' : 'slideUp',
                                    animationDuration: '1s',
                                    animationTimingFunction: 'ease-out',
                                    animationFillMode: 'forwards'
                                }}
                            />
                        </div>

                        {/* Garza: in initial state it's absolutely positioned and large; when expanded it becomes a left column occupying half the screen */}
                        <div className={`relative transition-all duration-1000 ease-out ${expanded ? 'w-1/2 h-full flex items-center justify-start px-8' : 'absolute inset-0 flex items-center justify-center'}`}>
                            <img
                                src={garza}
                                alt="Garza"
                                className={`z-20 object-contain transition-all duration-1000 ease-out ${!expanded
                                        ? 'w-full max-w-none translate-x-0 translate-y-0'
                                        : 'w-[30rem] scale-x-[-1] translate-x-0 translate-y-0'
                                    }`}
                                style={{
                                    animationName: expanded ? 'none' : 'slideUp',
                                    animationDuration: '1s',
                                    animationDelay: '0.2s',
                                    animationTimingFunction: 'ease-out',
                                    animationFillMode: 'forwards'
                                }}
                            />
                        </div>

                        {/* Logo: initially hidden; when expanded it becomes the right column occupying half the screen */}
                        <div className={`relative transition-all duration-1000 ease-out ${expanded ? 'w-1/2 h-full flex items-center justify-end px-8' : 'absolute inset-0 flex items-center justify-center pointer-events-none'}`}>
                            <img
                                src={logo}
                                alt="Logo"
                                className={`z-30 object-contain transition-all duration-1000 ease-out ${expanded
                                        ? 'w-5/6 max-w-none opacity-100'
                                        : 'w-32 opacity-0 pointer-events-none'
                                    }`} 
                            />
                        </div>
                    </div>
                </div>
            </main>

            {/* Wave decoration that fades out */}
            <img
                src={blueWave}
                alt="Ola azul de decoración"
                className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10 transition-opacity duration-700 ${expanded ? 'opacity-0' : 'opacity-100'
                    }`}
            />
        </div>
    )
}