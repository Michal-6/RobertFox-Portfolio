const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show_sc');
        }
        else{
            entry.target.classList.remove('show_sc');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
/*-----------------------------------------------------------*/
var x = document.getElementById("dropdown_nav"); 
x.style.display = "none";
function myFunction() { 
            if (x.style.display == "none") {
                x.style.display = "block";
                x.style.animationDirection="normal";
                x.className = 'drop_anim';
              } else {
                x.style.animationDirection="reverse";
                x.className = 'drop_anim';
                setTimeout(() => {x.style.display = "none";}, "300")
              }
    setTimeout(() => {x.className = '';}, "300")
}
