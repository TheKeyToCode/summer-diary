import React from 'react';
import { FaVk, FaTelegram } from "react-icons/fa6";

export default function SlavaPage() {
    return (
        <footer className="bg-secondary text-on-secondary">
            <div className="container mx-auto px-5 py-10">
                <div className="md:flex -m-5">
                    <div className='w-full md:w-1/3 p-5'>
                        <div className="flex items-center">
                            <img src="https://static.tildacdn.com/tild6362-3166-4163-b132-666336376163/logo.png" className="w-[48px]" />
                            <div className='pl-3 font-bold text-2xl'>ЛШЮП</div>
                        </div>
                        <div className='mt-3'>
                            Текст какой-то
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 p-5">
                        <div className='font-bold text-2xl'>Предыдущие года</div>
                        <div><a href="https://ssyp.ru/ssyp2024" className="text-on-secondary mx-2.5 font-bold hover:underline">ЛШЮП 2024</a></div>
                        <div><a href="https://ssyp.ru/ssyp2023" className="text-on-secondary mx-2.5 font-bold hover:underline">ЛШЮП 2023</a></div>
                        <div><a href="https://ssyp.ru/ssyp2022" className="text-on-secondary mx-2.5 font-bold hover:underline">ЛШЮП 2022</a></div>
                        <div><a href="https://ssyp.ru/ssyp2021" className="text-on-secondary mx-2.5 font-bold hover:underline">ЛШЮП 2021</a></div>
                        <div><a href="https://ssyp.ru/ssyp2020" className="text-on-secondary mx-2.5 font-bold hover:underline">ЛШЮП 2020</a></div>
                        <div><a href="https://ssyp.ru/ssyp2019" className="text-on-secondary mx-2.5 font-bold hover:underline">ЛШЮП 2019</a></div>
                    </div>

                    <div className="w-full md:w-1/3 p-5">
                        <div className='font-bold text-2xl'>Информация</div>
                        <a href="https://ssyp.ru/policy" className="text-on-secondary mx-2.5 font-bold hover:underline">Политика конфиденциальности</a>
                        <div>
                            <a href="https://vk.com/lshup" target="_blank">
                                <FaVk className='text-2xl' />
                            </a>
                            <a href="https://t.me/lshup" target="_blank">
                                <FaTelegram className='text-2xl' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    );
}
