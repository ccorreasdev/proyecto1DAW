const home2 = document.querySelector("#home-2");
const home1 = document.querySelector("#home-1");

const observerOptions = {
    rootMargin: "0px 0px 0px 0px",
    threshold: 0.1,
}

const observer = new IntersectionObserver((entries) =>{
    if(entries[0].isIntersecting){
        console.log("Visible");
        home1.classList.add("home__text-img--active");
    }else{
        console.log("NO Visible");
        home1.classList.remove("home__text-img--active");
    }
}, observerOptions);

const observer2 = new IntersectionObserver((entries) =>{
    if(entries[0].isIntersecting){
        console.log("Visible");
        home2.classList.add("home__text-img--active");
    }else{
        console.log("NO Visible");
        home2.classList.remove("home__text-img--active");
    }
}, observerOptions);



observer.observe(home1);

observer2.observe(home2);