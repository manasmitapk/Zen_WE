setTimeout (function(){
    document.getElementById("show").innerText="10..";
        setTimeout(function(){
            document.getElementById("show").innerText="9..";
                setTimeout(function(){
                    document.getElementById("show").innerText="8..";
                        setTimeout(function(){
                            document.getElementById("show").innerText="7..";
                                setTimeout(function(){
                                    document.getElementById("show").innerText="6..";
                                        setTimeout(function(){
                                            document.getElementById("show").innerText="5..";
                                                setTimeout(function(){
                                                    document.getElementById("show").innerText="4..";
                                                        setTimeout(function(){
                                                            document.getElementById("show").innerText="3..";
                                                                setTimeout(function(){
                                                                    document.getElementById("show").innerText="2..";
                                                                        setTimeout(function(){
                                                                            document.getElementById("show").innerText="1..";
                                                                                setTimeout(function(){
                                                                                    document.getElementById("show").className = "showhide";
                                                                                    document.getElementById("show").innerText="HAPPY DIWALI";
                                                                                    document.getElementById("show").style.display = "block";
                                                                                    document.getElementById("show").style.textAlign = "center";
                                                                                    document.getElementById("img_01").style.display = "block";
                                                                                },1000);
                                                                        },1000);
                                                                },1000);
                                                        },1000);
                                                },1000);
                                        },1000);
                                },1000)
                        },1000)
                },1000);
        },1000);
},1000);