import { useState, useEffect } from "react";
import { getCollectionInfo } from '../services/api.js'
import { correctURL } from '../services/img.js'

export default function Appoarch() {
    const[appoarchInfo, setAppoarchInfo] = useState({});

    useEffect(() => {
        getCollectionInfo('approach').then((r) => {
            setAppoarchInfo(r)
        });
    }, [])
    if (appoarchInfo.entries === undefined)
        return (<></>)

    return (
        <>
            <h2 className="text-center pt-20 font-bold text-black text-2xl md:text-4xl">НАШ ПОДХОД</h2>
            <div className="container mx-auto px-5 pt-10">
                <div className="flex-wrap grid grid-cols-1 lg:grid-cols-2 content-center">
                    {appoarchInfo.entries.map((el) => {
                        return (
                            <div key={el._id} className="py-10">
                                
                                <div className="flex flex-col md:flex-row content-start">
                                    <img className="object-contain mr-7 pb-5" src={correctURL(el.icon.path)} width={150} height={150} />
                                    <div className="flex flex-col">
                                        <div className="text-2xl text-primary font-bold max-w-[300px]">{el.title}</div>
                                        <div className="text-lg text-extralight max-w-[400px] pt-5">{el.text}</div>
                                    </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
        </>
    )      
}