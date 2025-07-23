import React from 'react';
import { FaVk, FaTelegram } from "react-icons/fa6";
import { getLayoutInfo } from '../services/api.js';
import { useState, useEffect } from 'react';
import { correctURL } from '../services/img.js'

export default function Foot() {
    const [footerInfo, setFooterInfo] = useState({});
    
    useEffect(() => {
        getLayoutInfo().then((r) => {
            setFooterInfo(r)
        });
    }, [])


    if (footerInfo.title === undefined) {
        return (<></>)
    }
    return (
        <footer className="bg-secondary text-on-secondary">
            <div className="container mx-auto px-5 py-10">
                <div className="md:flex -m-5">
                    <div className='w-full md:w-1/3 p-5'>
                        <div className="flex items-center">
                            <img src={correctURL(footerInfo.logo.path)} className="w-[48px]" alt="logo" />
                            <div className='pl-3 font-bold text-2xl'>ЛШЮП</div>
                        </div>
                        <div className='mt-3 text-sm'>
                            <div className='font-medium pt-2 text-md'>Сделано уениками 7 мастерской в 2025 году</div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/3 p-5">
                        <div className='font-bold text-3xl pb-5'>История</div>
                        {footerInfo.information_links.map(year => {

                            return (
                                <div key={year._id} className='pb-3'>
                                    <a href={year.url} target='_blank' className="text-on-secondary hover:underline">
                                        {year.lable}
                                    </a>
                                </div>
                            );
                        })}

                    </div>

                    <div className="w-full md:w-1/3 p-5">
                        <div className='font-bold text-3xl pb-3'>Контактная информация</div>
                        <div>
                            {footerInfo.history_links.map(info => (
                                <div key={info._id} className='pb-3'>
                                    <a href={info.url} target='_blank' className="text-on-secondary pb-2 hover:underline">{info.lable}</a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-primary">
                <div className="container mx-auto px-5 py-7 flex flex-col sm:flex-row justify-between items-center sm:justify-between">
                    <div className="w-full sm:w-1/3 text-center sm:text-left mb-2 sm:mb-0">
                        © {new Date().getFullYear()} {footerInfo.copyright}
                    </div>
                    <div className="w-full sm:w-1/3 text-center mb-2 sm:mb-0">
                        {footerInfo.city}
                    </div>
                    <div className="w-full sm:w-1/3 flex justify-center sm:justify-end space-x-4">
                        <a
                            href={"https://vk.com/" + footerInfo.vk}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="VK"
                        >
                            <FaVk className="text-xl text-on-secondary hover:text-white transition" />
                        </a>
                        <a
                            href={"https://t.me/" + footerInfo.telegram}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Telegram"
                        >
                            <FaTelegram className="text-xl text-on-secondary hover:text-white transition" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}