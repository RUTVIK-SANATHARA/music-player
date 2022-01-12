let audio = document.querySelector("audio");
let playbtn=document.querySelector(".fa-play");
let pausebtn=document.querySelector(".fa-pause");
let img = document.querySelector("img");

let playing = false;
playbtn.addEventListener("click",()=>{
  audio.play();
  

// playing=true;

if(playing==false){
    audio.play();
    playing=true;
    img.classList.add("anime");
    playbtn.classList.replace("fa-play","fa-pause");
}else{
    audio.pause();
    playing=false;
    img.classList.remove("anime");
    playbtn.classList.replace("fa-pause","fa-play");
}
});

// pausebtn.addEventListener("click",()=>{
//     audio.pause();
//     // img.classList.add("anime");
//   pausebtn.classList.replace("fa-pause","fa-play");
//   });