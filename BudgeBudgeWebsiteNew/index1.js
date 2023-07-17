const the_animation1 = document.querySelectorAll('.animation1')

const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animation1')
        }
            // else {
            //     entry.target.classList.remove('scroll-animation1')
            // }

    })
},
   { threshold: 0.1
   });
//
  for (let i = 0; i < the_animation1.length; i++) {
   const elements = the_animation1[i];

    observer1.observe(elements);
}
