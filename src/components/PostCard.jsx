import { Link } from "react-router-dom";
import { correctURL } from "../services/img";
import { useEffect } from "react";


const months = [' ', 'Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
export default function PostCard(article) {
    article = article.element
    if (!article) return (<></>)
    return (
      
        <div className="bg-white rounded-xl shadow-sm flex flex-col flex-wrap justify-between hover:shadow-lg h-full">
            <div>
                <img className="w-full rounded-t-xl" 
                    src={
                        correctURL(article?.img?.path ||
                            "https://dummyimage.com/720x400/ccc/000.png&text=No+Image")
                    }
                alt="Image" />
                <div className="text-sm text-blue-600 font-medium pt-6">{article.category}</div>
                <div className="text-xl font-bold mt-2 mb-2 px-5">{article.title}</div>
                <p className="text-gray-600 text-sm px-5">{article.description.slice(0, 150)}...</p>
            </div>


            <div className="text-sm text-gray-500 pt-7 pb-4 flex justify-between flex-row px-5 items-center">
                <div>
                    <div>👤 {article["author"]}</div>
                    <div>{`${article.date.slice(8, 10)} ${months[Number(article.date.slice(5, 7))]} ${article.date.slice(0, 4)} года`}</div>
                </div>
                <Link to={`post/${article.slug}`} className="px-3 py-2 font-medium text-md cursor-pointer bg-primary hover:bg-secondary text-on-primary hover:text-on-secondary hover:shadow-lg rounded-xl">Читать</Link>
            </div>
        </div>
    )
}