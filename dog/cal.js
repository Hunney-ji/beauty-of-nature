let ope=document.querySelectorAll('.ope');
let out=document.querySelector('#p');

function buttonpresss(){
    let ope1=this;
    val=ope1.innerText;
    try {
    if((val!="x")&&(val!="=")&&(val!="c")){
    val=ope1.innerText;
    out.innerText=out.innerText+val;
    }
    else if(val=="x"){
        out.innerText=out.innerText.slice(0,-1);
    }else if(val=="="){
        out.innerText=eval(out.innerText);
    }
    else if(val=="c"){
        out.innerText="";
    }
}
catch(e){
    console.log(e)
    out.innerText="bkl"
}

}

for(btn of ope){
    btn.addEventListener('click',buttonpresss)
}