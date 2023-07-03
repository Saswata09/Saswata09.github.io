const the_animation_drc = document.querySelectorAll('.animation_drc');
const the_animation1_drc = document.querySelectorAll('.animation1_drc');
const the_animation2_drc = document.querySelectorAll('.animation2_drc');
const the_animation3_drc = document.querySelectorAll('.animation3_drc');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animation_drc')
        }
            else {
                entry.target.classList.remove('scroll-animation_drc')
            }

    })
},
   { threshold: 0.2
   });
const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animation1_drc')
        }
           else {
               entry.target.classList.remove('scroll-animation1_drc')
           }
       })
   },
      { threshold: 0.2
});
const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animation2_drc')
        }
           else {
               entry.target.classList.remove('scroll-animation2_drc')
           }
       })
   },
      { threshold: 0.2
});
const observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animation3_drc')
        }
           else {
               entry.target.classList.remove('scroll-animation3_drc')
           }
       })
   },
      { threshold: 0.2
});
for (let i = 0; i < the_animation1_drc.length; i++) {
   const elements = the_animation1_drc[i];

    observer1.observe(elements);
  }
  for (let i = 0; i < the_animation2_drc.length; i++) {
     const elements = the_animation2_drc[i];

      observer2.observe(elements);
    }
    for (let i = 0; i < the_animation_drc.length; i++) {
       const elements = the_animation_drc[i];

        observer.observe(elements);
      }

      for (let i = 0; i < the_animation3_drc.length; i++) {
         const elements = the_animation3_drc[i];

          observer3.observe(elements);
        }
        const the_animation_kmp = document.querySelectorAll('.animation_kmp');
        const the_animation1_kmp = document.querySelectorAll('.animation1_kmp');
        const the_animation2_kmp = document.querySelectorAll('.animation2_kmp');
        const the_animation3_kmp = document.querySelectorAll('.animation3_kmp');

        const observer_1 = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('scroll-animation_kmp')
                }
                    else {
                        entry.target.classList.remove('scroll-animation_kmp')
                    }

            })
        },
           { threshold: 0.2
           });
        const observer1_1 = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('scroll-animation1_kmp')
                }
                   else {
                       entry.target.classList.remove('scroll-animation1_kmp')
                   }
               })
           },
              { threshold: 0.2
        });
        const observer2_1 = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('scroll-animation2_kmp')
                }
                   else {
                       entry.target.classList.remove('scroll-animation2_kmp')
                   }
               })
           },
              { threshold: 0.2
        });
        const observer3_1 = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('scroll-animation2_kmp')
                }
                   else {
                       entry.target.classList.remove('scroll-animation2_kmp')
                   }
               })
           },
              { threshold: 0.2
        });
        for (let i = 0; i < the_animation1_kmp.length; i++) {
           const elements = the_animation1_kmp[i];

            observer1_1.observe(elements);
          }
          for (let i = 0; i < the_animation2_kmp.length; i++) {
             const elements = the_animation2_kmp[i];

              observer2_1.observe(elements);
            }
            for (let i = 0; i < the_animation_kmp.length; i++) {
               const elements = the_animation_kmp[i];

                observer_1.observe(elements);
              }

              for (let i = 0; i < the_animation3_kmp.length; i++) {
                 const elements = the_animation3_kmp[i];

                  observer3_1.observe(elements);
                }
