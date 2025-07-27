import Config from '../config.js'

const getFetch = async function (address, filterList = null) {
    const response = (await fetch(Config.apiUrl + address + '?token=' + Config.getToken, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(filterList)
    }));
    return response.json();
}

export async function getCodes() {
    return getFetch(`api/collections/get/EasterEgg/`, {populate : 2})
}

export async function getSingetonInfo(name) {
    return getFetch(`api/singletons/get/${name}`, {populate : 2});
}

export async function getCollectionInfo(name) {
    return getFetch(`api/collections/get/${name}`, {populate : 2});
}

export async function getCollectionByName({ name, limit = 1, skip = 0, filter = {}, populate = 1 }) {
    return getFetch(`api/collections/get/${name}`, { filter, limit, skip, populate });
}

export async function getCardByNameAndSlug(slug, { populate = 1 }) {
    return getFetch(`api/collections/get/${name}`, { filter: { slug }, limit: 1, populate })[0];
}

export async function getPostBySlug(slug) {
    return getFetch(`api/collections/get/posts`, { filter: { slug, published: true }, limit: slug });
}

export async function getCommentBySlug(slug) {
    return getFetch(`api/collections/get/comments`, { filter: { slug, posted: true } });
}

export async function getPosts(page = 1) {
    const extra = 12;
    return getFetch(`api/collections/get/posts`, { filter: { published: true }, sort: { date: -1 }, limit: extra, skip: (page - 1) * extra });
}    

