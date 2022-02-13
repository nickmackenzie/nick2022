const getNavPosition = (id)=>{
    console.log(id);
    let aboutButton = document.getElementById("aboutButton");
    let projectsButton = document.getElementById("projectsButton");
    if (id === "aboutButton") {
        aboutButton.classList.toggle("text-white");
        aboutButton.classList.toggle("bg-indigo-500");
    } else projectsButton.classList.add("text-yellow-400 bg-black");
};
getNavPosition("aboutButton");

//# sourceMappingURL=index.c2a47b87.js.map
