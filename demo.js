let imgbox=document.getElementById("imgbox");
let qrimage=document.getElementById("qrimg");
let qrtext=document.getElementById("textfield");
const buttonicon=document.getElementById("btn");
function generateqr(){
    qrimage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +qrtext.value;
}
buttonicon.addEventListener("click",()=>{
    generateqr();
 })