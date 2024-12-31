export default function Banner() {
  return (
    <div className="relative w-full h-[200px] overflow-hidden flex items-center">
      <div className="absolute flex space-x-8 animate-marquee">
        {Array(10)
          .fill(null)
          .map((_, index) => (
            <span key={index} className="text-red-500 text-6xl">
              ❤️
            </span>
          ))}
      </div>
    </div>
  )
}
