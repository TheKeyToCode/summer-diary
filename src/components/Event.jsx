import { useState, useEffect } from "react";
import { getSingetonInfo, getCollectionInfo } from "../services/api";
import { correctURL } from "../services/img";
import ReactMarkdown from 'react-markdown'

export default function Event() {
    const[eventInfo, setEventInfo] = useState({});
    const[eventColInfo, setEventColInfo] = useState({});

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
        <div className="text-center text-2xl md:text-4xl pt-15 bg-background text-on-background"><ReactMarkdown children={eventInfo.title} /></div>
        <div className="text-center text-thin text-lg md:text-xl pt-13 bg-background text-on-background">{eventInfo.subtitle}</div>
        
        <div>
            {eventColInfo.entries.map((el) => {
                return (
                    <div key={el._id} className="container flex flex-col lg:flex-row mx-auto px-5 py-20 items-center">
                        <img className='lg:w-1/2 rounded-xl' src={correctURL(el.image.path)} />
                        <div className="lg:pl-20 lg:w-1/2">
                            <div className="text-xl font-medium pt-10">{el.title}</div>
                            <div className="w-auto pt-5 font-light title"><ReactMarkdown children={el.text} /></div>
                        </div>
                    </div>


                )
            })}
        </div>
    </>)
}