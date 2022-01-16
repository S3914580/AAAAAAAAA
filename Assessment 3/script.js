// Make navigation bar background appear on scroll
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.nav_bar').addClass("sticky_navbar");
        }else{
            $('.nav_bar').removeClass("sticky_navbar");
        }
    })
});

// Press 'Enter' to automatically scroll down

let scrollerID;
let paused = true;
let speed = 2;
let interval = speed * 3;

function startScroll(){
    let id = setInterval(function() {
        window.scrollBy(0, 2);
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            // Reached end of page
            stopScroll();
        }
        removeClass("scroll_guild");
    }, interval);
    return id;
}

function stopScroll() {
    clearInterval(scrollerID);
}

document.body.addEventListener('keypress', function (event)
{
    if (event.which == 13 || event.keyCode == 13) {
        if(paused == true) {
            scrollerID = startScroll();
            paused = false;
        }
        else {
            stopScroll();
            paused = true;
        }
    }
}, true);

