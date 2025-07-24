import { useState, useEffect } from 'react';
import { getSingetonInfo } from '../services/api.js'
import ReactMarkdown from 'react-markdown';

export default function Formats() {
    const[formatInfo, getFormatInfo] = useState({});

    useEffect(() => {
        getSingetonInfo('learn_format').then((r) => {
            getFormatInfo(r)
        })
    }, [])
    if (formatInfo.title === undefined)
        return (<></>)

    return (<>
        <div className='bg-secondary-container text-on-primary-container py-20'>
            <div className="text-xl md:text-3xl font-bold text-center pb-15">{formatInfo.title}</div>
            <div className='container grid mx-auto px-5 grid-col-1 xl:grid-cols-4  text-on-primary'>
                <div className='relative justify-items-center-safe py-10 xl:px-5'>
                    <div className='h-[60px] w-[60px] bg-primary border-[5px] border-secondary-container rounded-4xl absolute -m-5 text-center pt-3 pr-[1px] font-bold'>1</div>
                    <div className='p-10 pt-13 bg-primary rounded-xl w-auto h-full'>
                        <div className='font-bold text-center'>{formatInfo.subtitle}</div>
                        <div className='pt-4'>{formatInfo.text}</div>
                    </div>
                </div>
                <div className='relative justify-items-center-safe py-10 xl:px-5'>
                    <div className='h-[60px] w-[60px] bg-primary border-[5px] border-secondary-container text-on-primary rounded-4xl absolute -m-5 text-center pt-3 pr-[1px] font-bold'>2</div>
                    <div className='p-10 pt-13 bg-primary rounded-xl w-auto h-full'>
                        <div className='font-bold text-center'>{formatInfo.subtitle_2}</div>
                        <div className='pt-4'>{formatInfo.text_2}</div>
                    </div>
                </div>
                <div className='relative justify-items-center-safe py-10 xl:px-5'>
                    <div className='h-[60px] w-[60px] bg-primary border-[5px] border-secondary-container text-on-primary rounded-4xl absolute -m-5 text-center pt-3 pr-[1px] font-bold'>3</div>
                    <div className='p-10 pt-13 bg-primary rounded-xl w-auto h-full'>
                        <div className='font-bold text-center'>{formatInfo.subtitle_3}</div>
                        <div className='pt-4'>{formatInfo.text_3}</div>
                    </div>
                </div>
                <div className='relative justify-items-center-safe py-10 xl:px-5'>
                    <div className='h-[60px] w-[60px] bg-primary border-[5px] border-secondary-container text-on-primary rounded-4xl absolute -m-5 text-center pt-3 pr-[1px] font-bold'>4</div>
                    <div className='p-10 pt-13 bg-primary rounded-xl w-auto h-full'>
                        <div className='font-bold text-center'>{formatInfo.subtitle_4}</div>
                        <div className='pt-4'>{formatInfo.text_4}</div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}