mport { useEffect, useState } from 'react';
import getPostBySlug from '../services/api';

const apiDomain = 'http://api.diary.ssypmarket.ru/';

export default function TestPage(name) {
    useEffect(() => {
       getPostBySlug().then((r) => console.log(r));
    }, [])
}