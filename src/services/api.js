
const apiDomain = 'https://api.diary.ssypmarket.ru/';

const getFetch = async function (address, filterList = null) {
    const response = (await fetch(apiDomain + address, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(filterList)
    }));
    return response.json();
}

export async function getCodes() {
    return getFetch(`api/collections/get/EasterEgg/?token=7123bc63c91be681bf4a2528e6d800&populate=2`)
}

export async function getSingetonInfo(name) {
    return getFetch(`api/singletons/get/${name}?token=7123bc63c91be681bf4a2528e6d800&populate=2`);
}

export async function getCollectionInfo(name) {
    return getFetch(`api/collections/get/${name}?token=7123bc63c91be681bf4a2528e6d800&populate=2`);
}

export async function getCollectionByName({ name, limit = 1, skip = 0, filter = {}, populate = 1 }) {
    return getFetch(`api/collections/get/${name}?token=2a273b4e92433fbf9abc18c1a49347`, { filter, limit, skip, populate });
}

export async function getCardByNameAndSlug(slug, { populate = 1 }) {
    return getFetch(`api/collections/get/${name}?token=2a273b4e92433fbf9abc18c1a49347`, { filter: { slug }, limit: 1, populate })[0];
}

export async function getPostBySlug(slug) {
    return getFetch(`api/collections/get/posts?token=2a273b4e92433fbf9abc18c1a49347`, { filter: { slug, published: true }, limit: slug });
}

export async function getCommentBySlug(slug) {
    return getFetch(`api/collections/get/comments?token=2a273b4e92433fbf9abc18c1a49347`, { filter: { slug, posted: true } });
}

export async function getPosts(page = 1) {
    const extra = 12; //Количество статей за каждую "страницу"
    return getFetch(`api/collections/get/posts?token=2a273b4e92433fbf9abc18c1a49347`, { filter: { published: true }, sort: { date: -1 }, limit: extra, skip: (page - 1) * extra });
}    

