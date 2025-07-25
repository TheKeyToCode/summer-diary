import CodeCheck from './CodeCheck.jsx';
import { getPosts } from "../services/api";
import { useEffect, useState } from 'react'
import { getCodes } from '../services/api';

// import PostCard from "./PostCard";
// const [currentPage, setCurrentPage] = useState(1);
// const [posts, setPosts] = useState([]);
// const [showMore, setShowMore] = useState(true);
//thisIsTheShulker'sPage
export default function Secret (){
    const[codeInfo, setCodeInfo] = useState({});

    useEffect(() => {
        getCodes().then((res) => {
            setCodeInfo(res);
        })
    }, [])

    if (codeInfo.entries === undefined)
        return (<></>)

    return (<span className="bg-[#222222]">
        {codeInfo.entries.map((el) => {
            console.log(el.Code)
            console.log(el.Exit)
        })}
        <div className="bg-primary">
            <div className="container flex width-100% justify-between mx-auto items-center h-[50px]">
                IT_IS_A_SECRET...
                <a href="https://coldertone.ru" className="text-primary" target="_blank">.</a>
                {/* <img src="https://avatars.mds.yandex.net/i?id=707f752452b807de9f7e6fbc14e0aa9a_sr-5886377-images-thumbs&n=13" className="h-[45px]" style={border="solid 2px black"}/> */}
            </div>
        </div>
        <div className="foogg container width-100% justify-between mx-auto items-center h-[1000px] ">

            <form id="myForm"><br/>
              <label htmlFor="code"></label>
               <input type="text" id="code" name="code"/><br/><br/>

               <button type="submit"> doNotTouchThisText!!! </button>
            </form>

            <img src="https://i.pinimg.com/736x/65/c0/ae/65c0ae0a7c3519788b8217a4148699b0.jpg" className="h-[100px] border-solid-black-[4px]"/>

        </div>
    </span>)}






    // function morePages() {
    //     setCurrentPage(currentPage + 1)
    //     getPosts(currentPage + 1).then((r) => {
    //         // console.log("r:", posts)
    //         const r1 = [...posts]
    //         // console.log("r1:", r1)
    //         r1.push(...r.entries);
    //         setPosts(r1);
    //         console.log(posts)
    //         console.log(posts.total, r1.length)
    //         if (posts.total !== r1.length)
    //             setShowMore(false);
    //         else
    //             setShowMore(true);
    //     })
    // }

//     useEffect(() => {
//         getPosts(1).then((r) => {

//             setPosts(r.entries)
//         })
//     }, [])
//     if (posts == []) {
//         return (<></>)
//     }
//     return (
//         <div className="container mx-auto px-5 py-10 ">
//             <div className="flex-wrap -m-5 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 content-center">
//                 {
//                     posts?.map(el => (
//                         <div className="md:w-full w-full p-5" key={el._id}><PostCard key={el.slug} element={el} /></div>
//                     ))}
//             </div>

//             <button style={{display : showMore ? 'block' : 'none'}} type="button" id="button_1" onClick={morePages} className="py-2.5 px-5 mt-5 cursor-pointer bg-primary-container hover:bg-secondary text-on-primary-container hover:text-on-secondary hover:shadow-lg rounded-xl">Больше статей</button>
//         </div>
//     )
// }
