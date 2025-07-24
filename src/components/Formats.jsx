import { useState, useEffect } from 'react';
import { getSingetonInfo } from '../services/api.js'
import ReactMarkdown from 'react-markdown';

export default function Formats() {
    const[formatInfo, getFormatInfo] = useState({});

    useEffect(() => {
        getSingetonInfo('learn_format').then((r) => {
            getFormatInfo(r)
        })
    })
    if (formatInfo.title === undefined)
        return (<></>)

    return (<></>)
}