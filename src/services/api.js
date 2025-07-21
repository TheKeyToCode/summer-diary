import { useEffect, useState } from 'react'

const apiDomain = 'http://api.diary.ssypmarket.ru/';

export async function getHeaderInfo() {
    const response = await fetch(apiDomain + "api/singletons/get/header?token=7123bc63c91be681bf4a2528e6d800");
    const json = response.json();
    return json;
}
export async function getPostInfo(name, {limit=1, skip=0}) {
    const response = await fetch(apiDomain + "api/collections/get/approach?token=2a273b4e92433fbf9abc18c1a49347", { //Потом надо сделать чтоб по имени коллекции работало
        method: 'post',
        headers: { 'Content-Type': 'application/json' },

        body: JSON.stringify({
            // filter: { published: true },
            // fields: { fieldA: 1, fieldB: 1 },
            limit,
            skip,
            // skip: 5,
            sort: { _created: -1 },
            populate: 1, // resolve linked collection items

            lang: 'de' // return normalized language fields (fieldA_de => fieldA)
        })
    });
    const json = response.json();

    return json;
}
export async function getFooterInfo() {
    const response = await fetch(apiDomain + "api/singletons/get/footer?token=7123bc63c91be681bf4a2528e6d800");
    const json = response.json();
    return json;
}

export async function getCollection(name) {
    // useEffect(() => {
    // const res = await fetch(`http://api.diary.ssypmarket.ru/singletons/form/header`);
    // const collection = await res.json();
    // // .then(collection => {
    // console.log(collection)
    //     return collection.json()
    // }
    // // )
    // // .then(collection => {
    // console.log(collection)
    // const entry = collection.entries;
    //  const cards = entry.map((el) => {
    //      console.log(el.content)
    //      if (!el.img.path.includes("http")) {
    //          el.img.path = "http://api.diary.ssypmarket.ru" + el.img.path
    //      }
    //      return el
    //  })
    // return entry
    // //     return cards
    // // });
    // // }, [])
}