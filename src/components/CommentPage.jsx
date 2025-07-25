import { useParams } from 'react-router-dom';
import { saveComment } from '../services/api_saving.js';
import { getCommentBySlug } from '../services/api.js'
import { useState, useEffect } from 'react';

export default function CommentPage() {
    const[author, setAuthor] = useState('');
    const[text, setText] = useState('');
    const[buttonText, setButtonText] = useState('Опубликовать');
    const[done, setDone] = useState('');
    const[comment, setComment] = useState({});
    const { slug } = useParams();

    useEffect(() => {
        getCommentBySlug(slug).then((r) => {
            setComment(r);
        })
    }, [])

    function handler_1(event) {
        setAuthor(event.target.value);
    }

    function handler_2(event) {
        setText(event.target.value);
    }

    function buttonHandler(event) {
        setButtonText('Опубликовать');
        setDone('');
    }

    function submitHandler(event) {
        saveComment(author, text, slug);
        setAuthor('');
        setText('');
        setDone('Начинаем проверку комментария...')
        setButtonText('Опубликованно');
        event.preventDefault();
    }

    if (comment.entries === undefined)
        return (<></>)

    return (
            <div className='container mx-auto px-5'>
                <div>
                    {comment.entries.map((el) => {
                        return(
                            <div key={el._id}>
                                <div className='flex py-5 flex-col sm:flex-row'>
                                    <div className='w-full sm:w-1/4 overflow-hidden'><div className='font-bold pb-1'>Автор:</div>   {el.author}</div>
                                    <div className='w-full sm:w-3/4 overflow-hidden'><div className='font-bold pb-1'>Комментарий:</div>   {el.text}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
        
                <form name='main' onSubmit={submitHandler}>
                    <div className='pt-5'><label htmlFor="author">Ваше имя: </label></div>
                    <div><input onChange={handler_1} onClick={buttonHandler} value={author} className='border-[3px] rounded-lg w-full sm:w-[330px] mb-10' type="text" id='author' pattern='[a-zA-Zа-яА-Я]+' minLength={3} maxLength={20} required /></div>
                    <div><label htmlFor="text mb-5">Комментарий: </label></div>
                    <div><textarea onChange={handler_2} onClick={buttonHandler} value={text} className='w-full md:w-[500px] h-[100px] hyphens-auto resize-none border-[3px] rounded-lg mb-10' type="text" id='text' name="user-text" minLength={3} maxLength={200} required></textarea></div>
                    <div><button type='submit' className='px-3 py-2 mb-7 bg-primary text-on-primary rounded-xl translation delay-150 duration-300 hover:shadow-xl hover:bg-secondary'>{buttonText}</button> {done}</div>
                </form>
            </div>)
}