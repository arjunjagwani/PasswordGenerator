const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const alphabets=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const nums=[ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols=["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let x=[];
let pass1="";
let pass2="";
let passBtn=document.getElementById("pass-btn");
let passLength=15;
let pass1Ele=document.getElementById("pass1");
let pass2Ele=document.getElementById("pass2");
function getRandomIndex(y){
    return Math.floor(Math.random()*y.length);
}
passBtn.addEventListener("click",function(){
        passLength=document.getElementById("num").value;
    if(passLength===""){
        passLength=15;
    }pass1Ele.style.display='inline-block';
        pass2Ele.style.display='inline-block';
        pass1="";
        pass2="";
        if(document.getElementById("Sn").checked && document.getElementById("Nn").checked)
        {
            x=alphabets;
        }if(document.getElementById("Sy").checked && document.getElementById("Nn").checked)
        {
            x=alphabets.concat(symbols);
        }if(document.getElementById("Sn").checked && document.getElementById("Ny").checked)
        {
            x=alphabets.concat(nums);
        }if(document.getElementById("Sy").checked && document.getElementById("Ny").checked)
        {
            x=characters;
        }
        for(let i=0;i<passLength;i++){
        pass1+=x[getRandomIndex(x)]
        pass2+=x[getRandomIndex(x)]
    }
    
    pass1Ele.textContent=pass1;
    pass2Ele.textContent=pass2;
    

})
function copy(copyId){
    let inputElement=document.createElement("input");
    inputElement.type="text";
    let copyText=document.getElementById(copyId).textContent;
    inputElement.value=copyText;
    document.body.appendChild(inputElement);
    inputElement.select();
    document.execCommand("copy");
    document.body.removeChild(inputElement);
    let copied=document.getElementById("copied");
    copied.style.display="block";
    copied.textContent="Password Copied";
    setTimeout(function(){
        copied.style.display="none";
    },1000)
    
}



