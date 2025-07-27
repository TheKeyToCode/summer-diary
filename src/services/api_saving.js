import Config from '../config.js'

export function saveComment(author, text, slug) {
    fetch(Config.apiUrl+'api/collections/save/comments?token='+Config.saveToken, {
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
    fetch(Config.apiUrl+'=api/collections/save/form?token='+Config.saveToken, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            data: {
                ...date
            }
        })
    }).then(res => res.json()).then(entry => entry)
}


