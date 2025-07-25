import { useState } from 'react';

export default function Registration() {
    return (
        <form className='container grid mx-auto px-10 items-center lg:justify-center my-20'>
            <div>
                <div><label htmlFor="e-mail" className="font-bold text-lg md:text-xl">E-mail *</label></div>
                <div><input id="e-mail" type="email" className="outline w-full lg:w-[700px] px-3 xl:w-[1100px] 2xl-[1350px] h-[60px] mt-2 translation delay-150 duration-200 focus-visible:outline-primary" placeholder="example@mail.ru" /></div>
            </div>
            <div className="mt-7">
                <div><label htmlFor="surname" className="font-bold text-lg md:text-xl">Фамилия ученика *</label></div>
                <div><input id="surname" type="text" className="outline w-full lg:w-[700px] px-3 xl:w-[1100px] 2xl-[1350px] h-[60px] mt-2 translation delay-150 duration-200 focus-visible:outline-primary" /></div>
            </div>
            <div className="mt-7">
                <div><label htmlFor="name" className="font-bold text-lg md:text-xl">Имя ученика *</label></div>
                <div><input id="name" type="text" className="outline w-full lg:w-[700px] px-3 xl:w-[1100px] 2xl-[1350px] h-[60px] mt-2 translation delay-150 duration-200 focus-visible:outline-primary" /></div>
            </div>
            <div className="mt-7">
                <div><label htmlFor="patronymic" className="font-bold text-lg md:text-xl">Отчество ученика *</label></div>
                <div><input id="patronymic" type="text" className="outline w-full lg:w-[700px] px-3 xl:w-[1100px] 2xl-[1350px] h-[60px] mt-2 translation delay-150 duration-200 focus-visible:outline-primary" /></div>
            </div>
            <div className="mt-7">
                <div><label htmlFor="birth_date" className="font-bold text-lg md:text-xl">Дата рождения *</label></div>
                <div><input id="birth_date" type="date" className="outline w-full lg:w-[700px] px-3 xl:w-[1100px] 2xl-[1350px] h-[60px] mt-2 translation delay-150 duration-200 focus-visible:outline-primary" /></div>
            </div>
            <div className="mt-7">
                <div><label htmlFor="age" className="font-bold text-lg md:text-xl">Возраст ученика *</label></div>
                <div><input id="age" type="text" className="outline w-full lg:w-[700px] px-3 xl:w-[1100px] 2xl-[1350px] h-[60px] mt-2 translation delay-150 duration-200 focus-visible:outline-primary" /></div>
            </div>
            <div className="mt-7">
                <div><label htmlFor="ending_class" className="font-bold text-lg md:text-xl">Заканчиваемый класс *</label></div>
                <div><input id="ending_class" type="range" min={3} max={11} className="outline w-full lg:w-[700px] px-3 xl:w-[1100px] 2xl-[1350px] h-[60px] mt-2 translation delay-150 duration-200 focus-visible:outline-primary" /></div>
            </div>
            <div className="mt-7">
                <div><label htmlFor="surname" className="font-bold text-lg md:text-xl">Фамилия ученика *</label></div>
                <div><input id="surname" type="text" className="outline w-full lg:w-[700px] px-3 xl:w-[1100px] 2xl-[1350px] h-[60px] mt-2 translation delay-150 duration-200 focus-visible:outline-primary" /></div>
            </div>
            <div className="mt-7">
                <div><label htmlFor="surname" className="font-bold text-lg md:text-xl">Фамилия ученика *</label></div>
                <div><input id="surname" type="text" className="outline w-full lg:w-[700px] px-3 xl:w-[1100px] 2xl-[1350px] h-[60px] mt-2 translation delay-150 duration-200 focus-visible:outline-primary" /></div>
            </div>
            <div className="mt-7">
                <div><label htmlFor="surname" className="font-bold text-lg md:text-xl">Фамилия ученика *</label></div>
                <div><input id="surname" type="text" className="outline w-full lg:w-[700px] px-3 xl:w-[1100px] 2xl-[1350px] h-[60px] mt-2 translation delay-150 duration-200 focus-visible:outline-primary" /></div>
            </div>
            <div className="mt-7">
                <div><label htmlFor="surname" className="font-bold text-lg md:text-xl">Фамилия ученика *</label></div>
                <div><input id="surname" type="text" className="outline w-full lg:w-[700px] px-3 xl:w-[1100px] 2xl-[1350px] h-[60px] mt-2 translation delay-150 duration-200 focus-visible:outline-primary" /></div>
            </div>
            <div className="mt-7">
                <div><label htmlFor="surname" className="font-bold text-lg md:text-xl">Фамилия ученика *</label></div>
                <div><input id="surname" type="text" className="outline w-full lg:w-[700px] px-3 xl:w-[1100px] 2xl-[1350px] h-[60px] mt-2 translation delay-150 duration-200 focus-visible:outline-primary" /></div>
            </div>
        </form>
    )
}