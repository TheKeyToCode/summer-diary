import React from 'react';

export default function Foot() {
    return (
        <footer className="bg-[#021446] px-8 py-4">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div>ЛШЮП 2025</div>
                <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
                    <a href="https://ssyp.ru/policy" className="text-[#4fc3f7] mx-2.5 font-bold hover:underline">Политика конфиденциальности</a>
                    <a href="https://ssyp.ru/ssyp2024" className="text-[#4fc3f7] mx-2.5 font-bold hover:underline">ЛШЮП 2024</a>
                    <a href="https://ssyp.ru/ssyp2023" className="text-[#4fc3f7] mx-2.5 font-bold hover:underline">ЛШЮП 2023</a>
                    <a href="https://ssyp.ru/ssyp2022" className="text-[#4fc3f7] mx-2.5 font-bold hover:underline">ЛШЮП 2022</a>
                    <a href="https://ssyp.ru/ssyp2021" className="text-[#4fc3f7] mx-2.5 font-bold hover:underline">ЛШЮП 2021</a>
                    <a href="https://ssyp.ru/ssyp2020" className="text-[#4fc3f7] mx-2.5 font-bold hover:underline">ЛШЮП 2020</a>
                    <a href="https://ssyp.ru/ssyp2019" className="text-[#4fc3f7] mx-2.5 font-bold hover:underline">ЛШЮП 2019</a>
                </div>

                <div className="flex gap-4">
                    <a href="https://vk.com/lshup" target="_blank">
                        <div>vk</div>
                    </a>
                    <a href="https://t.me/lshup" target="_blank">
                        <div>tg</div>
                    </a>
                </div>
            </div>
        </div>
        </footer >
    );
}