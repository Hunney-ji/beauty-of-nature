function getNum(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let rand=Math.random();
        console.log(rand);
        resolve();
    },1000);
    })
}
async function De(){
    await getNum();
    await getNum();
    await getNum();

}
