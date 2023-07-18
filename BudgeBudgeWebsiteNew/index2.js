// function _class(name)
// {
//   return document.getElementsByClassName(name);
// }
// let tabPanes=_class("tab-header")[0].getElementsByTagName("div");
// for(let i=0;i<tabPanes.length;i++)
// {
//   tabPanes[i].addEventListener("click", function(){
//     _class("tab-header")[0].getElementsByClassName("active")[0].classList.remove("active");
//     tabPanes[i].classList.add("active");
//
//     _class("tab-indicator")[0].style.top=`calc(130px + ${i*50}px)`
//
//     _class("tab-content")[0].getElementsByClassName("active")[0].classList.remove("active");
//     _class("tab-content")[0].getElementsByClassName("content")[i].classList.add("active");
//   });
// }

// document.getElementById("profile-tab").click();
// console.log("ce");
// click_event = new CustomEvent('click');
// btn_element = document.querySelector('#profile-tab');
// btn_element.dispatchEvent(click_event);
// console.log("fwes");
