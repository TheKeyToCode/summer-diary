import { useParams } from 'react-router-dom';
import { getPostBySlug } from '../services/api.js';
import ReactMarkdown from 'react-markdown';
import { useState, useEffect } from 'react';

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
                <div key={el._id} className='post px-5 py-10 container mx-auto bg-background text-on-background'>
                    <div className="max-w-[900px] bg-background text-on-background">
                        <ReactMarkdown children={el.markdown_text} />
                    </div>
                </div></div>
            )
        })
    )
}