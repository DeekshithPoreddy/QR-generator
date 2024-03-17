let qrtext=document.getElementById("qrtext");
qrimage=document.getElementById("qrimage");
let imgbox=document.getElementById("imgbox");

function generatorQR(){
    qrimage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+ qrtext.value; 
}