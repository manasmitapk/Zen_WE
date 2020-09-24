var mainCont = document.createElement('div');
mainCont.setAttribute('class','container');
mainCont.setAttribute('id', 'mainCont');

var mainDiv = document.createElement('div');
mainDiv.setAttribute('class','text-center p-5 m-5');
mainDiv.setAttribute('id','mainDiv');

var div1 = document.createElement('div');
div1.setAttribute('class','text-center m-2 text-primary');
div1.setAttribute('id','div1');
div1.innerHTML = "<h1>High Scores</h1>";

var div2 = document.createElement('div');
div2.setAttribute('class','text-center m-2');
div2.setAttribute('id','div2');


if(localStorage.getItem('ScoresOfQuizLocalStorage')){
    var arrayOfAllScores = JSON.parse(localStorage.getItem('ScoresOfQuizLocalStorage'));

    arrayOfAllScores.forEach((element) => {
        var divscore = document.createElement('div');
        divscore.setAttribute('class','text-center m-2');
        divscore.innerHTML = "<h2>" + element.playername + "-" + element.playerscore + "</h2>"
        div2.appendChild(divscore);
    });
}
else{
    div2.innerHTML = "<h2>No high scores yet</h2>"
}



var div3 = document.createElement('div');
div3.setAttribute('class','text-center m-2');
div3.setAttribute('id','div3');

var goHomeBtn = document.createElement('a');
goHomeBtn.setAttribute('id','goHome');
goHomeBtn.setAttribute('href','./index.html')
goHomeBtn.setAttribute('class','btn btn-light');
goHomeBtn.innerText = "Go Home";
div3.appendChild(goHomeBtn);

mainDiv.append(div1,div2,div3);
mainCont.appendChild(mainDiv);

document.body.appendChild(mainCont);