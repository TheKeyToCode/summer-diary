import { FaTelegram, FaVk, FaPhone } from "react-icons/fa6";
import { getLayoutInfo } from '../services/api.js';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { correctURL } from '../services/img.js'

export default function Head() {
    const [headerInfo, getHeaderInfo] = useState({

    });
    useEffect(() => {
        getLayoutInfo().then((r) => {
            getHeaderInfo(r)
        });
    }, [])
    if (headerInfo.title === undefined) {
        return (<></>)
    }
    return (
        <div className="bg-secondary text-on-secondary">
            <div className="container mx-auto flex justify-between items-center py-4 px-5">
                <Link to="/">
                    <div className="flex items-center">
                        <img src={correctURL(headerInfo.logo.path)} className="text-center h-[36px]" />
                        <div className="ml-7 font-medium hidden sm:block" style={{ whiteSpace: "pre-wrap" }}>{headerInfo.title}</div>
                    </div>
                </Link>
                <span className="flex">
                    <span className="mx-4 sm:block font-medium">
                        <a className="flex items-center" 
                            href={"tel:" + headerInfo.phone} 
                            target="_blank"><FaPhone size={22} 
                            className="mr-2" /> 
                                <div className="hidden lg:block font-medium">{headerInfo.phone}</div>
                        </a>
                    </span>
                    <span className="mx-4 sm:block font-medium">
                        <a href={"https://t.me/" + headerInfo.telegram} 
                           target="_blank"><FaTelegram size={24} />
                        </a>
                    </span>
                    <span className="mx-4 sm:block font-medium">
                        <a href={"https://vk.com/" + headerInfo.vk} 
                           target="_blank"><FaVk size={24} />
                        </a>
                    </span>
                    <span className="ml-4 my-auto">
                        <a className="font-medium bg-primary hover:bg-secondary text-on-primary hover:text-on-secondary border-[2px] px-4 py-3 rounded-xl cursor-pointer translation delay-150 duration-150 ease-in-out hover:shadow-lg w-30" 
                           href={headerInfo.button.url} 
                           target="_blank">{headerInfo.button.lable}</a>
                    </span>

                </span>
            </div>
        </div>
    )
}                   
