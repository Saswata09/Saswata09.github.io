const the_animation = document.querySelectorAll('.animation')

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animation')
        }
            // else {
            //     entry.target.classList.remove('scroll-animation')
            // }

    })
},
   { threshold: 0.1
   });
//
  for (let i = 0; i < the_animation.length; i++) {
   const elements = the_animation[i];

    observer.observe(elements);
}

var i = 0;
var txt = 'Fueling Lives, Embracing Quality.';
var speed = 80;
function typing1()
{
  // wait(2000);
  typing();
}
function typing() {
  // console.log("wed");
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typing, speed);
  }
}
