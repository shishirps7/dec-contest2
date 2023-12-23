const category= document.getElementById("categories")
function togglecategory(){
    if(category.style.display=="none"){
        category.style.display="flex";
    }
    else {
        category.style.display='none';
    }
}
const tagg = document.getElementsByClassName("tags");
const cros = document.getElementsByClassName("cross");
const clos = document.getElementById("close");
   for(let x=0;x<tagg.length;x++){
    tagg[x].addEventListener("click", (event) => {
        tagg[x].style.backgroundColor = "orange";
        cros[x].style.display="flex";
        tagg[x].style.transform="scale(1.1)";
        cros[x].style.transform="scale(1.1)";
    });
    tagg[x].addEventListener("mouseover", (event) => {
        tagg[x].style.cursor="pointer";
    });
   }
   for(let x=0;x<cros.length;x++){
    cros[x].addEventListener("click", (event) => {
        tagg[x].style.backgroundColor = "#D1D1D1";
        cros[x].style.display="none";
    });
   }