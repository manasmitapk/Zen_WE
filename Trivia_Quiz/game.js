var currques = 1; //variable holding the number of current question
var numofques = 10; //variable holding the number of total questions
var quesns; // variable to hold the questions fetched from the API
sessionStorage.setItem('scoreOfQuiz', 0); //setting initial score of the player to zero
var score = parseInt(sessionStorage.getItem('scoreOfQuiz'));//setting initial score of the player to zero

//Function to fetch the questions from Open API and display the first question
async function getSampleQues(){
    try{
        var data = await fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple');
        
        var quesdata = await data.json();

        quesns = quesdata.results;
        
        qnoDiv.innerText = "Question 1/10"
        scoreDiv.innerText = "Score"

        questioncat.innerText = "Category: " + quesns[0].category;
        scoreNum.innerText = '0'

        var questext = document.createElement("div");
        questext.setAttribute('class','font-weight-bold')
        questext.setAttribute("id","questext");
        questext.innerHTML = quesns[0].question;


        questionArea.append(questext);

        //generating random variable so that the correct answer is not always at the same option
        var random = Math.floor(Math.random()*quesns[0].incorrect_answers.length+1)
        

        for(let i=0, j=0;i<quesns[0].incorrect_answers.length+1;i++){
            var option = document.createElement('div');
            option.setAttribute('class','choice-text btn btn-block text-left');


            var buttonopt = document.createElement('button');
            buttonopt.setAttribute('class','btn btn-primary');
            buttonopt.innerText = String.fromCharCode(65+i);
            buttonopt.style.marginBottom = "5px"
            buttonopt.style.borderRadius = "0px"

            var opttext = document.createElement('span');
            opttext.style.marginLeft = "5px"

            if(i === random){
                opttext.innerHTML = quesns[0].correct_answer;
                option.setAttribute('onClick',"nextQuestion(currques+1,true)");
            }
            else{
                opttext.innerHTML = quesns[0].incorrect_answers[j];
                option.setAttribute('onClick',"nextQuestion(currques+1,false)");
                j++;
            }
            option.append(buttonopt, opttext);
            questionArea.appendChild(option);
        }

    }
    catch(error){
        console.log(error);
    }
    
}

//Function to navigate next question on giving answer to current question
function nextQuestion(qno,isCorrect){
    if(qno<=numofques){
        currques = qno;
        qnoDiv.innerText = "Question "+ qno + "/10"
        questioncat.innerText = "Category: " + quesns[qno-1].category;
        if(isCorrect){
            score += 10
            scoreNum.innerText = score;
        }
        //To remove all the child elements of question area
        while (questionArea.firstChild) {
            questionArea.removeChild(questionArea.firstChild);
        }

        var questext = document.createElement("div");
        questext.setAttribute('class','font-weight-bold')
        questext.setAttribute("id","questext");
        questext.innerHTML = quesns[qno-1].question;
        

        questionArea.append(questext);

        var random = Math.floor(Math.random()*quesns[qno-1].incorrect_answers.length+1);
        

        for(let i=0, j=0;i<quesns[qno-1].incorrect_answers.length+1;i++){
            var option = document.createElement('div');
            option.setAttribute('class','choice-text btn btn-block text-left');

            var buttonopt = document.createElement('button');
            buttonopt.setAttribute('class','btn btn-primary');
            buttonopt.innerText = String.fromCharCode(65+i);
            buttonopt.style.marginBottom = "5px"
            buttonopt.style.borderRadius = "0px"

            var opttext = document.createElement('span');
            opttext.style.marginLeft = "5px"

            if(i === random){
                opttext.innerHTML = quesns[qno-1].correct_answer;
                option.setAttribute('onClick',"nextQuestion(currques+1,true)");
            }
            else{
                opttext.innerHTML = quesns[qno-1].incorrect_answers[j];
                option.setAttribute('onClick',"nextQuestion(currques+1,false)");
                j++;
            }
            option.append(buttonopt, opttext);
            questionArea.appendChild(option);
        }

    }
    else{
        sessionStorage.setItem('scoreOfQuiz', score);
        window.location.href = "./end.html";
    }
}

var mainCont = document.createElement('div');
mainCont.setAttribute('class','container');
mainCont.setAttribute('id', 'mainCont');


var mainDiv = document.createElement('div');
mainDiv.setAttribute('class',' p-5 m-5');
mainDiv.setAttribute('id','mainDiv');

//Div containing current question number
var qnoDiv = document.createElement('div');
qnoDiv.setAttribute('class','float-left text-left font-weight-bold');
qnoDiv.setAttribute('id','progressText')
qnoDiv.style.width = "50%"

//Div containing the string Score
var scoreDiv = document.createElement('div');
scoreDiv.setAttribute('class','float-right text-right font-weight-bold');
scoreDiv.setAttribute('id','score');
scoreDiv.style.width = "50%"

//Div containing the category of the question
var questioncat = document.createElement('div');
questioncat.setAttribute('class','float-left text-left');
questioncat.setAttribute('id','questioncat');
questioncat.style.width = "50%"

//Div containing the actual Score
var scoreNum = document.createElement('div');
scoreNum.setAttribute('class','float-right text-right text-primary');
scoreNum.setAttribute('id','scoreNum');
scoreNum.style.width = "50%"

var questionArea = document.createElement('div');
questionArea.setAttribute('id','questionArea');

mainDiv.append(qnoDiv, scoreDiv, questioncat, scoreNum, questionArea);
mainCont.appendChild(mainDiv);
document.body.appendChild(mainCont);
getSampleQues();