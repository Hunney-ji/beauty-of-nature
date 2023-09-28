let inp=document.querySelector("input");
let ul=document.querySelector('ul');
let btn=document.querySelector('button');
btn.addEventListener('click',function (){
    let li=document.createElement("li");
    li.innerText=inp.value;
    ul.appendChild(li);
    console.log(inp.value);
    inp.value="";
    let dltbtns=document.createElement(('button'));
    dltbtns.innerText="delete";
    li.appendChild(dltbtns);
})
ul.addEventListener('click',function(event){
    if(event.target.nodeName=="BUTTON")
        event.target.parentElement.remove();
    
})