export function correctURL(url) {
    if (!url?.includes("http")) {
        url = "http://api.diary.ssypmarket.ru" + url;
    }
    return url;
}