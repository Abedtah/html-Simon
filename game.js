let arrayClicks=[];
let press=false;
let auto=true;
let index=0;
let level=0;


function nToC(numb){
    switch(numb){
        case 0:
        arrayClicks.push("green");
        animatePress("green");
        break;

        case 1:
            arrayClicks.push("red");
            animatePress("red");

        break;
        case 2:
            arrayClicks.push("yellow");
            animatePress("yellow");

        break;
        case 3:
            arrayClicks.push("blue");
            animatePress("blue");

        break;
    }

    $(document).ready(function() {
            $('#level-title').text('Level '+(++level)); 
    });
    
}


$(document).keydown(function(event) {
   
    if(auto){ 
        $('body').removeClass('game-over');

    nToC(Rnum());
    auto=false;
    press=true;}

});



function Rnum(){
    return Math.floor(Math.random()*4);

}



$(document).ready(function() {
   

    $(".btn").click(function() {
     //   temp.push($(this).attr("id"))

        if(press&&index<arrayClicks.length){
             let buttonColor = $(this).attr("id");
             if(buttonColor===arrayClicks[index]){

                animatePress(buttonColor);
                if(index===arrayClicks.length-1) {

                    index=-1;
                setTimeout(function() {
                    nToC(Rnum());
                }, 1000);
            }
             

                }else{
                    $(document).ready(function() {
                        
                     $('body').addClass('game-over');
                        press=false;
                        $("#wrong")[0].play(); 
                        level=0;
                        $(document).ready(function() {
                            $('#level-title').text('press any key to restart '); // Change the text content
                            auto=true;
                            index=0;
                            arrayClicks=[];
                    });
                 });
    
                }

                index++;
               

                
                
             }
              




       
    });

   
});


function animatePress(currentColor) {
    $(document).ready(function() {

    $("#" + currentColor + "Sound")[0].play();  });

    let button = $("#" + currentColor);
    button.fadeIn(500, function() {

        button.addClass("pressed");
        setTimeout(function() {
            button.removeClass("pressed");

            button.fadeOut(500, function() {

                button.fadeIn(500);
            });
        }, 100); 
    });
}
