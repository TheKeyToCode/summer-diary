// import { getCollectionByName, getCardByNameAndSlug } from "../services/api";
import { useEffect, useState } from 'react'
import PostList from './PostList.jsx';
import { getPosts } from '../services/api.js';
import Hero from './Hero.jsx';
export default function HomePage() {
    useEffect(() => {
        getPosts(1).then((r) => {
            console.log("1:",r)
            // getHeaderInfo(r)
        });
    }, [])
    useEffect(() => {
        getPosts(2).then((r) => {
            console.log("2:",r)
            // getHeaderInfo(r)
        });
    }, [])
    console.log()
    return (
        <div>
            <Hero />
            {/* <PostList></PostList> */}
        </div>
    )
}