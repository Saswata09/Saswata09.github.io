const the_animation1 = document.querySelectorAll('.animation_client1')

const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animation_client')
        }
            else {
                entry.target.classList.remove('animation_client')
            }

    })
},
   { threshold: 0.3
   });
//
  for (let i = 0; i < the_animation1.length; i++) {
   const elements = the_animation1[i];

    observer1.observe(elements);
}
