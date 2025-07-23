export default function Hero() {
  return (
    <div
      className="py-16 bg-[var(--background text-on-background  "
    >
      <div className="container mx-auto px-5 flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-xl mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-primary">
            ЛЕТНЯЯ ШКОЛА <br /> ЮНЫХ ПРОГРАММИСТОВ
          </h1>
          <p className="mb-6 text-lg text-on-surface">
            Обучаем школьников программированию с 1976 года
          </p>

          <div className="flex items-start gap-3 mb-4">
            <img
              src="https://optim.tildacdn.com/tild3064-6464-4538-b637-663938613634/-/resize/120x/-/format/webp/1.png.webp"
              alt="Календарь"
              className="w-6 h-6 mt-1"
            />
            <p className="text-lg text-on-background">
              14 июля — 27 июля 2025 года
            </p>
          </div>

          <div className="flex items-start gap-3">
            <img
              src="https://optim.tildacdn.com/tild6538-3266-4633-b331-386562366637/-/resize/120x/-/format/webp/geolocation-pin.png.webp"
              alt="Локация"
              className="w-6 h-6 mt-1"
            />
            <p className="text-lg text-on-background">
              На площадке Новосибирского государственного университета
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://i.pinimg.com/originals/9d/c4/8d/9dc48d8003a0e35e59e5f4e93598f3d1.gif"
            alt="ноутбук с кодом"
            className="max-w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}
