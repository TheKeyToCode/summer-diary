import { correctURL } from "../services/img";
import { useEffect } from "react";
export default function PostCard(article) {
    article = article.element
    if (!article) return (<></>)
    return (
        <div className=" bg-white rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-2 transition-transform duration-200">
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
                        👤 {article["author"]} {
                            article.date
                        }
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    )
}