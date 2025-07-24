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
        <div className="text-center text-2xl md:text-5xl pt-15 bg-background text-on-background">{eventInfo.title}</div>
        <div className="text-center text-thin text-lg md:text-2xl pt-13 bg-background text-on-background">{eventInfo.subtitle}</div>
        <div className=" bg-background text-on-background">
        <div className="container flex flex-wrap mx-auto px-5 bg-background">
        <div className="text-center text-2xl md:text-5xl pt-15"><ReactMarkdown children={eventInfo.title} /></div>
        <div className="text-center text-thin text-lg md:text-2xl pt-13"><ReactMarkdown children={eventInfo.subtitle} /></div>

        <div>
            {eventColInfo.entries.map((el) => {
                return (
                    <div key={el._id} className="container flex flex-col lg:flex-row mx-auto px-5 py-20 items-center">
                        <img className='lg:w-1/2 rounded-xl' src={correctURL(el.image.path)} />
                        <div className="lg:pl-20 w-1/2">
                            <div className="text-xl font-medium pt-10">{el.title}</div>
                            <div className="max-w-[500px] pt-5 font-light title"><ReactMarkdown children={el.text} /></div>
                        </div>
                    </div>


                )
            })}
        </div></div></div>
    </>)
}