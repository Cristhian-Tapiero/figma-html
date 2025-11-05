export default function Feedback({type}: {type: 'animal' | 'plant'}) {
    
    return (
        <section className="w-screen h-screen flex items-center justify-center bg-conejera-light_blue overflow-hidden relative">
            <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-[90vmax] h-[90vmax] pointer-events-none ${type === 'animal' ? 'bg-conejera-orange' : 'bg-conejera-cyan'}`} />
            <div className="relative z-10 flex items-center justify-center w-5/6 h-3/4">
            </div>
        </section>
    )
}