import { MdNoEncryptionGmailerrorred } from "react-icons/md";

export default function Error() {
    return (
        <div class="bg-gradient-to-r from-primary via-on-primary to-primary h-170 overflow-x-hidden">
            <div className="text-error text-5xl font-bold text-center pt-10">Упс! Error 404</div>
            <div className="text-error-container text-2xl font-medium text-center pb-7">Страница не найдена</div>
            <div className="text-md font-medium  text-center">Возможно, вы неправильно ввели адрес сайта. Попробуйте ввести снова.</div>
            <div className="text-md font-medium  text-center">Если у вас возникли вопросы воспользуйтесь формой обратной связи.</div>
            <MdNoEncryptionGmailerrorred size={200} className="m-auto pt-15" />
        </div>
    )
}