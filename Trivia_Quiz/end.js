var mainCont = document.createElement('div');
mainCont.setAttribute('class','container');
mainCont.setAttribute('id', 'mainCont');


var mainDiv = document.createElement('div');
mainDiv.setAttribute('class','text-center p-5 m-5');
mainDiv.setAttribute('id','mainDiv');


var div1 = document.createElement('div');
div1.setAttribute('class','text-center m-2 text-primary');
div1.setAttribute('id','div1');
div1.innerHTML = "<h1>" + sessionStorage.getItem('scoreOfQuiz') + "</h1>";

var div2 = document.createElement('div');
div2.setAttribute('class','text-center m-2');
div2.setAttribute('id','div2');

var txtbox_un = document.createElement('input');
txtbox_un.setAttribute('type','text');
txtbox_un.setAttribute('id','username')
txtbox_un.setAttribute('placeholder','username')
txtbox_un.setAttribute('class','bg-white rounded usernamebox');
txtbox_un.addEventListener('keyup',keypressed);
div2.appendChild(txtbox_un);

function keypressed(){

    if(document.getElementById('username').value.length === 0){
        document.getElementById('saveScoreBtn').disabled = true
    }
    else{
        document.getElementById('saveScoreBtn').disabled = false
    }
}

var div3 = document.createElement('div');
div3.setAttribute('class','text-center m-2');
div3.setAttribute('id','div3');

var savebtn = document.createElement('button');
savebtn.setAttribute('id','saveScoreBtn');
savebtn.setAttribute('class','btn btn-light');
savebtn.setAttribute('disabled','true');
savebtn.addEventListener('click',saveScore);
savebtn.innerText = "Save";
div3.appendChild(savebtn);

function saveScore(){

    var playerscoreJSON = {}
    var arrayOfAllScores = [];
    playerscoreJSON.playername = document.getElementById('username').value;
    playerscoreJSON.playerscore = parseInt(document.getElementById('div1').innerText);
    //If scores are not present in the local storage(1st time game play)
    if(!localStorage.getItem('ScoresOfQuizLocalStorage')){
        
        arrayOfAllScores.push(playerscoreJSON);
        localStorage.setItem('ScoresOfQuizLocalStorage',JSON.stringify(arrayOfAllScores));
        alert('Your score has been saved sucessfully');
    }
    //If scores are already present in the local storage
    else{
        var newPlayer = true;
        var arrayOfAllScores = JSON.parse(localStorage.getItem('ScoresOfQuizLocalStorage'));
        //To check if the username is already present in saved scores and update if yes
        arrayOfAllScores.forEach((item) => {
            if(item.playername === playerscoreJSON.playername){
                item.playerscore = playerscoreJSON.playerscore;
                newPlayer = false;
                alert("Your score has been updated successfully");
            }
        })
        //If the username is not present in already saved scores
        if(newPlayer === true){
            let i;
            for(i=0;i<arrayOfAllScores.length;i++){
                if(arrayOfAllScores[i].playerscore<playerscoreJSON.playerscore){
                    arrayOfAllScores.splice(i,0,playerscoreJSON);
                    break;
                }
            }
            if(i === arrayOfAllScores.length)
                arrayOfAllScores.push(playerscoreJSON);
            localStorage.setItem('ScoresOfQuizLocalStorage',JSON.stringify(arrayOfAllScores));
            alert("Your Your score has been saved sucessfully")
        }
        else{
            //to sort array of scores in case of the user score is updated
            arrayOfAllScores.sort((a,b) => {
                return b.playerscore-a.playerscore;
            })
            localStorage.setItem('ScoresOfQuizLocalStorage',JSON.stringify(arrayOfAllScores));
        }
    }
    div3.parentNode.removeChild(div3);

}

var div4 = document.createElement('div');
div4.setAttribute('class','text-center m-2');
div4.setAttribute('id','div4');

var playagnbtn = document.createElement('a');
playagnbtn.setAttribute('id','playAgain');
playagnbtn.setAttribute('href','./game.html')
playagnbtn.setAttribute('class','btn btn-light');
playagnbtn.innerText = "Play again";
div4.appendChild(playagnbtn);

var div5 = document.createElement('div');
div5.setAttribute('class','text-center m-2');
div5.setAttribute('id','div5');

var gohomebtn = document.createElement('a');
gohomebtn.setAttribute('id','goHome');
gohomebtn.setAttribute('href','./index.html')
gohomebtn.setAttribute('class','btn btn-light');
gohomebtn.innerText = "Go home";
div5.appendChild(gohomebtn);


mainDiv.append(div1, div2, div3, div4, div5);
mainCont.appendChild(mainDiv);
document.body.appendChild(mainCont);