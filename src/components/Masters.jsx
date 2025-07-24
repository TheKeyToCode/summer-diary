import { getCollectionInfo } from '../services/api.js';
import { useState, useEffect } from 'react';
import { correctURL } from '../services/img.js';
import { useNavigate } from 'react-router-dom';

export default function Masters() {
  const [masterInfo, setMasterInfo] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    getCollectionInfo('our_prepod').then((data) => {
      setMasterInfo(data);
    });
  }, []);

  if (masterInfo.entries === undefined) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e6f0fa] to-[#fdfdfd] p-8">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-blue-700 p-4 mb-10 w-fit mx-auto rounded-lg">
        Лучший в мире педагогический состав
      </h1>

      <div className="flex flex-wrap -m-4 justify-center max-w-6xl mx-auto">
        {masterInfo.entries.map(({ name, info, img }) => (
          <div
            key={name}
            className="p-4 lg:w-1/2 md:w-full cursor-pointer"
            onClick={() => {
              if (name.toLowerCase().includes('алексей')) {
                navigate('/alexey');
              }
            }}
          >
            <div className="flex items-center border-2 rounded-xl p-6 h-full bg-white/80 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
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
    </div>
  );
}
