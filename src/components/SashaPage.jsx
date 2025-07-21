import { FaTelegram, FaVk, FaPhone} from "react-icons/fa6";

export default function SashaPage() {
    return (
        <div className="bg-secondary text-on-secondary">
            <div className="container mx-auto flex justify-between items-center py-4 px-5">
                <div className="flex items-center">
                    <img src="https://static.tildacdn.com/tild6362-3166-4163-b132-666336376163/logo.png" className="text-center h-[36px]" />
                    <div className="ml-7 font-medium hidden sm:block">
                        <div>Летняя Школа</div>
                        <div>Юных Программистов</div>
                    </div>
                </div>
                <span className="flex">
                    <span className="mx-4 "><a className="flex items-center" href="tel:+79137132764" target="_blank"><FaPhone size={22} className="mr-2" /> <div className="hidden md:block font-medium">8-800-122-22-11</div></a></span>
                    <span className="mx-4"><a href="https://t.me/lshup" target="_blank"><FaTelegram size={24} /></a></span>
                    <span className="mx-4"><a href="https://vk.com/lshup" target="_blank"><FaVk size={24} title="8 (383) 330-80-51" /></a></span>
                    <span className="mx-4 my-auto"><bottom className="font-medium bg-primary border-[2px] px-3 py-2 rounded-xl cursor-pointer translation delay-150 duration-300 ease-in-out hover:shadow-lg" href='#'>Поступить</bottom></span>
                </span>
            </div>
        </div>
    )
}   