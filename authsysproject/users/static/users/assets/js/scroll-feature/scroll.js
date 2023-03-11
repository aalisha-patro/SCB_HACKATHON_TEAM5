//This script has been adapted from a W3School Tutorial. The 'getElementById' condition has been customised by me. Source:[https://www.w3schools.com/howto/howto_js_scroll_to_top.asp]
var mybutton = document.getElementById("backtoheader");
            
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
} else {
    mybutton.style.display = "none";
}
}

function topFunction() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}
