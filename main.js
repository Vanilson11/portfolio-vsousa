const scrollTop = document.querySelector('.scrolltop')

window.onload = () => {
    scrollTop.style.visibility = "hidden";
    scrollTop.style.opacity = 0;
}

//quando a página for scrollada 
window.onscroll = () => {
    //se a rolagem ultrapassar 200px da tela:
    if(window.scrollY > 550){
        scrollTop.style.visibility = "visible";
        scrollTop.style.opacity = 1;
    } else{
        scrollTop.style.visibility = "hidden";
        scrollTop.style.opacity = 0;
    }
}

scrollTop.addEventListener("click", (event) => {
    event.preventDefault();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})