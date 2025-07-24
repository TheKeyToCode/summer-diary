import { getCollectionInfo } from '../services/api.js';
import { useState, useEffect } from 'react';
import { correctURL } from '../services/img.js';

export default function Masters() {
  const [masterInfo, setMasterInfo] = useState({});

  useEffect(() => {
    getCollectionInfo('our_prepod').then((data) => {
      setMasterInfo(data);
      console.log(data)
    });
  }, []);

  if (masterInfo.entries === undefined) {
    return (<></>);
  }

  return (
    <div className="container px-5 py-24 mx-auto bg-gradient-to-b from-white via-blue-50 to-white rounded-2xl shadow-inner">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-blue-400 drop-shadow-[0_0_10px_rgba(0,0,255,0.9)] p-4 mb-10 border-b-4 border-blue-500 w-fit mx-auto rounded-lg bg-white bg-opacity-30 shadow-lg animate-bounce">
        {masterInfo.title}
      </h1>

      <div className="relative flex items-center bg-gradient-to-br from-yellow-900 via-yellow-700 to-yellow-800 border-[10px] border-yellow-400 rounded-[2rem] p-10 shadow-[0_0_120px_40px_rgba(255,215,0,0.6)] ring-4 ring-yellow-300 ring-offset-8 ring-offset-yellow-100 transition-all duration-700 min-h-[300px] overflow-hidden hover:scale-[1.02] transform-gpu group">
        {/* Сияние */}
        <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_center,_gold,_transparent_80%)] opacity-40 blur-3xl animate-[aura_6s_ease-in-out_infinite] z-0"></div>

        {/* Частицы */}
        <div className="absolute w-full h-full overflow-hidden z-0 pointer-events-none">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-yellow-300 rounded-full animate-[particle_6s_linear_infinite]"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        {/* Корона */}
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-6xl z-20 drop-shadow-[0_0_12px_gold]">
          👑
        </div>

        {/* Фото */}
        <img
          src="https://i.postimg.cc/KYjtfdMH/ALEXEY.jpg"
          alt="Алексей Юрьевич"
          className="relative z-10 w-32 h-32 rounded-full border-[5px] border-yellow-200 object-cover shadow-2xl mr-8 flex-shrink-0 animate-[spin-slow_20s_linear_infinite]"
        />

        {/* Текст */}
        <div className="relative z-10 text-white max-w-xl">
          <h2 className="text-4xl font-black text-yellow-100 mb-3 drop-shadow-[0_0_8px_gold] animate-[title_3s_ease-in-out_infinite]">
            🦁 Зубарев Алексей Юрьевич
          </h2>
          <p className="text-lg text-yellow-50 leading-relaxed">
            Верховный мастер <span className="text-yellow-300 font-bold">REACT'а</span>, основатель компонентов, властелин хуков, тот, кто <em>понимает</em> `useEffect` с первого взгляда. Он не пишет код — он дышит им.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap -m-4 justify-center">
        {masterInfo.entries.map(({ name, info, img }) => (
          <div key={name} className="p-4 lg:w-1/2 md:w-full">
            <div className="flex items-center border-2 rounded-xl p-6 min-h-[200px] bg-white/80 hover:shadow-lg transition-all">
              <img
                src={correctURL(img?.path)}
                alt={name}
                className="w-20 h-20 rounded-full object-cover mr-6 border-2 flex-shrink-0"
              />
              <div className="text-gray-900">
                <h2 className="text-lg font-bold mb-2">{name}</h2>
                <p className="text-base">{info}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        @tailwind base;
@tailwind components;
@tailwind utilities;

@layer utilities {
  @keyframes spin-slow {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  @keyframes aura {
    0% { transform: scale(1); opacity: 0.4; }
    50% { transform: scale(1.05); opacity: 0.6; }
    100% { transform: scale(1); opacity: 0.4; }
  }

  @keyframes title {
    0% { letter-spacing: 0; transform: scale(1); }
    50% { letter-spacing: 2px; transform: scale(1.03); }
    100% { letter-spacing: 0; transform: scale(1); }
  }

  @keyframes particle {
    0% { transform: translateY(0) scale(1); opacity: 1; }
    100% { transform: translateY(-200%) scale(0.3); opacity: 0; }
  }
}

      `}</style>
    </div>
  );
}

