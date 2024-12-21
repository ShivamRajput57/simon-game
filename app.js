let h2=document.querySelector('h2')
let h3=document.querySelector('h3')
let question = [];
let ans=[]
let curr_level=0
// Function to flash the box by computer
function glow(x) {
    let req_box = document.querySelector(`#color${x}`);
    req_box.classList.toggle('flash');
    setTimeout(() => {
        req_box.classList.toggle('flash');
    }, 250); // Flash duration
}

let lose=false
let start=false
document.addEventListener("keypress",function(){
    
    if (start==false){
        start=true
        
        setTimeout(()=>{
            levelup()
        },1500)

    }
    else if (lose==true){
        setTimeout(()=>{
            levelup()
        },1500)
        question=[]
        ans=[]
        curr_level=0
        h3.innerText='keep going'
        lose=false
        
        
        
    }
    

})


function levelup(){
    curr_level+=1
    h2.innerText=`LEVEL${curr_level}`
    let num = (Math.round(Math.random() * 10)) % 4 + 1;
    question.push(num)
    ans=[]
    glow(num)


}


function checker(curr_press){
    ans.push((curr_press.classList[1])[5])
    if (ans.length==question.length){
        if (ans[ans.length-1]==question[question.length-1]){
            console.log('you won that game')
            levelup()
        }else{
            console.log('you loose that game')
            loose()
        }

    }else{
        if (ans[ans.length-1]!=question[ans.length-1]){
            console.log('you loose that game by second if ')
            loose()

        }
    }
    // console.log(curr_press)
    
    

}



let btn = document.querySelectorAll('.input');
for (let key of btn) {
    key.addEventListener('click', function(event) {
        checker(this)
         // Extract the second class (e.g., 'color4')
    });
}


function loose(){
    h2.innerText=`YOU LOOSE THE GAME SCORE:${(curr_level*10)-10}`
    h3.innerText="press any key to agian play the game"
    lose=true
}




