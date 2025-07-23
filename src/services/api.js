const apiDomain = 'http://api.diary.ssypmarket.ru/';
const token = '?token=7123bc63c91be681bf4a2528e6d800';
const fetchCash = {}

export async function getFetch(address, filter, method) {
    return await fetch(firstPart + secPart)
}

export async function getLayoutInfo() {
    let link = apiDomain + "api/singletons/get/layout?token=7123bc63c91be681bf4a2528e6d800&populate=2";
    if (!(link in fetchCash)) {
        const json = await fetch(link);
        fetchCash[link] = json.json();
    }
    return fetchCash[link]
}

export async function getCollectionByName({ name, limit = 1, skip = 0, filter = {}, populate = 1 }) {
    const response = getFetch(apiDomain, `api/collections/get/${name}`, { //Потом надо сделать чтоб по имени коллекции работало
        method: 'post',
        headers: { 'Content-Type': 'application/json' },

        body: JSON.stringify({filter, limit,
            skip,
            populate, 
        })
    });
    const json = response.json();
    return json;
}
export async function getCardByNameAndSlug(slug, { populate = 1 }) {
    const response = getFetch(apiDomain + `api/collections/get/${name}?token=2a273b4e92433fbf9abc18c1a49347`, { //Потом надо сделать чтоб по имени коллекции работало
        method: 'post',
        headers: { 'Content-Type': 'application/json' },

        body: JSON.stringify({
            filter: { slug },
            // fields: { fieldA: 1, fieldB: 1 },
            limit: 1,
            // skip,
            // sort: { _created: -1 },
            populate, // resolve linked collection items

            // lang: 'de' // return normalized language fields (fieldA_de => fieldA)
        })
    });
    const json = response.json();
    // console.log(json)
    return json[0];
}

export default async function getPostBySlug(slug) {
    const response = await fetch(apiDomain + `api/collections/get/posts?token=2a273b4e92433fbf9abc18c1a49347`, { //Потом надо сделать чтоб по имени коллекции работало
        method: 'post',
        headers: { 'Content-Type': 'application/json' },

        body: JSON.stringify({
            filter: { slug, published:true},
            // fields: { fieldA: 1, fieldB: 1 },
             limit: slug,
            // skip,
            // sort: { _created: -1 },
            // populate , // resolve linked collection items

            // lang: 'de' // return normalized language fields (fieldA_de => fieldA)
        })
    });
    const json = response.json();
    // console.log(json)
    return json;
}
// let currentCount=0
export async function getPosts(page = 1) {
    // console.log("I WANT FOUND AN "+page)
    const extra = 3 //Количество статей за каждую "страницу"
    const response = await fetch(apiDomain + `api/collections/get/posts?token=2a273b4e92433fbf9abc18c1a49347`, { //Потом надо сделать чтоб по имени коллекции работало
        method: 'post',
        headers: { 'Content-Type': 'application/json' },

        body: JSON.stringify({
            filter: { published: true },
            sort: { date: -1 },

            // fields: { fieldA: 1, fieldB: 1 },
            limit:extra,
            skip:(page-1)*extra,
            // sort: { _created: -1 },
            // populate , // resolve linked collection items

            // lang: 'de' // return normalized language fields (fieldA_de => fieldA)
        })
    });
    const json = response.json();
    // console.log(json)
    return json;

}


