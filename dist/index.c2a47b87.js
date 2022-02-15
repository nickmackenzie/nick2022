const getNavPosition = (id)=>{
    console.log(id);
    let aboutButton = document.getElementById("aboutButton");
    let projectsButton = document.getElementById("projectsButton");
    if (id === 1) {
        aboutButton.classList.toggle("text-white");
        aboutButton.classList.toggle("bg-indigo-500");
        projectsButton.classList.toggle("bg-black");
        projectsButton.classList.toggle("text-white");
    } else {
        aboutButton.classList.toggle("text-white");
        aboutButton.classList.toggle("bg-indigo-500");
        projectsButton.classList.toggle("bg-black");
        projectsButton.classList.toggle("text-white");
    }
};
var lastScrollTop = 0;
var lastPositionIndex = 0;
let about = document.getElementById("about");
let projects = document.getElementById("projects");
let currentSlide = 0;
let fp = document.getElementById("fullpage");
let aboutSlide = ``;
let projectsSlide = ``;
window.onscroll = ()=>{
    let scrollY = window.scrollY;
    let visible = document.documentElement.clientHeight;
    let pageHeight = document.documentElement.scrollHeight;
    let bottomOfPage = visible + scrollY === pageHeight;
    let bottomOfWindow = bottomOfPage || pageHeight < visible;
    if (bottomOfWindow) console.log("Bottom!");
};
document.addEventListener("scroll", function(e) {
    var element = e.target;
    let scrollY = window.scrollY;
    let visible = document.documentElement.clientHeight;
    let pageHeight = document.documentElement.scrollHeight;
    let bottomOfPage = visible + scrollY === pageHeight;
    let bottomOfWindow = bottomOfPage || pageHeight < visible;
    var clientHeight = document.getElementById("fullpage").clientHeight;
    var scrollTop = document.documentElement.scrollTop;
    console.log(scrollTop);
    console.log(clientHeight);
    if (scrollTop > 1200) window.scrollTo(0, 0);
    if (bottomOfWindow) console.log("Bottom!");
//console.log(e);
//console.log(about.nextSibling);
// if (fp.offsetHeight + fp.scrollTop >= fp.scrollHeight) {
//   window.scrollTo({ top: 0, behavior: "smooth" });
// }
//about.nextElementSibling.scrollIntoView({ behavior: "smooth" });
// window.scrollTo({ top: 0, behavior: "smooth" });
});
function fullScroll(id) {
    let scrollWrapper = document.getElementById(id);
    let sections = scrollWrapper.querySelectorAll("section");
}

//# sourceMappingURL=index.c2a47b87.js.map
