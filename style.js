var a = document.querySelector(".btn");
var b= document.querySelector(".bar");
var c= document.querySelector(".close");
var d=document.querySelector(".overlay1")
var e=document.querySelector("body")
var head=document.querySelector('#head')
var sticky=head.offsetTop
var a1 = document.querySelector(".btn1");
var c1= document.querySelector(".close1");
var b1= document.querySelector(".bar1");
a.addEventListener('click', function () {
    b.classList.add("sidebar");
    b.classList.remove("bar")
    a.classList.add("open")
    d.classList.add("visible")
    e.classList.add("inner")
});
a1.addEventListener('click', function () {
    b1.classList.add("sidebar1");
    b1.classList.remove("bar1")
    a.classList.add("open1")
    d.classList.add("visible")
    e.classList.add("inner")
});

c.addEventListener('click', function () {
    b.classList.remove("sidebar");
    b.classList.add("bar")
    a.classList.remove("open")
    d.classList.remove("visible")
    e.classList.remove("inner")
});
c1.addEventListener('click', function () {
    b1.classList.remove("sidebar1");
    b1.classList.add("bar1")
    a.classList.remove("open1")
    d.classList.remove("visible")
    e.classList.remove("inner")
});
d.addEventListener('click',function () {
    a.classList.remove("open")
    d.classList.remove("visible")
    e.classList.remove("inner")
    b.classList.remove("sidebar");
    b.classList.add("bar")
});


window.addEventListener('scroll',function () {
   head.classList.add('scroll');
   if (pageYOffset === 0){
       head.classList.remove('scroll')
   }
});