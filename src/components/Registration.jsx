import { useState, useEffect } from 'react';
import { getSingetonInfo } from '../services/api.js'
import { saveRegistration } from '../services/api_saving.js'

export default function Registration() {
    const[regInfo, setRegInfo] = useState({});
    const[langInfo, setLangInfo] = useState({});
    const[technoInfo, setTechnoInfo] = useState({});
    const[topicsInfo, setTopicsInfo] = useState({});
    const[toolsInfo, setToolsInfo] = useState({});
    const[shirtInfo, setShirtInfo] = useState({});
    const[whereInfo, setWhereInfo] = useState({});
    const[rangeInfo, setRangeInfo] = useState(5);
    const[range2Info, setRange2Info] = useState(5);

    function handleRange(event) {
        setRangeInfo(event.target.value)
    }

    function handleRange_2(event) {
        setRange2Info(event.target.value)
    }

    function submitHandler(event) {
        const form = document.getElementById('form_1');
        const data = {};

        for (let i = 0; i < form.elements.length; i++) {
            const el = form.elements[i];
            data[el.id] = el.value
        }

        saveRegistration(data);
    }

    useEffect(() => {
        getSingetonInfo('registration').then((res) => {
            setRegInfo(res);
        })
    }, [])

    useEffect(() => {
        getSingetonInfo('languages').then((res) => {
            setLangInfo(res);
        })
    }, [])

    useEffect(() => {
        getSingetonInfo('technologies').then((res) => {
            setTechnoInfo(res);
        })
    }, [])

    useEffect(() => {
        getSingetonInfo('topics').then((res) => {
            setTopicsInfo(res);
        })
    }, [])

    useEffect(() => {
        getSingetonInfo('dev_tools').then((res) => {
            setToolsInfo(res);
        })
    }, [])

    useEffect(() => {
        getSingetonInfo('t_shirts').then((res) => {
            setShirtInfo(res);
        })
    }, [])

    useEffect(() => {
        getSingetonInfo('where').then((res) => {
            setWhereInfo(res);
        })
    }, [])

    if (regInfo === undefined || langInfo === undefined ||
        technoInfo === undefined || topicsInfo === undefined ||
        toolsInfo === undefined || shirtInfo === undefined || whereInfo === undefined)
        return (<></>)

    return (
        <form className='container grid mx-auto px-5 sm:px-10 md:px-20 lg:px-30 xl:px-40 2xl:px-50 items-center lg:justify-center mt-20 mb-10' onSubmit={submitHandler} id='form_1'>
            <div>
                <div><label htmlFor="e-mail" className="font-bold text-lg md:text-xl">{regInfo.email}</label></div>
                <div><input id="e-mail" type="email" className="outline w-full lg:w-[700px] px-3 xl:w-[1100px] 2xl-[1350px] h-[60px] mt-2 invalid:outline-red-500 translation delay-150 duration-200 focus-visible:outline-primary" placeholder="example@mail.ru" required /></div>
            </div>
            <div className="mt-7">
                <div><label htmlFor="surname" className="font-bold text-lg md:text-xl">{regInfo.surname}</label></div>
                <div><input id="surname" type="text" className="outline w-full lg:w-[700px] px-3 xl:w-[1100px] 2xl-[1350px] h-[60px] mt-2 invalid:outline-red-500 translation delay-150 duration-200 focus-visible:outline-primary" required /></div>
            </div>
            <div className="mt-7">
                <div><label htmlFor="name" className="font-bold text-lg md:text-xl">{regInfo.name}</label></div>
                <div><input id="name" type="text" className="outline w-full lg:w-[700px] px-3 xl:w-[1100px] 2xl-[1350px] h-[60px] mt-2 invalid:outline-red-500 translation delay-150 duration-200 focus-visible:outline-primary" required /></div>
            </div>
            <div className="mt-7">
                <div><label htmlFor="patronymic" className="font-bold text-lg md:text-xl">{regInfo.patronymic}</label></div>
                <div><input id="patronymic" type="text" className="outline w-full lg:w-[700px] px-3 xl:w-[1100px] 2xl-[1350px] h-[60px] mt-2 invalid:outline-red-500 translation delay-150 duration-200 focus-visible:outline-primary" required /></div>
            </div>
            <div className="mt-7">
                <div><label htmlFor="birth_date" className="font-bold text-lg md:text-xl">{regInfo.birth_date}</label></div>
                <div><input id="birth_date" type="date" className="outline w-[220px] px-3 h-[60px] mt-2 invalid:outline-red-500 translation delay-150 duration-200 focus-visible:outline-primary" required /></div>
            </div>
            <div className="mt-7">
                <div><label htmlFor="age" className="font-bold text-lg md:text-xl">{regInfo.age}</label></div>
                <div><input id="age" type="text" className="outline w-full lg:w-[700px] px-3 xl:w-[1100px] 2xl-[1350px] h-[60px] mt-2 invalid:outline-red-500 translation delay-150 duration-200 focus-visible:outline-primary" required /></div>
            </div>

            <div className="mt-7">
                <div><label htmlFor="ending_class" className="font-bold text-lg md:text-xl">{regInfo.ending_class}</label></div>
                <div className='flex justify-between mt-7 text-gray-600'>
                    <div>3</div>
                    <div>11</div>
                </div>
                <div><input id="ending_class" type="range" onChange={handleRange} min={3} max={11} className="w-full lg:w-[700px] px-3 xl:w-[1100px] 2xl-[1350px] h-[60px] mt-2" /></div>
                <div className='text-center font-bold mt-3 text-lg' id="rangeValue">{rangeInfo}</div>
            </div>

            <div className="mt-7">
                <div><label htmlFor="parent_fio" className="font-bold text-lg md:text-xl">{regInfo.parent_fio}</label></div>
                <div><input id="parent_fio" type="text" className="outline w-full lg:w-[700px] px-3 xl:w-[1000px] 2xl-[1350px] h-[60px] mt-2 translation delay-150 duration-200 focus-visible:outline-primary" /></div>
            </div>
            <div className="mt-7">
                <div><label htmlFor="phone" className="font-bold text-lg md:text-xl">{regInfo.phone}</label></div>
                <div><input id="phone" type="text" className="outline w-full lg:w-[700px] px-3 xl:w-[1100px] 2xl-[1350px] h-[60px] mt-2 invalid:outline-red-500 translation delay-150 duration-200 focus-visible:outline-primary" required placeholder='7 999 999 99 99' /></div>
            </div>
            <div className="mt-7">
                <div><label htmlFor="city" className="font-bold text-lg md:text-xl">{regInfo.city}</label></div>
                <div><input id="city" type="text" className="outline w-full lg:w-[700px] px-3 xl:w-[1100px] 2xl-[1350px] h-[60px] mt-2 invalid:outline-red-500 translation delay-150 duration-200 focus-visible:outline-primary" required /></div>
            </div>
            <div className="mt-7">
                <div><label htmlFor="district" className="font-bold text-lg md:text-xl">{regInfo.district}</label></div>
                <div><input id="district" type="text" className="outline w-full lg:w-[700px] px-3 xl:w-[1100px] 2xl-[1350px] h-[60px] invalid:outline-red-500 mt-2 translation delay-150 duration-200 focus-visible:outline-primary" required /></div>
            </div>

            <div className='font-bold text-lg md:text-xl mt-15'>{regInfo.tecno_title}</div>
            <div className='font-light text-gray-600 mt-2'>{regInfo.tecno_text}</div>
            <div className='font-bold text-lg md:text-xl mt-7'>{regInfo.it_interesting}</div>
            <div className='font-light text-gray-600 mt-2 mb-3'>{regInfo.interesting_text}</div>

            <div>
                {Object.values(technoInfo).slice(0, -2).map((el) => {
                    return (
                        <div key={el._id}>
                            <div className='flex'>
                                <div><input id={el} type="checkbox" className='accent44-primary w-[20px] h-[20px]' /></div>
                                <div><label htmlFor={el} className='ml-3'>{el}</label></div> 
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="mt-5">
                <div><label htmlFor="your_it_interesting" className="font-bold text-lg md:text-xl">{regInfo.your_it_interesting}</label></div>
                <div><textarea id="your_it_interesting" className="outline w-full lg:w-[700px] px-3 py-3 xl:w-[1100px] 2xl-[1350px] h-[60px] mt-2 translation delay-150 duration-200 focus-visible:outline-primary"></textarea></div>
            </div>

            <div className='font-bold text-lg md:text-xl mt-20'>{regInfo.language}</div>
            <div className='font-light text-gray-600 mt-2 mb-3'>{regInfo.langs_text}</div>

            <div>
                {Object.values(langInfo).slice(0, -2).map((el) => {
                    return (
                        <div key={el._id}>
                            <div className='flex'>
                                <div><input id={el._id} type="checkbox" className='accent-primary w-[20px] h-[20px]' /></div>
                                <div><label htmlFor={el._id} className='ml-3'>{el}</label></div> 
                            </div>
                        </div>
                    )
                })}
            </div>
            
            <div className="mt-5">
                <div><label htmlFor="your_language" className="font-bold text-lg md:text-xl">{regInfo.your_languages}</label></div>
                <div><textarea id="your_language" className="outline w-full lg:w-[700px] px-3 py-3 xl:w-[1100px] 2xl-[1350px] h-[60px] mt-2 translation delay-150 duration-200 focus-visible:outline-primary"></textarea></div>
            </div>

            <div className='font-bold text-lg md:text-xl mt-20 mb-3'>{regInfo.topics}</div>

            <div>
                {Object.values(topicsInfo).slice(0, -2).map((el) => {
                    return (
                        <div key={el._id}>
                            <div className='flex'>
                                <div><input id={el._id} type="checkbox" className='accent-primary w-[20px] h-[20px]' /></div>
                                <div><label htmlFor={el._id} className='ml-3'>{el}</label></div> 
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="mt-5">
                <div><label htmlFor="your_topics" className="font-bold text-lg md:text-xl">{regInfo.your_topics}</label></div>
                <div><textarea id="your_topics" className="outline w-full lg:w-[700px] px-3 py-3 xl:w-[1100px] 2xl-[1350px] h-[60px] mt-2 translation delay-150 duration-200 focus-visible:outline-primary"></textarea></div>
            </div>

            <div className='font-bold text-lg md:text-xl mt-20 mb-3'>{regInfo.development_environment}</div>

            <div>
                {Object.values(toolsInfo).slice(0, -2).map((el) => {
                    return (
                        <div key={el._id}>
                            <div className='flex'>
                                <div><input id={el._id} type="checkbox" className='accent-primary w-[20px] h-[20px]' /></div>
                                <div><label htmlFor={el._id} className='ml-3'>{el}</label></div> 
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="mt-5">
                <div><label htmlFor="your_tools" className="font-bold text-lg md:text-xl">{regInfo.your_tools}</label></div>
                <div><textarea id="your_tools" className="outline w-full lg:w-[700px] px-3 py-3 xl:w-[1100px] 2xl-[1350px] h-[60px] mt-2 translation delay-150 duration-200 focus-visible:outline-primary"></textarea></div>
            </div>

            <div className='font-bold text-lg md:text-xl mt-20'>{regInfo.school_title}</div>
            <div className='font-light text-gray-600 mt-1'>{regInfo.school_subtitle}</div>

            <div className="mt-8">
                <div><label htmlFor="school" className="font-bold text-lg md:text-xl">{regInfo.school}</label></div>
                <div className='font-light text-gray-600 mt-1 mb-3'>{regInfo.school_subtitle}</div>
                <div><input id="school" type="text" className="outline w-full lg:w-[700px] px-3 xl:w-[1100px] 2xl-[1350px] h-[60px] mt-2 invalid:outline-red-500 translation delay-150 duration-200 focus-visible:outline-primary" required /></div>
            </div>

            <div className='font-bold text-lg md:text-xl mt-5'>{regInfo.have_it}</div>
            <div className="flex mt-2">
                <div><input id='have_it' type="checkbox" className='accent-primary w-[20px] h-[20px]' /></div>
                <div><label htmlFor='have_it' className='ml-3'>{regInfo.have_it_text}</label></div>
            </div>

            <div className="mt-8">
                <div><label htmlFor="fio_it_teacher" className="font-bold text-lg md:text-xl">{regInfo.fio_it_teacher}</label></div>
                <div className='font-light text-gray-600 mt-1 mb-3'>{regInfo.it_teacher_text}</div>
                <div><input id="fio_it_teacher" type="text" className="outline w-full lg:w-[700px] px-3 xl:w-[1100px] 2xl-[1350px] h-[60px] mt-2 translation delay-150 duration-200 focus-visible:outline-primary" /></div>
            </div>
            <div className="mt-10">
                <div><label htmlFor="dop_classes" className="font-bold text-lg md:text-xl">{regInfo.dop_classes}</label></div>
                <div><textarea id="dop_classes" className="outline w-full lg:w-[700px] px-3 py-3 xl:w-[1100px] 2xl-[1350px] h-[140px] mt-2 translation delay-150 duration-200 focus-visible:outline-primary"></textarea></div>
            </div>
            <div className="mt-10">
                <div><label htmlFor="olympics" className="font-bold text-lg md:text-xl">{regInfo.olympics}</label></div>
                <div><textarea id="olympics" className="outline w-full lg:w-[700px] px-3 py-3 xl:w-[1100px] 2xl-[1350px] h-[170px] mt-2 translation delay-150 duration-200 focus-visible:outline-primary"></textarea></div>
            </div>

            <div className='font-bold text-lg md:text-xl mt-15'>{regInfo.almost_title}</div>
            <div className='font-light text-gray-600 mt-2'>{regInfo.almost_text}</div>
            <div className='font-bold text-lg md:text-xl mt-8 mb-3'>{regInfo.t_shirt_size}</div>

            <div>
                {Object.values(shirtInfo).slice(0, -2).map((el) => {
                    return (
                        <div key={el._id}>
                            <div className='flex'>
                                <div><input id={el._id} type="radio" name='shirt' className='w-[20px] h-[20px] accent-primary' required /></div>
                                <div><label htmlFor={el._id} className='ml-3'>{el}</label></div> 
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="mt-7">
                <div><label htmlFor="how_many_times_was" className="font-bold text-lg md:text-xl">{regInfo.how_many_times_was}</label></div>
                <div className='flex justify-between mt-7 text-gray-600'>
                    <div>0</div>
                    <div>10</div>
                </div>
                <div><input id="how_many_times_was" type="range" onChange={handleRange_2} min={0} max={10} className="w-full lg:w-[700px] px-3 xl:w-[1100px] 2xl-[1350px] h-[60px] mt-2" /></div>
                <div className='text-center font-bold mt-3 text-lg' id="rangeValue">{range2Info}</div>
            </div>

            <div className='font-bold text-lg md:text-xl'>{regInfo.initiator}</div>
            <div className='font-light text-gray-600 mt-1 mb-2'>{regInfo.init_text}</div>

            <div>
                {Object.values(whereInfo).slice(0, -2).map((el) => {
                    return (
                        <div key={el._id}>
                            <div className='flex'>
                                <div><input id={el._id} type="radio" name='where' className='w-[20px] h-[20px] accent-primary' /></div>
                                <div><label htmlFor={el._id} className='ml-3'>{el}</label></div> 
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="mt-7">
                <div><label htmlFor="where_find_out" className="font-bold text-lg md:text-xl">{regInfo.where_find_out}</label></div>
                <div><textarea id="where_find_out" className="outline w-full lg:w-[700px] px-3 py-3 xl:w-[1100px] 2xl-[1350px] h-[60px] mt-2 translation delay-150 duration-200 focus-visible:outline-primary"></textarea></div>
            </div>

            <div className='flex justify-center'><button type='submit' className='px-3 py-2 mt-10 bg-primary cursor-pointer rounded-2xl w-[220px] text-on-primary font-bold translation delay-200 duration-300 hover:bg-secondary'>Зарегистрироваться</button></div>

        </form>
    )
}