import { useState, useEffect } from "react";
import { getSingetonInfo, getCollectionInfo } from "../services/api";
import { correctURL } from "../services/img";
import ReactMarkdown from 'react-markdown'

export default function Event() {
    const[eventInfo, setEventInfo] = useState({});
    const[eventColInfo, setEventColInfo] = useState({});
    let num = 0

    function placeImages(el) {
        num += 1

        if (num % 2 == 1)
            return (<><div>
                        <div><ReactMarkdown children={el.title} /></div>
                        <div><ReactMarkdown children={el.text} /></div>
                    </div>
                    <img src={correctURL(el.image.path)} /></>)
        
    }

    useEffect(() => {
        getSingetonInfo('school_conducting').then((r) => {
            setEventInfo(r)
        })
    }, [])

    useEffect(() => {
        getCollectionInfo('conducting_of_school').then((r) => {
            setEventColInfo(r)
        })
    }, [])

    if (eventColInfo.entries === undefined || eventInfo === undefined)
        return (<></>)

    return (<>
        <div className="text-center text-2xl md:text-5xl pt-15 bg-background text-on-background">{eventInfo.title}</div>
        <div className="text-center text-thin text-lg md:text-2xl pt-13 bg-background text-on-background">{eventInfo.subtitle}</div>
        <div className=" bg-background text-on-background">
        <div className="container flex flex-wrap mx-auto px-5 bg-background">
            {eventColInfo.entries.map((el) => {
                return (
                    <div key={el._key} className="container mx-auto px-5">
                        {placeImages(el)}
                    </div>
                )
            })}
        </div>
        </div>
    </>)
}