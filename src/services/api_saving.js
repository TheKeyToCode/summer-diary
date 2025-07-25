export function saveComment(author, text, slug) {
    fetch('http://api.diary.ssypmarket.ru/api/collections/save/comments?token=f8c7e20b63fb597540bafc635e22b2', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            data: {
                author,
                text,
                slug,
                posted: false
            }
        })
    }).then(res => res.json(), res => console.log(res)).then(entry => console.log(entry), entry => console.log(entry))
}

export function saveRegistration(author, text, slug) {
    fetch('http://api.diary.ssypmarket.ru/api/collections/save/comments?token=f8c7e20b63fb597540bafc635e22b2', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            data: {
                author,
                text,
                slug,
                posted: false
            }
        })
    }).then(res => res.json(), res => console.log(res)).then(entry => console.log(entry), entry => console.log(entry))
}


