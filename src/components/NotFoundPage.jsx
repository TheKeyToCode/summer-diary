import { BiError } from "react-icons/bi";
import { Link } from 'react-router-dom';

export default function Error() {
    return (
        <>
        <div className="container max-w-screen h-screen p-5 text-center font-medium bg-gradient-to-r from-secondary via-on-secondary to-secondary">
            <div className="text-error text-5xl pt-10 pb-3">Страница не найдена</div>
            <div className="text-error-container text-2xl pb-7 pt-3">Error 404</div>
            <div className="text-md font-medium pb-8">Возможно, вы неправильно ввели адрес сайта. Попробуйте ввести снова.</div>
            <Link to="/" className="pt-10"><a className="bg-primary text-on-primary text-md px-3 py-1 rounded-xl" href=''>Перейти на главную страницу</a></Link>
            <BiError size={200} className="m-auto pt-15" />
        </div>
        </>
    )
}