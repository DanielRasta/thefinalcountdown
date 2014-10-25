$( document ).ready(function() {
    console.log( "ready!" );
   
     DoIt();
});


function DoIt() {
     var bckground=getRandomColor();
    $("#full").css("background-color",bckground);
    $("body").css("background-color",bckground);
var text = getRandomColor();
    $("#number").css("color",text);
    $("#txt").css("color",text);
    $("#number1").css("color",text);
    $("#txt1").css("color",text);
    $("#number2").css("color",text);
    $("#txt2").css("color",text);
     $("#number").html(numberCountdown(new Date('01/29/2015')));
     $("#number1").html(numberCountdown(new Date('12/01/2014')));
     $("#number2").html(numberCountdown(new Date('11/12/2014')));
       setTimeout(DoIt, 2000);
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function numberCountdown(end) {
   // var end = ;

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
     var _day = _hour * 24;
    var timer;
    
        var now = new Date();
        var distance = end - now;

        var days = Math.floor(distance / _day);
    
    return days;


}