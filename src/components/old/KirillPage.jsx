import React from "react";
import { getCollectionByName, getCardByNameAndSlug } from "../services/api";
import { useEffect, useState } from 'react'
import { correctURL } from "../services/img";

export default function KirillCard() {
    // const article = {
    // title: "Алексей",
    // description: "Пишет на реaкторе",
    // img: "h ttps://system-informatics.iis.nsk.su/files/author/zubarevau.jpg",
    // category: "Мастер",
    // _created: "2025-05-05T12:12:12",
    // _by: "Алексей",
    // };
    const [article, getArticle] = useState({
        title: "Алексей",
        description: "Пишет на реакторе",
        img: {
            path: "https://system-informatics.iis.nsk.su/files/author/zubarevau.jpg"
        },
        category: "Мастер",
        _created: "2025-05-05T12:12:12",
        _by: "Алексей",
        _something_that_is_Bool:true
    });

    const { title, description, img, category, _created, _by } = article;
    useEffect(() => {
        getCardByNameAndSlug("posts","nsu-2025" ,{}).then((r)=>{
            console.log("r:",r)
            getArticle(r["entries"][0])
            console.log(r["entries"][0] )
        })
    },[])
    
    const formatDate = (ts) => {
        const date = new Date(ts);
        console.log(date, ts)
        return date.toLocaleDateString("ru-RU", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };
    if(article._something_that_is_Bool) return (<></>)
    return (
        <div className="w-96 bg-white rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-2 transition-transform duration-200">
            <img
                src={
                    correctURL(article?.img?.path ||
                    "https://dummyimage.com/720x400/ccc/000.png&text=No+Image")
                }
                alt="Image"
                className="w-full rounded-t-xl"
            />

            <div className="p-5">
                <div className="text-sm text-blue-600 font-medium">{article.category}</div>
                <div className="text-xl font-bold mt-1 mb-2">{article.title}</div>
                <p className="text-gray-600 text-sm mb-4">{article.description}</p>

                <div className="flex justify-between text-sm text-gray-500 items-center">
                    <div>
                        👤 {article.author} · {formatDate(article._created)}
                    </div>
                    {/* <div className="flex gap-3">
                      <span>👁 1488</span>
                      <span className="text-gray-300">|</span>
                      <span>💬 75</ span>
                  </div> */}
                </div>  
            </div>
        </div>
    )
}
///////////////////////// НЕ УДАЛЯТЬ!
// export default function KirillCard() {
//     // const article = {
//     // title: "Алексей",
//     // description: "Пишет на реaкторе",
//     // img: "h ttps://system-informatics.iis.nsk.su/files/author/zubarevau.jpg",
//     // category: "Мастер",
//     // _created: "2025-05-05T12:12:12",
//     // _by: "Алексей",
//     // };
//     const [article, getArticle] = useState({
//         title: "Алексей",
//         description: "Пишет на реакторе",
//         img: {
//             path: "https://system-informatics.iis.nsk.su/files/author/zubarevau.jpg"
//         },
//         category: "Мастер",
//         _created: "2025-05-05T12:12:12",
//         _by: "Алексей",
//         _something_that_is_Bool:true
//     });

//     // const { title, description, img, category, _created, _by } = article;
//     useEffect(() => {
//         getCardByNameAndSlug("posts","nsu-2025" ,{}).then((r)=>{
//             console.log("r:",r)
//             getArticle(r["entries"][0])
//             console.log(r["entries"][0] )
//         })
//     },[])
    
//     const formatDate = (ts) => {
//         const date = new Date(ts);
//         console.log(date, ts)
//         return date.toLocaleDateString("ru-RU", {
//             year: "numeric",
//             month: "long",
//             day: "numeric",
//         });
//     };
//     if(article._something_that_is_Bool) return (<></>)
//     return (
//         <div className="w-96 bg-white rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-2 transition-transform duration-200">
//             <img
//                 src={
//                     correctURL(article?.img?.path ||
//                     "https://dummyimage.com/720x400/ccc/000.png&text=No+Image")
//                 }
//                 alt="Image"
//                 className="w-full rounded-t-xl"
//             />

//             <div className="p-5">
//                 <div className="text-sm text-blue-600 font-medium">{article.category}</div>
//                 <div className="text-xl font-bold mt-1 mb-2">{article.title}</div>
//                 <p className="text-gray-600 text-sm mb-4">{article.description}</p>

//                 <div className="flex justify-between text-sm text-gray-500 items-center">
//                     <div>
//                         👤 {article.author} · {formatDate(article._created)}
//                     </div>
//                     {/* <div className="flex gap-3">
//                       <span>👁 1488</span>
//                       <span className="text-gray-300">|</span>
//                       <span>💬 75</ span>
//                   </div> */}
//                 </div>  
//             </div>
//         </div>
//     )
// }
