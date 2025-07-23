import { getCollectionByName } from '../services/api';  
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
         getCollectionByName("our_prepod",{}).then((r) => console.log("approach:",r));
     }, [])
};
