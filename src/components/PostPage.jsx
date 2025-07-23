export default async function getPostBuSlug(slug) {
    const response = await fetch(apiDomain + `api/collections/get/posts?token=2a273b4e92433fbf9abc18c1a49347`, { //Потом надо сделать чтоб по имени коллекции работало
        method: 'post',
        headers: { 'Content-Type': 'application/json' },

        body: JSON.stringify({
            filter: { slug },
            // fields: { fieldA: 1, fieldB: 1 },
            // limit:1,
            // skip,
            // sort: { _created: -1 },
            // populate , // resolve linked collection items

            // lang: 'de' // return normalized language fields (fieldA_de => fieldA)
        })
    });
    const json = response.json();
    console.log(json)
    return json;
}