const showJump = () => {
 if(window.scrollY > 350){
    document.querySelector("#jump").style.display = "block";
 }
 else{
    document.querySelector("#jump").style.display = "none";
 }
}

const pauseHero = () =>{
    const hero = document.querySelector("#pp");
    if(hero.textContent === "⏸"){
        document.querySelector("#background-video").pause();
        hero.textContent = "▶️";
        console.log("clicked")
    }
    else{
        document.querySelector("#background-video").play();
        hero.textContent = "⏸";
    }
}

document.addEventListener("scroll", showJump);
document.querySelector("#pp").addEventListener("click", pauseHero);