// slides_hover = ["About Us", "Operations Undertaken Here", "Our Machineries"]
//
var slideIndex = -1;

document.getElementById('slide-show').addEventListener("keydown", function(event){
  console.log(event.key);
  if(event.key=="ArrowRight")
  {
    plusDivs(1);
  }
  else if(event.key=="ArrowLeft")
  {
    plusDivs(-1);
  }
})

//
// showDivs();
// // showHovs();
//
// images=["bbrl11.jpg", "bbrl1.png", "bbrl2.png"];
//
// const timeOut=setInterval(slideShow, 5000);
//
slideShow();

var timeout=setInterval(slideShow,6000);

function slideShow()
{
  slideIndex=(slideIndex+1)%3;
  for(var i=0;i<3;i++)
  {
    document.getElementsByClassName('slides')[i].style.display="none";
  }
  document.getElementsByClassName('slides')[slideIndex].style.display="block";
}

function plusDivs(n) {
  console.log(slideIndex);
  clearInterval(timeout);
  // slideShow();
  slideIndex=slideIndex+n;
  if(slideIndex<0)
  {
    slideIndex=2;
  }
  else if(slideIndex>2)
  {
    slideIndex=0;
  }
  for(var i=0;i<3;i++)
  {
    document.getElementsByClassName('slides')[i].style.display="none";
  }
  document.getElementsByClassName('slides')[slideIndex].style.display="block";
  timeout=setInterval(slideShow,6000);
}

function sc()
{
  // document.getElementsByClassName('top_back_img')[0].style.opacity=0.2;
  document.getElementsByClassName('top_back_img')[0].src="bbrl21.png";
  document.getElementsByClassName('top_back_img')[0].style.opacity=0;
  // document.getElementsByClassName('top_back_img')[0].classList.remove("top_back_anim2");
  // document.getElementsByClassName('top_back_img')[0].classList.add("top_back_anim1");
}

function sc1()
{
  // document.getElementsByClassName('top_back_img')[0].style.opacity=1;
  document.getElementsByClassName('top_back_img')[0].src="bbrl20.jpg";
  document.getElementsByClassName('top_back_img')[0].style.opacity=1;
  // document.getElementsByClassName('top_back_img')[0].classList.remove("top_back_anim1");
  // document.getElementsByClassName('top_back_img')[0].classList.add("top_back_anim2");
}

// var slideIndex = 1;
// showSlides(slideIndex);
// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }
// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }
// function showSlides(n) {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     var dots = document.getElementsByClassName("dot");
//     if (n > slides.length) { slideIndex = 1 }
//     if (n < 1) { slideIndex = slides.length }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += " active";
// }
// // Auto Slide   if you need auto slide ,remove the commit "//"
// var slideIndex = 0;
// showSlides();
// function showSlides() {
//     var i;
//    var slides = document.getElementsByClassName("mySlides");
//    for (i = 0; i < slides.length; i++) {
//        slides[i].style.display = "none";
//    }
//    slideIndex++;
//    if (slideIndex > slides.length) { slideIndex = 1 }
//    slides[slideIndex - 1].style.display = "block";
//    setTimeout(showSlides, 5000); // Change image every 2 seconds
// }




//
// function showDivs() {
//   var i;
//   var x = document.getElementsByClassName("slides");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   x[slideIndex].style.display = "block";
// }
//
// function showHovs()
// {
//   document.getElementsByClassName("slide_hov")[0].innerText=slides_hover[slideIndex];
// }

// function slide_hover(x)
// {
//   console.log(x.name[4]);
//   document.getElementsByClassName('slide1')[0].style.fontWeight="900";
// }
const the_animation2 = document.querySelectorAll('.animation_mv');
// const the_animation = document.querySelectorAll('.animation3');
const the_animation = document.querySelectorAll('.animation');
const the_animation1 = document.querySelectorAll('.animation1');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animation')
        }
            else {
                entry.target.classList.remove('scroll-animation')
            }

    })
},
   { threshold: 0.5
   });

   const observer2 = new IntersectionObserver((entries) => {
       entries.forEach((entry) => {
           if (entry.isIntersecting) {
               // entry.target.classList.add('scroll-animation')
               document.getElementsByClassName('mission')[0].classList.add('animation_m_v1');
               document.getElementsByClassName('vision')[0].classList.add('animation_m_v2');
           }
               else {
                   // entry.target.classList.remove('scroll-animation')
                   document.getElementsByClassName('mission')[0].classList.remove('animation_m_v1');
                   document.getElementsByClassName('vision')[0].classList.remove('animation_m_v2');
               }

       })
   },
      { threshold: 0.5
      });


for (let i = 0; i < the_animation.length; i++) {
   const elements = the_animation[i];

    observer.observe(elements);
  }
  for (let i = 0; i < the_animation1.length; i++) {
     const elements = the_animation1[i];

      observer.observe(elements);
    }


    for (let i = 0; i < the_animation2.length; i++) {
       const elements = the_animation2[i];

        observer2.observe(elements);
      }

    var modal = document.getElementById('myModal');
    // Get the main container and the body
    var body = document.getElementsByTagName('body');
    // var container = document.getElementById('myContainer');
    // Get the open button
    // var btnOpen = document.getElementById("myBtn");
    // Get the close button
    // var btnClose = document.getElementById("closeModal");
function openpop()
{
  document.getElementById('form-pop').style.display="block";
  // $('body').addClass('active-modal');
  // $('.form-pop').addClass('modal-show');
// $('body').addClass("is-blurred");
  $('#myModal').removeClass("is-hidden");
  // $('#myModal').addClass("Modal");
  // modal.className = "Modal";
  // setTimeout(function() {

    // modal.className = "Modal";
  // }, 100);
  // container.parentElement.className = "ModalOpen";
}
function closepop()
{
  document.getElementById('form-pop').style.display="none";
  // modal.className = "Modal is-hidden";
  modal.className = "Modal is-hidden";
  $('body').removeClass("is-blurred");
  // $('body').removeClass('active-modal');
}
// Get the modal
// var modal = document.getElementById('myModal');
// Get the main container and the body
// var body = document.getElementsByTagName('body');
// var container = document.getElementById('myContainer');
// Get the open button
// var btnOpen = document.getElementById("myBtn");
// Get the close button
// var btnClose = document.getElementById("closeModal");
// Open the modal
// btnOpen.onclick = function() {
//     modal.className = "Modal is-visuallyHidden";
//     setTimeout(function() {
//       container.className = "MainContainer is-blurred";
//       modal.className = "Modal";
//     }, 100);
//     container.parentElement.className = "ModalOpen";
// }
// // Close the modal
// btnClose.onclick = function() {
//     modal.className = "Modal is-hidden is-visuallyHidden";
//     body.className = "";
//     container.className = "MainContainer";
//     container.parentElement.className = "";
// }
// // When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.className = "Modal is-hidden";
        $('body').removeClass("is-blurred");
        // container.className = "MainContainer";
        // container.parentElement.className = "";
    }
}
