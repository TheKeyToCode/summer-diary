
import { getPosts } from "../services/api";
import { useEffect, useState } from 'react'
import PostCard from "./PostCard";

export default function PostList() {
    const [currentPage, setCurrentPage] = useState(1);
    const [posts, setPosts] = useState([]);
    const [showMore, setShowMore] = useState(true);

    function morePages() {
        setCurrentPage(currentPage + 1)
        getPosts(currentPage + 1).then((r) => {
            // console.log("r:", posts)
            const r1 = [...posts]
            // console.log("r1:", r1)
            r1.push(...r.entries);
            setPosts(r1);
            if (posts.length !== r1.length)
                setShowMore(false);
            else
                setShowMore(true);
        })
    }

    useEffect(() => {
        getPosts(1).then((r) => {

            setPosts(r.entries)
        })
    }, [])
    if (posts == []) {
        return (<></>)
    }
    return (
        <div className="container mx-auto px-5 py-10 ">
            <div className="flex-wrap -m-5 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 content-center">
                {
                    posts?.map(el => (
                        <div className="md:w-full w-full p-5" key={el._id}><PostCard key={el.slug} element={el} /></div>
                    ))}
            </div>

            <button style={{display : showMore ? 'block' : 'none'}} type="button" id="button_1" onClick={morePages} className="py-2.5 px-5 mt-5 cursor-pointer bg-primary-container hover:bg-secondary text-on-primary-container hover:text-on-secondary hover:shadow-lg rounded-xl">Больше статей</button>
        </div>
    )
}