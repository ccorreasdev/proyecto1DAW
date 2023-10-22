const containerMotorOptions = document.querySelector(".configurator__options");
const motorOptions = document.querySelectorAll(".motor__option");

containerMotorOptions.addEventListener("click", (e)=>{

    if(e.target.closest(".motor__option")){
        [...motorOptions].map((option) =>{
            option.classList.remove("motor__option--active");
        })
        const motorOptionActive = e.target.closest(".motor__option");
        motorOptionActive.classList.add("motor__option--active");
    }
})
