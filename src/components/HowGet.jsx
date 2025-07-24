import { useState, useEffect } from "react";
import { getSingetonInfo } from '../services/api.js'
import { correctURL } from '../services/img.js'
import ReactMarkdown from 'react-markdown';

export default function HowGet() {
    const[howInfo, setHowInfo] = useState({});

    useEffect(() => {
        getSingetonInfo('how_get').then((r) => {
            setHowInfo(r)
        })
    }, [])

    if (howInfo.title == undefined)
        return (<></>)

    return (<>
        <h2 className="text-center text-2xl md:text-5xl font-bold pt-10">{howInfo.title}</h2>
        <div className="text-center text-thin text-lg md:text-2xl pt-13">{howInfo.subtitle}</div>

        <div className="container flex py-20 px-10 justify-between mx-auto px-5 flex-col xl:flex-row">
            <img src={correctURL(howInfo.image.path)} alt="Человек Программирует" title="Человек Программирует" height={400} width={650} />
            <div className="text-lg font-extralight max-w-[500px] title"><ReactMarkdown children={howInfo.text} /></div>
        </div>
    </>)
}