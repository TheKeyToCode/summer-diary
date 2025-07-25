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
    while (str[i] && ((str[i + 1] !== "*") || (i + 1 > str.length))) {
        txt += str[i] ? str[i] : "";
        i += 1;
    }
    if (str[i])
        txt += str[i]
    onItalicIndex = i + 2;
    if (str[i + 1] == "*") {
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
export default function Translator({ children }) {
    const data = children
    const strings = data.split("\n")
    const listOfStarts = [

        {
            starts: ["###", " ###", "  ###", "   ###"],
            func: (str, sliceDelta = 3) => {
                if (str != "")
                    return <h3>
                        {TranslatorString(str.slice(sliceDelta))}
                    </h3>
                return undefined
            },
            isMultipleStrings: false,
        },
        {
            starts: ["##", " ##", "  ##", "   ##"],
            func: (str, sliceDelta = 2) => {
                if (str != "")
                    return <h2>
                        {TranslatorString(str.slice(sliceDelta))}
                    </h2>
                return undefined
            },
            isMultipleStrings: false,
        },
        {
            starts: ["#", " #", "  #", "   #"],
            func: (str, sliceDelta = 1) => {
                if (str != "")
                    return <h1>
                        {TranslatorString(str.slice(sliceDelta))}
                    </h1>
                return undefined
            },
            isMultipleStrings: false,
        },
        {
            starts: [">", " >", "  >", "   >"],
            func: (mass) => {
                type_block = 0;
                const str = mass.filter(function (element) {
                    return element !== undefined;
                })
                if (str != "")
                    return (<blockquote>
                        {str}
                    </blockquote>)
                return undefined
            },
            isMultipleStrings: true,
        },
        {
            starts: ["- ", " - ", "  - ", "   - ", "* ", " * ", "  * ", "   * ", "• ", " • ", "  • ", "   • "],
            func: (str) => {
                type_block = 0;
                if (str != "")
                    return <ul>
                        {str}
                    </ul>
                return undefined
            },
            betweenFunc: (str) => {
                if (str != "")
                    return (
                        <li>
                            {str}
                        </li>
                    )
                return undefined
            },
            isMultipleStrings: true,
        },

        {
            starts: ["***", "---"],
            func: (str, sliceDelta) => {
                return <div><hr /></div>
            },
            isMultipleStrings: false,
        },
        {
            starts: [],
            func: (mass) => {
                type_block = 0;
                const str = mass.filter((element) => {
                    return element !== undefined && element != "";
                })
                .map((str1) => {
                    return typeof str1 === "string" ? (TranslatorString(str1)):str1
                });
                if (str != "")
                    return <p>
                        {str}
                    </p>
                return undefined
            },
            isMultipleStrings: true,
        },
    ]
    let start = -1;
    let buffer_mass = [];
    let isAlreadyEnded = false;
    let type_block = 0;
    let start_length = 0;
    const sm = strings.map((str, index) => {
        if (type_block !== 0) {

            if (type_block === listOfStarts.length - 1) {
                buffer_mass.push(TranslatorString(str))
                if (index + 1 >= strings.length || strings[index + 1] === "" || listOfStarts.some((el) => el.starts.some(start2 => strings[index + 1].startsWith(start2)))) {
                    type_block = 0;

                    return listOfStarts[listOfStarts.length - 1].func(buffer_mass)
                }
                return;
            }
            else {
                if (listOfStarts[type_block].starts.some(start2 => str.startsWith(start2))) {
                    if (str.slice(start_length) !== undefined) {
                        buffer_mass.push(listOfStarts[type_block].betweenFunc !== undefined ?
                            listOfStarts[type_block].betweenFunc(TranslatorString(str.slice(start_length))) :
                            TranslatorString(str.slice(start_length)))
                    }

                    if (index + 1 < strings.length && listOfStarts[type_block].starts.some((start1) => { return strings[index + 1].startsWith(start1) })) {
                        return
                    }
                    else {
                        isAlreadyEnded = false;
                        return listOfStarts[type_block].func(buffer_mass);
                    }
                }
                else {
                    isAlreadyEnded = false;
                    return listOfStarts[type_block].func(buffer_mass);
                }
            }
        }

        start = listOfStarts.length - 1;
        start_length = 0;
        type_block = listOfStarts.length - 1;
        buffer_mass = [str];
        isAlreadyEnded = false;

        listOfStarts.forEach((startValue, startIndex) => {
            if (!isAlreadyEnded) {
                startValue.starts.forEach((st) => {
                    if (!isAlreadyEnded && str.startsWith(st)) {
                        start_length = st.length;
                        isAlreadyEnded = true;
                        type_block = startIndex;
                        if (startValue.isMultipleStrings) {
                            buffer_mass = [(
                                listOfStarts[type_block].betweenFunc !== undefined ? listOfStarts[type_block].betweenFunc(TranslatorString(str.slice(start_length))) :
                                    TranslatorString(str.slice(start_length))
                            )];
                            if (index + 1 < strings.length && listOfStarts[startIndex].starts.some((start1) => { return strings[index + 1].startsWith(start1) })) {
                                return undefined
                            }
                            else {
                                start = startIndex;
                                type_block = 0
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
        if (!listOfStarts[start].isMultipleStrings) {
            return listOfStarts[start].func(buffer_mass[0])
        }
        if (type_block === listOfStarts.length - 1 && (index + 1 >= strings.length || strings[index + 1] === "" || listOfStarts.some((el) => el.starts.some(start2 => strings[index + 1].startsWith(start2))))) {
            type_block = 0;
            return listOfStarts[listOfStarts.length - 1].func(buffer_mass)
        }
        if (type_block === 0) {
            return listOfStarts[start].func(buffer_mass)
        }

        return;
    })
    return (
        <div>
            {...sm}
        </div>
    )
}