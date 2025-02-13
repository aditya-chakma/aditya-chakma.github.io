_blogParam = "blog";

function getBlogName() {
    const urlParamString = window.location.href.split("?")[1];
    if (!urlParamString) return null;

    let urlSearchParams = new URLSearchParams(urlParamString);
    return urlSearchParams.get(_blogParam);
}
