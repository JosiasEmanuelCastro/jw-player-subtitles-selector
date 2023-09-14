// JWPlayer
var style = document.createElement("style");
style.appendChild(document.createTextNode('.jw-text-track-cue{user-select: text !important; pointer-events: all !important;}'));
style.className = "__REQUESTLY__SCRIPT";

(document.head || document.documentElement).appendChild(style);

// Youtube Player
setInterval(make_subtitles_selectable, 250);
function make_subtitles_selectable(){
    elem=document.querySelector("div.caption-window");
    if(elem!=null){
        elem.addEventListener("mousedown", function (event) {
            event.stopPropagation();
        }, true);
        elem.setAttribute("draggable", "false");
        elem.style.userSelect="text";
        elem.style.cursor="text";
        elem.setAttribute("selectable", "true");
    }
    elem=document.querySelector("span.ytp-caption-segment:not([selectable='true']");
    if(elem!=null){
        elem.style.userSelect="text";
        elem.style.cursor="text";
        elem.setAttribute("selectable", "true");
    }
    elem=document.querySelector("#caption-window-1:not([selectable='true']");
    if(elem!=null){
        elem.addEventListener("mousedown", function (event) {
            event.stopPropagation();
        }, true);
        elem.setAttribute("selectable", "true");
        elem.setAttribute("draggable", "false");
    }
}