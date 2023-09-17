const body = document.querySelector('body');
const reviewscore = document.querySelectorAll('.hidden');
const observer = new IntersectionObserver((entries) => {
   entries.forEach((entry)=>{
    if(entry.isIntersecting){
        entry.target.classList.add("fade")
    } else{
        entry.target.classList.remove("fade");
    }
   }) 
})
reviewscore.forEach((el) => observer.observe(el));