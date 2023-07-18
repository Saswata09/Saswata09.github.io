const header = document.querySelectorAll('.header')

const observer_header = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // entry.target.classList.add('animation_client')
            document.getElementById('nav_id').classList.add('bg-body-tertiary');
            // document.getElementById('nav_id').classList.remove('nav_change_color');
            document.getElementById('nav_id').classList.remove('nav_btn');
        }
            else {
                document.getElementById('nav_id').classList.add('nav_change_color');
                // document.getElementById('nav_id').classList.add('nav_btn');
                document.getElementById('nav_id').classList.remove('bg-body-tertiary');
            }

    })
},
   { threshold: 0.3
   });
  for (let i = 0; i < header.length; i++) {
   const elements = header[i];

    observer_header.observe(elements);
}
