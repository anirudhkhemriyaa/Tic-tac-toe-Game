//winning pattern 

const winp=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]


// give turn to player and print x and o 

let turn = true;

let box = document.querySelectorAll(".box");
box.forEach((box) => {
    box.addEventListener("click" , () =>{
        if(turn===true){
            box.innerText="o";
            turn=false;
        }else{
            box.innerText="x";
            turn=true;
        }
        box.disabled=true;

        checkwin();
    })
})



// disabling box after we get the winner


function dodisabled(){
    let box = document.querySelectorAll(".box").forEach(button => button.disabled=true);
}



//show winner kya yadgarr function  bohot time kha gya mera
//removeProperty bhi kaam nhi ki set property bhi nhi or display none se nhi hua to opacity se krna pada


const showW = (ele) => {
    const show = document.querySelector("#show");
    show.innerText=`Congratulation the winner is:-- ${ele}`;
    show.style.opacity = 1;
}



// main function to find winner whether he is x or o


function checkwin(){
    for(let pattern of winp){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(box[pattern[0]].innerText ,box[pattern[1]] .innerText,box[pattern[2]].innerText );
        let pos1 = box[pattern[0]].innerText;
        let pos2 =box[pattern[1]] .innerText;
        let pos3 = box[pattern[2]].innerText;

        if(pos1 !="" && pos2!=""&& pos3 != ""){
            if(pos1 === pos2 && pos1 === pos3){
                //  alert("congratulation you are winner:" ,pos1 );
                // winner(pos1);
                showW(pos1);
                dodisabled();
            }
        }
    }
}



// restart button 

let rstart = document.querySelector("rstart");

function retart(){
    location.reload();
}

// dark mode also include tic tac toe color 


let dark = document.querySelector("#dark");
let mode = "light";

dark.onclick=()=>{
    if(mode==="light"){
        document.querySelector("#body").style.backgroundColor="black";
        document.querySelector("#ttt").style.color="wheat";
        document.querySelector("#show").style.color="white";
        mode="dark";
    }else{
        document.querySelector("#body").style.backgroundColor="darkslategray";
        document.querySelector("#ttt").style.color="black";
        document.querySelector("#show").style.color="black";
        mode="light"
}
}
