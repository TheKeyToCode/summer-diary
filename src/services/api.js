const apiDomain = 'http://api.diary.ssypmarket.ru/';

const getFetch = async function(address, filterList=null) {
    const toke = '?token=7123bc63c91be681bf4a2528e6d800&populate=2'
    const response = (await fetch(apiDomain + address + toke, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(filterList)}))
    return response.json()
}

export async function getLayoutInfo() {
    return getFetch(`api/singletons/get/layout`, {populate : 2})
}

export async function getMainInfo() {
    return getFetch(`api/singletons/get/main_page`, {populate : 2})
}

export async function getCollectionByName({ name, limit = 1, skip = 0, filter = {}, populate = 1 }) {
    return getFetch(`api/collections/get/${name}`, {filter, limit, skip, populate})
}

export async function getCardByNameAndSlug(slug, { populate = 1 }) {
    return getFetch(`api/collections/get/${name}`, {filter: { slug }, limit: 1, populate})[0]
}

export async function getPostBySlug(slug) {
    return getFetch(`api/collections/get/posts`, {filter: { slug, published:true}, limit: slug})
}

export async function getPosts(page = 1) {
    const extra = 3 //Количество статей за каждую "страницу"
    return getFetch(`api/collections/get/posts`, {filter: { published: true }, sort: { date: -1 }, limit:extra, skip:(page-1)*extra})
}


