var x=document.getElementById("textarea");
var y=document.getElementById("size");
var z=document.getElementById("police");

function bold(){
    if (x.style.fontWeight!="bold")
        x.style.fontWeight="bold";
        else
            x.style.fontWeight="normal";   
}

function Italic() {
    if (x.style.fontStyle!="italic")
       x.style.fontStyle="italic";
       else
           x.style.fontStyle="normal";
}

function Underlinetext() {
    if (x.style.textDecoration!="underline")
       x.style.textDecoration="underline";
       else
           x.style.textDecoration="none";
}

function changeSize() {
    x.style.fontSize=y.value;
}

function changePolice() {
    x.style.fontFamily=z.value;
}

$("document").ready (function(){
    
    $(".pictures").parent(".course").hover(function(){
        $(this).find(".viewmore").toggle();
    })
})