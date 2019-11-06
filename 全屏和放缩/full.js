function resizeContent(w, h) {
    var content = document.getElementById("content");

    var pw = document.documentElement.clientWidth;
    var ph = document.documentElement.clientHeight;
    console.log(pw)
    console.log(ph)
    var cw = w || content.offsetWidth;
    var ch = h || content.offsetHeight;
    var wp = pw / cw;
    var hp = ph / ch;

    var zoom = 1;

    if (wp < hp) {
        zoom = wp;
        content.style.setProperty('margin-left', -((cw - cw * zoom) / 2) + "px");
        content.style.setProperty('margin-top', ((ph - ch * zoom) / 2) - ((ch - ch * zoom) / 2) + "px");
    } else {
        zoom = hp;
        content.style.setProperty('margin-top', -((ch - ch * zoom) / 2) + "px");
        content.style.setProperty('margin-left', ((pw - cw * zoom) / 2) - ((cw - cw * zoom) / 2) + "px");
    }
    content.style.setProperty('top', "0px");
    content.style.setProperty('left', "0px");
    content.style.setProperty('transform', "scale(" + zoom + ")");
}
window.onresize = function () {
    resizeContent();
};
resizeContent();