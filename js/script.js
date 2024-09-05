let next = document.getElementById('next');
let prev = document.getElementById('prev');
let slider = document.querySelector(".slider"); 
let slides = document.querySelectorAll(".slide");
let ishovered = false ;
let interval ;
next.addEventListener('click', function(){
    let slides = document.querySelectorAll(".slide");
    slider.appendChild(slides[0]);
    resetAutoSlide()
})

prev.addEventListener('click', function(){
    let slides = document.querySelectorAll(".slide");
    slider.prepend(slides[slides.length - 1]);
    resetAutoSlide()
})
let x = false;
function automaticallySlide(){
   interval=  setInterval(()=>{
        if(!ishovered){
        let slides = document.querySelectorAll(".slide");
        slider.appendChild(slides[0]);
        }
    }, 4000);
}

function stopAutoSlide(){
    clearInterval(interval);
}
function resetAutoSlide() {
    stopAutoSlide(); // Stop the current interval
    automaticallySlide(); // Start a new interval
}

slider.addEventListener('mouseover',()=>{
    ishovered = true;
    stopAutoSlide();
})
slider.addEventListener('mouseout' ,()=>{
    ishovered = false;
    automaticallySlide();
})
automaticallySlide();
