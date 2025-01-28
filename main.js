// const showImageButton = document.getElementById("showImage");
// const smileyImage = document.getElementById("smileyImage");

// smileyImage.style.display = "block";

// showImageButton.addEventListener("click", () => {
//     if (smileyImage.style.display == "none") {
//         smileyImage.style.display = "block";
//         showImageButton.textContent = "Hide Image"; 
//     }else if(smileyImage.style.display == "block"){
//         smileyImage.style.display = "none";
//         showImageButton.textContent = "Show Image";
//     }
// });




function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (sectionId == "contactStart"){
        section.scrollIntoView({
            behavior:"smooth",
            block:"start"

        })
    
    
    } else if (section) {
        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}



const changeStyleSheet = document.getElementById("changeCSS");
const toggling = document.getElementById("toggling");
const logo = document.querySelector(".logo");


toggling.addEventListener("click", () => {
    if (changeStyleSheet.href == "http://127.0.0.1:5500/stylingLightMode.CSS"){
        changeStyleSheet.href = "http://127.0.0.1:5500/stylingDarkMode.CSS";
        logo.src = "../Images/dark.png";
        toggling.textContent = "Day";
    } else if (changeStyleSheet.href == "http://127.0.0.1:5500/stylingDarkMode.CSS"){
        changeStyleSheet.href = "http://127.0.0.1:5500/stylingLightMode.CSS";
        logo.src = "../Images/light.png";
        toggling.textContent = "Night";
    }

})


const PDFPage = document.querySelector(".PDFPage");
const CVButton = document.getElementById("CVImage");
const CVExitButton = document.getElementById("exitCV");


CVButton.addEventListener("click", () => {
    PDFPage.style.display = "flex";
})

CVExitButton.addEventListener("click", () => {
    PDFPage.style.display = "none";
})








// function myFunction(){
    
//     if (document.body.style.backgroundColor == "white"){
//         document.body.style.backgroundColor = "black";
//     } else if (document.body.style.backgroundColor == "black"){
//         document.body.style.backgroundColor = "white";
//     