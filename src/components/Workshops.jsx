import ReactMarkdown from 'react-markdown'
import { getCollectionInfo } from '../services/api.js'
import { useState, useEffect } from 'react'

export default function Workshops() {

    const[workInfo, setWorkInfo] = useState({});

    useEffect(() => {
        getCollectionInfo('workshops').then((r) => {
            setWorkInfo(r);
        });
    }, []);
    if (workInfo.entries === undefined || workInfo.entries == []) {
        return (<></>)
    }

    return (
        workInfo.entries.map((el) => {
            return (
                <div key={el._id} className='post px-5 py-10 container mx-auto'>
                    <div className="max-w-[900px]">
                        <ReactMarkdown children={el.title} />
                        <ReactMarkdown children={el.master} />
                        <ReactMarkdown children={el.text} />
                    </div>
                </div>
            )
        })
    )
}