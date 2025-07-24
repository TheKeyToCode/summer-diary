import { useState, useEffect } from 'react';
import { getSingetonInfo } from '../services/api.js'
import ReactMarkdown from 'react-markdown';

export default function About() {
    const[aboutInfo, setAboutInfo] = useState({});

    useEffect(() => {
        getSingetonInfo('about_school').then((r) => {
            setAboutInfo(r)
        })
    }, [])
    if (aboutInfo.title === undefined)
        return (<></>)

    return (
        <div className='bg-primary text-on-primary pt-5'>
            <div className='container mx-auto px-5 py-10 flex flex-col md:flex-row justify-between'>
                <div>
                    <h2 className='text-3xl md-5xl'><ReactMarkdown children={aboutInfo.title} /></h2>
                    <div className='py-10'><ReactMarkdown children={aboutInfo.number_of_school} /></div>
                </div>
                <div className='md:ml-10 max-w-[600px] text-xl font-extralight post'><ReactMarkdown children={aboutInfo.text} /></div>
            </div>
        </div>
    )
}