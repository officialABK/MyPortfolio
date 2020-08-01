//global variables
const menuToggle = document.querySelector(".menu-toggle");

//loader
window.addEventListener("load", function(){
    let loader = document.getElementById("loader");
    loader.parentElement.removeChild(loader); 
});

// menu toggle
menuToggle.addEventListener("click", function(){
   const respMenu = document.querySelector(".responsive-menu");
    this.classList.toggle("active");
    console.log(this);
    respMenu.classList.toggle("open");  
});

//header scroll
const body = document.body;
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;
 
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll == 0) {
    body.classList.remove(scrollUp);
    return;
  }
   
  if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
    // down
    body.classList.remove(scrollUp);
    body.classList.add(scrollDown);
  } else if (currentScroll < lastScroll && body.classList.contains(scrollDown)) {
    // up
    body.classList.remove(scrollDown);
    body.classList.add(scrollUp);
  }
  lastScroll = currentScroll;
})

/*  parallax
---------------------------------*/
window.addEventListener('scroll', function(){
    let parallax = document.querySelector(".hero-img");
    let scrollPosition = window.pageYOffset;
    let head1 = document.querySelector(".hero-content");
    
    if(window.pageYOffset >= 240){
        head1.style.opacity = "0";
    }else{
        head1.style.opacity = "1";
    }
    
    parallax.style.transform = 'translateY(' + scrollPosition * '0.4' + 'px)';
});


/*  Javascript filter
---------------------------------*/
// animate divs on start
var items = document.querySelectorAll('.projects-box div');
animate(items);

// filter on click
each('.filter-links ul li a', function(el) {
  el.addEventListener('click', function(e) {
    e.preventDefault();
    filterLinks(el);
      
  });
});

let filtersUl = document.querySelectorAll(".filter-ul");
let filtersLi = document.querySelectorAll(".filter-ul li");

filtersLi.forEach(el => {
    el.addEventListener('click', function(){
 filtersUl.querySelector(".active").classList.remove('active');
        el.classList.add("active");
    });
});
    function fTest(){
        this.classList.add("active")};


// filter links functions
function filterLinks(element) {
  // get text 
var el = element.textContent,
    // convert to lowercase
linksTolowerCase = el.toLowerCase();
  // if all remove all elements
if (el === 'All') {
    // first show all view class
each('.view', function(e) {
    e.classList.remove('view');
    });
    // no show init animation
    animate(items);
  } else {
    // if not click all remove all elements
    each('.view', function(e) {
      e.classList.remove('view');
    });
  }
// show animation for current elements
  animate(document.querySelectorAll('.' + linksTolowerCase));
};
// forech arrays
function each(el, callback) {
  var allDivs = document.querySelectorAll(el),
    alltoArr = Array.prototype.slice.call(allDivs);
  Array.prototype.forEach.call(alltoArr, function(selector, index) {
    if (callback) return callback(selector);
  });
};
// animate function
function animate(item) {
  (function show(counter) {
    setTimeout(function() {
      item[counter].classList.add('view');
      counter++;
      if (counter < item.length) show(counter);
    },50);
  })(0);
};

//modal javascript
let modal = document.querySelector(".modal");
let modalBox = document.querySelector(".modal-box");

let box = document.querySelectorAll(".box");
let pDiv = document.querySelectorAll(".projects-box div");
let original= document.querySelector(".modal-img img");
let originalh4= document.querySelector(".modal-textbox h4");
let originalp= document.querySelector(".modal-textbox p");
let closeBtn = document.querySelector(".modal-close");


    pDiv.forEach((preview) =>{
    preview.addEventListener("click",function(){
        
        modal.classList.add("open");
        modalBox.classList.add("open");
        var dTitle = preview.childNodes[3].getAttribute("data-title");
        let dText = preview.childNodes[5].getAttribute("data-text");
        const originalSrc = preview.getAttribute("data-img");
        originalh4.innerHTML = dTitle;
        originalp.innerHTML = dText;
        original.src = `${originalSrc}`;
    });
});



modal.addEventListener("click", function(e){
    if(e.target.classList.contains("modal")){
        modal.classList.remove("open");
        modalBox.classList.remove("open");
    }
            
});



    box.forEach((preview) =>{
    preview.addEventListener("click", function(){
        modal.classList.add("open");
        modalBox.classList.add("open");
        var dTitle = preview.childNodes[3].getAttribute("data-title");
        let dText = preview.childNodes[5].getAttribute("data-text");
        const originalSrc = preview.getAttribute("data-img");
        originalh4.innerHTML = dTitle;
        originalp.innerHTML = dText;
        original.src = `${originalSrc}`;
        
    });
})

closeBtn.addEventListener("click", function(){
     modal.classList.remove("open");
        modalBox.classList.remove("open");
    console.log(modal);
})
