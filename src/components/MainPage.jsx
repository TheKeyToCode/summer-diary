import { getSingetonInfo } from '../services/api.js'
import { useState, useEffect } from 'react'
import { correctURL } from '../services/img.js'


export default function MainPage() {
    const [mainInfo, setMainInfo] = useState({});
    
    useEffect(() => {
        getSingetonInfo('main_page').then((r) => {
            setMainInfo(r)
        });
    }, [])
    if (mainInfo.title === undefined) {
        return (<></>)
    }

  return (
    <div
      className="py-16 text-on-background relative"
    >
      <div className="container mx-auto px-5 flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-xl mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-primary">
            {mainInfo.title}
          </h1>
          <p className="mb-6 text-lg text-on-surface">
            {mainInfo.description}
          </p>

          <div className="flex items-start gap-3 mb-4">
            <img
              src={correctURL(mainInfo.calendar.path)}
              alt="Календарь"
              className="w-6 h-6 mt-1"
            />
            <p className="text-lg text-on-background">
              {mainInfo.dates}
            </p>
          </div>

          <div className="flex items-start gap-3">
            <img
              src={correctURL(mainInfo.geolocation.path)}
              alt="Локация"
              className="w-6 h-6 mt-1"
            />
            <p className="text-lg text-on-background">
              {mainInfo.place}
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center relative">
        <div className='absolute top-0 right-0 -z-1 w-[900px] max-w-[100vw] pl-10 opacity-20 blur-xs'>
        <img src="http://api.diary.ssypmarket.ru/storage/uploads/2025/07/24/fon_uid_6881e946cf8ba.png" className='h-auto w-full' alt="" />
      </div>
          <img
            src={correctURL(mainInfo.hero_image.path)}
            alt="ноутбук с кодом"
            className="max-w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}
