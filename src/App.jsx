import { useEffect, useState } from 'react'
import './App.css'
import ReactMarkdown from 'react-markdown';
import { getCollection } from './services/api';
import { correctURL } from './services/img';

function App() {
    const [collection_test, setCollection_test] = useState((<></>))
    useEffect(() => {
        let test = getCollection("test").then((entry) => {
            const cards = entry.map((el) => {
                // console.log(el.img.path)
                el.img.path=correctURL(el.img.path);
                // console.log("ERR:",el.img.path)

                return el
            })
            console.log(cards)
        })
        //     fetch('http://api.diary.ssypmarket.ru/api/collections/get/test?token=2a273b4e92433fbf9abc18c1a49347')
        //         .then(collection => {
        //             console.log(collection)
        //             return collection.json()
        //         }
        //         )
        //         .then(collection => {
        //             console.log(collection)
        //             const entry = collection.entries;
        //             const cards = entry.map((el) => {
        //                 console.log(el.content)
        //                 if (!el.img.path.includes("http")) {
        //                     el.img.path = "http://api.diary.ssypmarket.ru" + el.img.path
        //                 }
        //                 return (
        //                     <div>
        //                         <h1> {el.title} </h1>
        //                         <ReactMarkdown>{el.content}</ReactMarkdown>
        //                         <img src={el.img.path} />
        //                     </div>
        //                 )
        //             })
        //             setCollection_test(cards)
        //         });

    }, [])

    // const html = marked.parse(markdownText);
    return (
        <>
            <div style={{ backgroundColor: "red", height: "50px", width: "50px" }}></div>
            {collection_test}
        </>
    )
}

export default App
