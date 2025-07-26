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
    }).then(res => res.json()).then(entry => entry)
}

export function saveRegistration(date) {
    fetch('http://api.diary.ssypmarket.ru/api/collections/save/form?token=f8c7e20b63fb597540bafc635e22b2', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            data: {
                ...date
            }
        })
    }).then(res => res.json()).then(entry => entry)
}


