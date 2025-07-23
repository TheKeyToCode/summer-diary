import { getCollectionByName, getCardByNameAndSlug, getPosts } from "../services/api";
import { useEffect, useState } from 'react'
import PostCard from "./PostCard";

export default function PostList() {
    // const extra=3;
    // let delta=0;
    // const [Posts, getPosts]= useState(undefined)
    // useEffect(()=>{
    //     getPosts(1).then((r)=>{
    //         delta+=extra;   
    //         getPosts(r)
    //         console.log(r)  
    //     })
    // })

    // if(Posts===undefined){
    //     return (<></>)
    // }

    const [posts, setPosts] = useState(undefined)

    useEffect(() => {
        getPosts(1).then((r) => {
            // setPosts(r)
            // console.log(r)
            setPaosts(
                r.entries.map((el)=>{
                    return(
                        <PostCard article={el}></PostCard>
                    )
                })
            )
        })
    }, [])
    if(posts===undefined){
        return (<></>)
    }
    return (
        <div>
            {
                posts
            }
        </div>
    )
}