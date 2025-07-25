import { useParams } from 'react-router-dom';
import { getPostBySlug } from '../services/api.js';
import ReactMarkdown from 'react-markdown';
import { useState, useEffect } from 'react';
import Translator from './Translator.jsx';

export default function Post() {
    const[postInfo, setPostInfo] = useState({})
    const { slug } = useParams();
    
    useEffect(() => {
        getPostBySlug(slug).then((r) => {
            setPostInfo(r)
        });
    }, [slug])

    if (postInfo.entries === undefined) {
        return (<></>)
    }

    return (
        postInfo.entries.map((el) => {
            return (<div className=' bg-background text-on-background'>
                <div key={el._id} className='title post px-5 py-10 container mx-auto bg-background text-on-background'>
                    <div className="max-w-[900px] bg-background text-on-background">
                        {/* <Translator>{el.markdown_text}</Translator> */}
                        <ReactMarkdown>{el.markdown_text}</ReactMarkdown>
                    </div>
                </div></div>
            )
        })
    )
}