let computerNum=0;
let playButton=document.getElementById("play-button");
let userInput=document.getElementById("user-input");
let resultArea=document.getElementById("result-area");
let resetButton=document.getElementById("reset-button");
let chances=5;
let gameOver=false;
let chanceArea=document.getElementById("chance-area");
let history=[];

playButton.addEventListener("click",play);
resetButton.addEventListener("click",reset);

function pickRandomNum() {
    computerNum=Math.floor(Math.random() * 100)+1;
    console.log("정딥", computerNum);
}

function play(){
    let userValue=userInput.value; 

    if(userValue<1 || userValue>100 ){
        resultArea.textContent="1과100사이의 숫자를 입력해주세요"
        return;
    }

    if(history.includes(userValue)){
        resultArea.textContent="이미 입력한 숫자입니다"
        return;
    }

    chances --;   
    chanceArea.textContent= `남은기회:${chances}`;
    console.log("chance",chances);

    if(userValue<computerNum){
        resultArea.textContent="up!!"
    }else if(userValue>computerNum){
        resultArea.textContent="down!!"
    }else{
        resultArea.textContent="answer"
        gameOver=true
    }

    history.push(userValue)

    if(chances==0){
        gameOver=true;
    }

    if(gameOver==true){
        playButton.disabled=true;
    }
}

function reset(){
    userInput.value="";
    pickRandomNum();
    resultArea.textContent="결과값이 여기 나옵니다"
    playButton.disabled=false;
}

pickRandomNum();
