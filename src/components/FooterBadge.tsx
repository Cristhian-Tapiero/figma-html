import garza from '../assets/animals/garza.svg'

export default function FooterBadge() {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
      <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-conejera-orange flex items-center justify-center shadow-lg">
        <img src={garza} alt="garza" className="w-16 h-16 md:w-20 md:h-20 object-contain -mt-1" />
      </div>
    </div>
  )
}
