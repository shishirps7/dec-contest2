const boxdiv = document.getElementsByClassName("boxdiv");
console.log(boxdiv);
for (let x = 0; x < boxdiv.length; x++) {
    boxdiv[x].addEventListener("mouseover", (event) => {
        boxdiv[x].style.cursor = "pointer";
    });
}
const toggle=1;
if(toggle==1){
    for(let x=0;x<boxdiv.length;x++){
        boxdiv[x].addEventListener("click", (event) => {
            boxdiv[x].style.backgroundColor = " #FCC822";
            boxdiv[x].style.transform = "scale(1.1)";
        });
    } 
    toggle=0;
}
else{
    for(let x=0;x<boxdiv.length;x++){
        boxdiv[x].addEventListener("click", (event) => {
            boxdiv[x].style.backgroundColor = " #D1D1D1";
            boxdiv[x].style.transform = "scale(1)";
        });
    }
}