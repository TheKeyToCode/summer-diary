import { useEffect, useState } from 'react'

export async function getCollection(name) {
    // useEffect(() => {
    const res = await fetch(`http://api.diary.ssypmarket.ru/api/collections/get/${name}?token=2a273b4e92433fbf9abc18c1a49347`);
    const collection = await res.json();
    // .then(collection => {
    //     console.log(collection)
    //     return collection.json()
    // }
    // )
    // .then(collection => {
    console.log(collection)
    const entry = collection.entries;
    // const cards = entry.map((el) => {
    //     console.log(el.content)
    //     if (!el.img.path.includes("http")) {
    //         el.img.path = "http://api.diary.ssypmarket.ru" + el.img.path
    //     }
    //     return el
    // })
    return entry
    //     return cards
    // });
    // }, [])
}