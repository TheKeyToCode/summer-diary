import { useState, useEffect } from 'react';
import { getCollectionInfo, getSingetonInfo } from '../services/api.js'
import ReactMarkdown from 'react-markdown';

export default function Timeline() {
    const[timeColInfo, setTimeColInfo] = useState({});
    const[timeInfo, setTimeInfo] = useState({});

    useEffect(() => {
        getCollectionInfo('timeline').then((r) => {
            setTimeColInfo(r);
            console.log(r);
        })
    }, [])

    useEffect(() => {
        getSingetonInfo('timeline_title').then((r) => {
            setTimeInfo(r);
            console.log(r);
        })
    }, [])

    if (timeColInfo.entries === undefined || timeInfo === undefined)
        return (<></>)

    return (<>
        <div className='text-center text-2xl md:text-4xl font-bold pt-20'>{timeInfo.title}</div>
        <div className='text-center text-lg md:text-2xl font-light pt-10'>{timeInfo.dates}</div>

        {timeColInfo.entries.map((el) => {
            return (
                <div className="container flex flex-col lg:flex-row mx-auto px-5 py-10" key={el._id}>
                    <div className="text-primary font-bold text-xl w-full lg:w-1/7 mb-5">{el.date}</div>
                    <div className="flex-col items-center hidden lg:flex">
                        <div className="w-[16px] h-[18px] rounded-2xl bg-gray-300"></div>
                        <div className="w-[1px] h-full bg-gray-300"></div>
                    </div>
                    <div className="lg:pl-20 w-full lg:w-6/7">
                        <div className="text-primary text-3xl mb-7 font-bold">{el.title}</div>
                        <div className="list-disc text-lg text-light title"><ReactMarkdown children={el.text} /></div>
                    </div>
                </div>
            )
        })}

        <div className="pb-15"></div>
        
    </>)
}