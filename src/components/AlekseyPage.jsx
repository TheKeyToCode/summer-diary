import { getPostInfo } from '../services/api';  
import { getHeaderInfo } from '../services/api';
import { getFooterInfo } from '../services/api';
import { useEffect, useState } from 'react';

export default function AlekseyPage(name) {
    useEffect(() => {
        getHeaderInfo().then((r) => console.log(r));
    }, [])
    useEffect(() => {
        getFooterInfo().then((r) => console.log(r));
    }, [])
    useEffect(() => {
        getPostInfo("approach",{skip:1, limit:3}).then((r) => console.log("approach:",r));
    }, [])
};
