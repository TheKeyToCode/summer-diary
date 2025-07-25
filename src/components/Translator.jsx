import React from 'react';
let onBoldIndex = 0;
let onItalicIndex = 0;
let onPaintIndex = 0;
let onAIndex = 0;

function onBold(str, i) {
    let txt = ""
    while (str[i] && ((str[i + 1] + str[i + 2] !== "**") || (i + 1 > str.length))) {
        txt += str[i] ? str[i] : "";
        i += 1;
    }
    txt += str[i] ? str[i] : "";
    onBoldIndex = i + 3;
    if (str[i + 1] + str[i + 2] == "**") {
        return (
            <b>
                {txt}
            </b>
        )
    }
    return ("**" + txt)
}
function onItalic(str, i) {
    let txt = ""
    while (str[i] && ((str[i + 1] + str[i + 2] !== "*") || (i + 1 > str.length))) {
        txt += str[i] ? str[i] : "";
        i += 1;
    }
    onItalicIndex = i + 2;
    if (str[i + 1] + str[i + 2] == "*") {
        return (
            <i>
                {txt}
            </i>
        )
    }
    return ("*" + txt)
}
function TranslatorString(str) {
    if (str === undefined || typeof str !== "string") {
        return undefined;
    }
    const charArray = str.split('');

    onBoldIndex = 0;
    onItalicIndex = 0;
    onPaintIndex = 0;
    onAIndex = 0;
    let txt = "";
    const sm = charArray.map((char1, index) => {
        if (onBoldIndex > index || onItalicIndex > index || onPaintIndex > index || onAIndex > index) {
            return;
        }
        else {
            if (char1 === '*') {
                if (str[index + 1] === '*') {
                    return onBold(str, index + 2);
                } else {
                    return onItalic(str, index + 1);

                }
            }
            else if (charArray[index] + charArray[index + 1] === "![" && str.indexOf("]", index) !== -1) {
                onPaintIndex = str.indexOf(")", str.indexOf("]", index)) + 1;
                return (
                    <img src={str.slice(str.indexOf("(", str.indexOf("]")) + 1, str.indexOf(")", str.indexOf("]")))} />
                )
            }
            else if (charArray[index] === "[" && str.indexOf("]", index) !== -1) {
                onAIndex = str.indexOf(")", str.indexOf("]", index)) + 1;
                return (
                    <a href={str.slice(str.indexOf("(", str.indexOf("]")) + 1, str.indexOf(")", str.indexOf("]")))}> {str.slice(index + 1, str.indexOf("]", index))} </a>
                )
            }
            else { return (char1) }
        }
    })

    onBoldIndex = 0;
    onItalicIndex = 0;
    onPaintIndex = 0;
    onAIndex = 0;
    return sm;
}
export default function Translator({children}) {

    const data = children;
    
    const strings = data.split("\n")
    const listOfStarts = [

        {
            starts: ["###", " ###", "  ###", "   ###"],
            func: (str, sliceDelta) => {
                return <h3>
                    {TranslatorString(str.slice(sliceDelta))}
                </h3>
            },
            isMultipleStrings: false,
            sliceThing: 3,
        },
        {
            starts: ["##", " ##", "  ##", "   ##"],
            func: (str, sliceDelta) => {
                return <h2>
                    {TranslatorString(str.slice(sliceDelta))}
                </h2>
            },
            isMultipleStrings: false,
            sliceThing: 2,
        },
        {
            starts: ["#", " #", "  #", "   #"],
            func: (str, sliceDelta) => {
                return <h1>
                    {TranslatorString(str.slice(sliceDelta))}
                </h1>
            },
            isMultipleStrings: false,
            sliceThing: 1,
        },
        {
            starts: [">", " >", "  >", "   >"],
            func: (mass, sliceDelta = 1) => {
                type_block = 0;

                const str = mass.filter(function (element) {
                    return element !== undefined;
                })

                return (<blockquote>
                    {str}
                </blockquote>)
            },
            isMultipleStrings: true,
            sliceThing: 1,
        },

        {
            starts: ["***", "---"],
            func: (str, sliceDelta) => {
                return <div><hr /></div>
            },
            isMultipleStrings: false,
            sliceThing: 1,
        },
        ///Это должно быть последним, это текст.
        {
            starts: [],
            func: (mass, sliceDelta) => {
                type_block = 0;

                const str = mass.filter((element) => {
                    return element !== undefined;
                }).map((str1) => {
                    return (TranslatorString(str1.slice(sliceDelta)))
                });
                return <p>
                    {str}
                </p>
            },
            isMultipleStrings: true,
            sliceThing: 0,
        },

    ]
    let start = -1;
    let buffer_block = "";
    let buffer_mass = [];
    let isAlreadyEnded = false;
    let type_block = 0;
    let start_length = 0;
    let o = 0;
    const sm = strings.map((str, index) => {
        let start1 = 0;
        if (type_block !== 0) {
            if (listOfStarts[type_block].starts.some(start2 => str.startsWith(start2))) {

                if (str.slice(start1.length) !== undefined) {
                    buffer_mass.push(TranslatorString(str.slice(start_length)).join(''))
                }

                if (listOfStarts[type_block].starts.some((start1) => { return strings[index + 1].startsWith(start1) })) {
                    o = 1
                }
                else {
                    isAlreadyEnded = false;
                    o = 2
                }
            }
            else {
                isAlreadyEnded = false;
                o = 2
            }
        }
        if (o) {
            if (o === 1) return
            if (o === 2) {
                o = 0
                type_block = 0
                return listOfStarts[3].func(buffer_mass);
            }
        }
        start = listOfStarts.length - 1;
        start_length = 0;
        type_block = 0;
        buffer_block = str;
        buffer_mass = [str];
        isAlreadyEnded = false;

        listOfStarts.forEach((startValue, startIndex) => {
            if (!isAlreadyEnded) {
                startValue.starts.forEach((st) => {
                    if (str.startsWith(st)) {
                        start_length = st.length;
                        isAlreadyEnded = true;
                        if (startValue.isMultipleStrings) {
                            buffer_block = str;
                            buffer_mass = [(
                                TranslatorString(str.slice(start_length))?.join('')
                            )];
                            start = startIndex;
                            type_block = startIndex
                            if (listOfStarts[type_block].starts.some((start1) => { return strings[index + 1].startsWith(start1) })) {

                                type_block = startIndex
                                return undefined
                            }
                            else {
                                type_block = 0
                                isAlreadyEnded = false;
                                start = 3;
                            }

                        }
                        else {
                            start = startIndex;
                            type_block = 0;
                        }
                    }
                })
            }
        })
        if (start === listOfStarts.length - 1 && start_length !== 0) {
            start_length = 0;
        }
        if (start === listOfStarts.length - 1)
            return listOfStarts[start].func(buffer_mass, start_length)
        if (!type_block && start != 3) {
            return listOfStarts[start].func(buffer_block, start_length)
        }
        if (!type_block && !type_block && start === 3) {
            return listOfStarts[start].func(buffer_mass, start_length)
        }









    })
    return (
        <div>
            {...sm}
        </div>
    )
}