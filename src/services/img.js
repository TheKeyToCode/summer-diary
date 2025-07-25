export function correctURL(url) {
    if (!url?.includes("http")) {
        url = "https://api.diary.ssypmarket.ru" + url;
    }
    return url;
}