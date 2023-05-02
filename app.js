let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach( function (btn){
    btn.addEventListener('click',(e)=>{
        
        const list = e.currentTarget.classList;
        if(list.contains('decrease')){
            count = count - 1;
            value.style.color='red';
        }
        else if(list.contains('increase')){
            count = count + 1;
            value.style.color='green';
        }
        else{
            count = 0;
            value.style.color='black';

        }

        value.innerText = count;

    

    
    });

});
function pushMyname(){
    localStorage.setItem("name","sanjeet rai");
}
function getMyName(){
    let myname=localStorage.getItem("name");
    // console.log(get);
    alert(myname)
}
getMyName();
// pushMyname();