window.onscroll = function() {scrollIndicator()};
    
function scrollIndicator() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const progress = document.getElementById("progress");

    let scrolled = (winScroll / height) * 100;
    progress.style.width = scrolled + "%";
}