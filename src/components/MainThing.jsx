
import { getCollectionByName, getCardByNameAndSlug, getPosts } from "../services/api";
import { useEffect, useState } from 'react'
import PostCard from "./PostCard";



export default function MainThing() {
    const [currentPage, setCurrentPage] = useState(1);
    const [posts, setPosts] = useState([]);

    function morePages() {
        setCurrentPage(currentPage + 1)
        getPosts(currentPage + 1).then((r) => {
            // console.log("r:", posts)
            const r1 = [...posts]
            // console.log("r1:", r1)
            r1.push(...r.entries)
            setPosts(r1)
        })
        return 0;
    }
    // console.log(morePages)

    useEffect(() => {
        getPosts(1).then((r) => {

            setPosts(r.entries)
        })
    }, [])
    if (posts == []) {
        return (<></>)
    }
    return (
        <div className="container mx-auto px-5">
            <div className="flex-wrap -m-5 flex">
                {
                    posts?.map(el => (
                        <div className="md:w-1/3 w-1 p-5 "><PostCard key={el.slug} element={el} /></div>
                    ))}
            </div>


            <button type="button" onClick={morePages} className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Больше статей</button>

        </div>
    )
}