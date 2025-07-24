export function SaveComment() {
    fetch('/api/collections/save/comments?token=f8c7e20b63fb597540bafc635e22b2', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        data: ''
    })
})
}