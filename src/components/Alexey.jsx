import { getCollectionInfo } from '../services/api.js';
import { useState, useEffect } from 'react';
import { correctURL } from '../services/img.js';
import { useNavigate } from 'react-router-dom';

export default function AlexeyWithPreloader() {
  const [loading, setLoading] = useState(true);
  const [loadingBack, setLoadingBack] = useState(false);
  const [masterInfo, setMasterInfo] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    getCollectionInfo('our_prepod').then((data) => {
      setMasterInfo(data);
    });

    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // const triggerFireworks = (x, y) => {
  //   const newFireworks = [];
  //   for (let i = 0; i < 30; i++) {
  //     newFireworks.push({
  //       id: Math.random().toString(36).substr(2, 9),
  //       x,
  //       y,
  //       dx: (Math.random() - 0.5) * 10,
  //       dy: (Math.random() - 0.5) * 10,
  //       life: 30 + Math.random() * 20,
  //       size: 3 + Math.random() * 4,
  //       color: ['#FFD700', '#FFA500', '#FF4500', '#FFFACD'][Math.floor(Math.random() * 4)],
  //     });
  //   }
  //   setFireworks((old) => [...old, ...newFireworks]);
  //   if (clickSoundRef.current) clickSoundRef.current.play();
  // };

  // // Анимация частиц фейерверка
  // useEffect(() => {
  //   if (fireworks.length === 0) return;
  //   const interval = setInterval(() => {
  //     setFireworks((fw) =>
  //       fw
  //         .map(({ life, dx, dy, x, y, ...rest }) => ({
  //           life: life - 1,
  //           dx,
  //           dy,
  //           x: x + dx,
  //           y: y + dy,
  //           ...rest,
  //         }))
  //         .filter(({ life }) => life > 0)
  //     );
  //   }, 30);
  //   return () => clearInterval(interval);
  // }, [fireworks]);

  if (loadingBack) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-yellow-900 text-white z-50">
        <img
          src="https://system-informatics.iis.nsk.su/files/author/zubarevau.jpg"
          alt="Loading Alexey"
          className="w-40 h-40 rounded-full border-4 border-yellow-400 animate-spin"
          style={{ animationTimingFunction: 'linear', animationDuration: '2s' }}
        />
        <p className="mt-6 text-2xl font-bold drop-shadow-lg animate-pulse">
          Возвращаемся...
        </p>
      </div>
    );
  }

  if (loading) {
    return (

      <div className="fixed inset-0 flex flex-col items-center justify-center bg-yellow-900 text-white z-50">
        <img
          src="https://system-informatics.iis.nsk.su/files/author/zubarevau.jpg"
          alt="Loading Alexey"
          className="w-40 h-40 rounded-full border-4 border-yellow-400 animate-spin"
          style={{ animationTimingFunction: 'linear', animationDuration: '2s' }}
        />
        <p className="mt-6 text-2xl font-bold drop-shadow-lg animate-pulse">Загрузка...</p>
      </div>
    );
  }

  if (masterInfo.entries === undefined) {
    return <></>;
  }

  const handleBackClick = () => {
    setLoadingBack(true);
    setTimeout(() => {
      navigate(-1); // один шаг назад
    }, 5000);
  };

  const secretClick = () => {
    alert('🎉 Ты нашёл секретный бутон! Алексей гордится тобой! 👑');
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  return (



    <div
      key={name}
      className="glowing-background relative w-full min-h-screen p-10 alexey-card"
    >

      {masterInfo.entries
        .filter(({ name }) => name.includes('Алексей Юрьевич'))
        .map(({ name, info, img }) => (
          <div key={name} className="...">
            .
          </div>
        ))}

      <audio src="https://cdn.pixabay.com/audio/2022/03/15/audio_c347d3e3c5.mp3" autoPlay loop preload="auto" className="hidden" />

      <h1 className="text-5xl font-extrabold text-center text-yellow-800 animate-title mb-10 drop-shadow-xl">
        👑 Алексей Юрьевич — Мастер Своего дела 👑
      </h1>

      <div className="text-center mb-10">
        <p className="text-xl font-semibold text-yellow animate-pulse">
          Самый уважаемый учитель на планете 🌍
        </p>
        <p className="text-md mt-2 text-yellow">
          Каждый день с Алексеем — праздник знаний и мудрости ✨
        </p>
      </div>

      <div className="flex flex-wrap justify-center">
        {masterInfo.entries
          .filter(({ name }) => name.includes('Алексей Юрьевич'))
          .map(({ name, info, img }) => (
            <div key={name} className="relative max-w-4xl p-10 mb-10 rounded-[2rem] border-[12px] border-yellow-300 bg-gradient-to-br from-yellow-900 via-yellow-800 to-yellow-700 text-white shadow-[0_0_100px_30px_gold] ring-8 ring-yellow-200 ring-offset-8 ring-offset-yellow-100">
              <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle,_gold,_transparent_80%)] blur-3xl opacity-20 animate-aura z-0"></div>

              <div className="z-10 relative text-center">
                <img
                  src={correctURL(img?.path)}
                  alt={name}
                  className="mx-auto w-40 h-40 rounded-full border-4 border-yellow-400 shadow-2xl hover:scale-110 transition duration-500 cursor-pointer animate-[spin-slow_15s_linear_infinite]"
                  onClick={() => {
                    document.getElementById('alexey-audio')?.play();
                  }}
                />
                <h2 className="text-4xl mt-4 font-black text-yellow-100 drop-shadow-lg">{name}</h2>
                <p className="mt-4 text-lg text-yellow-50 leading-relaxed">{info}</p>
                <audio id="alexey-audio" src="/audio/glory.mp3" preload="auto" />
              </div>
            </div>
          ))}
      </div>

      <div
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer select-none z-50"
        onClick={handleBackClick}
        title="Вернуться назад к Алексею"
      >
        <img
          src="https://system-informatics.iis.nsk.su/files/author/zubarevau.jpg"
          alt="Назад к предыдущей странице"
          className="w-28 h-28 rounded-full border-4 border-yellow-400 shadow-lg hover:scale-110 hover:animate-bounce transition-transform duration-300"
        />
        <span className="mt-2 text-blue-400 font-bold text-lg drop-shadow-lg animate-pulse">
          👑 Назад на главную страницу 👑
        </span>
      </div>

      <div className="fixed top-0 left-0 w-24 h-24 z-[9999] flying-alexey pointer-events-none">
        <img
          src="https://system-informatics.iis.nsk.su/files/author/zubarevau.jpg"
          alt="Flying Alexey"
          className="w-full h-full object-cover rounded-full border-4 border-yellow-300 shadow-[0_0_20px_gold] animate-[spin-fast_5s_linear_infinite]"
        />
      </div>

      {Array.from({ length: 25 }).map((_, i) => {
        const emojis = ['❤️', '🔥', '⭐', '✨', '💛'];
        return (
          <div
            key={`heart-star-fire-${i}`}
            className="absolute text-5xl animate-floating-heart"
            style={{
              top: `${Math.random() * 90 + 5}%`,
              left: `${Math.random() * 90 + 5}%`,
              animationDelay: `${Math.random() * 10}s`,
              filter: `drop-shadow(0 0 5px rgb(255 105 180 / 0.8))`,
              userSelect: 'none',
              pointerEvents: 'none',
              color: ['#FF6B6B', '#FFD93D', '#FF6F59', '#FFE156'][Math.floor(Math.random() * 4)],
            }}
          >
            {emojis[Math.floor(Math.random() * emojis.length)]}
          </div>
        );
      })}

      {/* Пульсирующие золотые точки */}
      {Array.from({ length: 40 }).map((_, i) => (
        <div
          key={`gold-dot-${i}`}
          className="absolute w-3 h-3 bg-yellow-400 rounded-full animate-pulse-fast"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}

      <div className="absolute bottom-4 w-full text-center animate-marquee whitespace-nowrap text-yellow-900 text-xl font-semibold">
        «Алексей Юрьевич — это свет знаний, тепло уважения и голос истины.» 💛
      </div>

      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={`heart-${i}`}
          className="absolute text-pink-500 text-4xl animate-floating-heart"
          style={{
            top: `${Math.random() * 90 + 5}%`,
            left: `${Math.random() * 90 + 5}%`,
            animationDelay: `${Math.random() * 8}s`,
            filter: `drop-shadow(0 0 4px rgb(255 105 180 / 0.8))`,
            userSelect: 'none',
          }}
        >
          ❤️
        </div>
      ))}

      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={`gold-dot-${i}`}
          className="absolute w-2.5 h-2.5 bg-yellow rounded-full animate-pulse-fast"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}



      {
        Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`spark-${i}`}
            className="absolute w-2 h-2 bg-yellow-300 rounded-full animate-spark"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
            }}
          />
        ))
      }

      <div className="absolute bottom-3 w-full text-center animate-marquee whitespace-nowrap text-yellow-900 text-2xl font-bold drop-shadow-lg select-text">
        «Алексей Юрьевич — это свет знаний, тепло уважения и голос истины.» 💛
      </div>

      < style jsx global>{`
              @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-fast {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes aura {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.4;
          }
        }

        @keyframes fly {
          0% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(90vw, 10vh) rotate(90deg);
          }
          50% {
            transform: translate(60vw, 90vh) rotate(180deg);
          }
          75% {
            transform: translate(10vw, 60vh) rotate(270deg);
          }
          100% {
            transform: translate(0, 0);
          }
        }

        @keyframes title {
          0% {
            letter-spacing: 0;
            transform: scale(1);
          }
          50% {
            letter-spacing: 2px;
            transform: scale(1.05);
          }
          100% {
            letter-spacing: 0;
            transform: scale(1);
          }
        }

        .animate-title {
          animation: title 4s ease-in-out infinite;
        }

        @keyframes floating-heart {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh);
            opacity: 0;
          }
        }

        .animate-floating-heart {
          animation: floating-heart 10s ease-in infinite;
        }

        @keyframes spark {
          0% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
          100% {
            opacity: 0;
            transform: scale(0.5) translateY(-50px);
          }
        }

        .animate-spark {
          animation: spark 6s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-marquee {
          animation: marquee 20s linear infinite;
        }

        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1.3);
          }
        }

        @keyframes pulse-border {
          0% {
            box-shadow: 0 0 0 0 rgba(255, 223, 0, 0.7);
          }
          70% {
            box-shadow: 0 0 0 20px rgba(255, 223, 0, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(255, 223, 0, 0);
          }
        }

        @keyframes rainbow-border {
          0% {
            border-color: red;
          }
          20% {
            border-color: orange;
          }
          40% {
            border-color: yellow;
          }
          60% {
            border-color: green;
          }
          80% {
            border-color: blue;
          }
          100% {
            border-color: violet;
          }
        }

        @keyframes look-around {
          0% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(3deg);
          }
          50% {
            transform: rotate(-3deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }

        .alexey-card {
          animation: pulse-border 2s infinite ease-in-out, rainbow-border 6s infinite;
        }

        .alexey-image:hover {
          animation: look-around 1s ease-in-out infinite;
        }

        @keyframes background-glow {
          0% {
            background-color: rgba(255, 255, 0, 0.05);
          }
          50% {
            background-color: rgba(255, 255, 0, 0.2);
          }
          100% {
            background-color: rgba(255, 255, 0, 0.05);
          }
        }

        .background-glow {
          animation: background-glow 8s infinite;
        }

        @keyframes card-shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        .card-glow {
          animation: pulse-border 2s infinite ease-in-out;
          box-shadow: 0 0 30px 10px rgba(255, 223, 0, 0.5), 0 0 60px 20px rgba(255, 215, 0, 0.3);
          transition: transform 0.4s ease-in-out, box-shadow 0.3s ease;
        }

        .card-glow:hover {
          transform: scale(1.05) rotate(1deg);
          box-shadow: 0 0 40px 20px rgba(255, 255, 0, 0.6), 0 0 80px 40px rgba(255, 230, 0, 0.4);
        }

        .card-border-animated {
          border-width: 6px;
          border-style: solid;
          border-image: linear-gradient(45deg, gold, orange, red, pink, violet) 1;
          animation: rainbow-border 8s linear infinite;
        }

        .card-background-epic {
          background: repeating-linear-gradient(
            45deg,
            rgba(255, 215, 0, 0.2),
            rgba(255, 215, 0, 0.2) 10px,
            rgba(255, 165, 0, 0.2) 10px,
            rgba(255, 165, 0, 0.2) 20px
          );
          animation: background-glow 6s ease-in-out infinite;
        }

        .card-text-glow {
          text-shadow: 0 0 5px rgba(255, 255, 0, 0.8), 0 0 10px rgba(255, 165, 0, 0.6);
          animation: title 3s ease-in-out infinite;
        }

        @keyframes bounce-float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .card-hover-float:hover {
          animation: bounce-float 2s ease-in-out infinite;
        }

        @keyframes flash-border {
          0%,
          100% {
            border-color: gold;
          }
          50% {
            border-color: white;
          }
        }

        .card-flash-border {
          animation: flash-border 1.5s infinite ease-in-out;
        }

        @keyframes flash-bg {
          0%,
          100% {
            background-color: rgba(255, 255, 0, 0.1);
          }
          50% {
            background-color: rgba(255, 255, 0, 0.3);
          }
        }

        .card-flash-bg {
          animation: flash-bg 3s ease-in-out infinite;
        }

        @keyframes glow-border {
          0% {
            box-shadow: 0 0 20px rgba(255, 223, 0, 0.5), inset 0 0 10px rgba(255, 255, 255, 0.1);
          }
          50% {
            box-shadow: 0 0 40px rgba(255, 223, 0, 0.8), inset 0 0 20px rgba(255, 255, 255, 0.2);
          }
          100% {
            box-shadow: 0 0 20px rgba(255, 223, 0, 0.5), inset 0 0 10px rgba(255, 255, 255, 0.1);
          }
        }

        @keyframes shine {
          0% {
            background-position: -500px 0;
          }
          100% {
            background-position: 500px 0;
          }
        }

        @keyframes card-glow-pulse {
          0%,
          100% {
            transform: scale(1);
            box-shadow: 0 0 20px rgba(255, 223, 0, 0.3);
          }
          50% {
            transform: scale(1.01);
            box-shadow: 0 0 30px rgba(255, 223, 0, 0.6);
          }
        }

        .alexey-card {
          animation: glow-border 4s ease-in-out infinite, card-glow-pulse 6s ease-in-out infinite;
          background: linear-gradient(135deg, #7c4d00, #ffcc00);
          background-size: 200% 200%;
          position: relative;
          overflow: hidden;
        }

        .alexey-card::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255, 255, 0, 0.1), transparent 70%);
          animation: shine 15s linear infinite;
          z-index: 0;
        }

        .alexey-card > * {
          position: relative;
          z-index: 1;
        }

        .alexey-card:hover {
          animation: card-glow-pulse 3s ease-in-out infinite;
        }

        @keyframes flying-alexey {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(80vw, 10vh) rotate(90deg);
          }
          50% {
            transform: translate(50vw, 80vh) rotate(180deg);
          }
          75% {
            transform: translate(10vw, 50vh) rotate(270deg);
          }
          100% {
            transform: translate(0, 0) rotate(360deg);
          }
        }

        .flying-alexey {
          animation: flying-alexey 12s linear infinite;
        }

        @keyframes flash {
          0% {
            opacity: 0;
            transform: scale(0.5);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
          100% {
            opacity: 0;
            transform: scale(0.5);
          }
        }

        .flash-effect {
          position: absolute;
          width: 100px;
          height: 100px;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.8), transparent);
          border-radius: 50%;
          animation: flash 1.5s ease-in-out infinite;
          pointer-events: none;
        }

        .star {
          position: absolute;
          width: 2px;
          height: 2px;
          background: white;
          border-radius: 50%;
          opacity: 0.7;
          animation: twinkle 4s infinite;
        }

        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.3);
          }
        }

        .glowing-background {
          background: linear-gradient(270deg, #ffdd00, #ff9900, #ffdd00);
          background-size: 600% 600%;
          animation: gradientShift 20s ease infinite;
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
          .alexey-card-shadow {
          box-shadow:
            0 0 20px 5px rgba(255, 223, 0, 0.7),
            inset 0 0 40px 10px rgba(255, 215, 0, 0.4);
          transition: box-shadow 0.3s ease;
        }
        .alexey-card-shadow:hover {
          box-shadow:
            0 0 40px 15px rgba(255, 223, 0, 1),
            inset 0 0 80px 20px rgba(255, 255, 0, 0.7);
        }

        .glowing-background {
          background: linear-gradient(270deg, #ffcc00, #ffaa00, #ffcc00);
          background-size: 600% 600%;
          animation: gradientShift 25s ease infinite;
        }
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
            `}</style>
      {/* {Array.from({ length: 6 }).map((_, i) => (
                <div
                    key={flash-${i}}
                    className="flash-effect"
                    style={{
                        top: ${Math.random() * 100}%,
                        left: ${Math.random() * 100}%,
                        animationDelay: ${Math.random() * 5}s,
                    }}
                />
            ))} */}

    </div >
  );
}