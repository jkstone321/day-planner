//add in an on load function so that it puts all variables stored in local storage into their respective places
$(document).ready(function() {
    if(localStorage.getItem("text9") !== null){
        $("#textInput9").text(JSON.parse(localStorage.getItem("text9")));
    }
    if(localStorage.getItem("text10") !== null){
        $("#textInput10").text(JSON.parse(localStorage.getItem("text10")));
    }
    if(localStorage.getItem("text11") !== null){
        $("#textInput11").text(JSON.parse(localStorage.getItem("text11")));
    }
    if(localStorage.getItem("text12") !== null){
        $("#textInput12").text(JSON.parse(localStorage.getItem("text12")));
    }
    if(localStorage.getItem("text1") !== null){
        $("#textInput1").text(JSON.parse(localStorage.getItem("text1")));
    }
    if(localStorage.getItem("text2") !== null){
        $("#textInput2").text(JSON.parse(localStorage.getItem("text2")));
    }
    if(localStorage.getItem("text3") !== null){
        $("#textInput3").text(JSON.parse(localStorage.getItem("text3")));
    }
    if(localStorage.getItem("text4") !== null){
        $("#textInput4").text(JSON.parse(localStorage.getItem("text4")));
    }
    if(localStorage.getItem("text5") !== null){
        $("#textInput5").text(JSON.parse(localStorage.getItem("text5")));
    }
});


//first i need to set current time and date on the header jumbo tron
//do i want it updated every second? probably
$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
var timerInterval = setInterval(function() {
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
},1000);

//next i need to keep track of the current hour in a variable
//so that i can then change the background colors of the text areas
//when the hour has passed, the background should be white
//on the current hour the hour should be red
//on future hours the background is green

//its called fake hour cause i used it for testing and its too much work to go and change everything
var fakeHour = moment().format('HH');

//this block sets the background color based on current time
//red = current hour, green = future hour, grey = past hour
if(fakeHour == 9) {
    $("#textInput9").css("background-color", "red");
}else if(fakeHour > 9) {
    $("#textInput9").css("background-color", "grey");
}else if(fakeHour < 9) {
    $("#textInput9").css("background-color", "green");
}
if(fakeHour == 10) {
    $("#textInput10").css("background-color", "red");
}else if(fakeHour > 10) {
    $("#textInput10").css("background-color", "grey");
}else if(fakeHour < 10) {
    $("#textInput10").css("background-color", "green");
}
if(fakeHour == 11) {
    $("#textInput11").css("background-color", "red");
}else if(fakeHour > 11) {
    $("#textInput11").css("background-color", "grey");
}else if(fakeHour < 11) {
    $("#textInput11").css("background-color", "green");
}
if(fakeHour == 12) {
    $("#textInput12").css("background-color", "red");
}else if(fakeHour > 12) {
    $("#textInput12").css("background-color", "grey");
}else if(fakeHour < 12) {
    $("#textInput12").css("background-color", "green");
}
if(fakeHour == 13) {
    $("#textInput1").css("background-color", "red");
}else if(fakeHour > 13) {
    $("#textInput1").css("background-color", "grey");
}else if(fakeHour < 13) {
    $("#textInput1").css("background-color", "green");
}
if(fakeHour == 14) {
    $("#textInput2").css("background-color", "red");
}else if(fakeHour > 14) {
    $("#textInput2").css("background-color", "grey");
}else if(fakeHour < 14) {
    $("#textInput2").css("background-color", "green");
}
if(fakeHour == 15) {
    $("#textInput3").css("background-color", "red");
}else if(fakeHour > 15) {
    $("#textInput3").css("background-color", "grey");
}else if(fakeHour < 15) {
    $("#textInput3").css("background-color", "green");
}
if(fakeHour == 16) {
    $("#textInput4").css("background-color", "red");
}else if(fakeHour > 16) {
    $("#textInput4").css("background-color", "grey");
}else if(fakeHour < 16) {
    $("#textInput4").css("background-color", "green");
}
if(fakeHour == 17) {
    $("#textInput5").css("background-color", "red");
}else if(fakeHour > 17) {
    $("#textInput5").css("background-color", "grey");
}else if(fakeHour < 17) {
    $("#textInput5").css("background-color", "green");
}

//if there is currently data in the local storage i need to display that in the
//correct time slot and with the correct information


//finally i need to code the save buttons
//i can probably use multiple variables 9-5 and save each string to them
//i think that would be the easiest option
$("#save9").click(function(event) {
    event.preventDefault();
    localStorage.setItem("text9", JSON.stringify($("#textInput9").val()));
})
$("#save10").click(function(event) {
    event.preventDefault();
    localStorage.setItem("text10", JSON.stringify($("#textInput10").val()));
})
$("#save11").click(function(event) {
    event.preventDefault();
    localStorage.setItem("text11", JSON.stringify($("#textInput11").val()));
})
$("#save12").click(function(event) {
    event.preventDefault();
    localStorage.setItem("text12", JSON.stringify($("#textInput12").val()));
})
$("#save1").click(function(event) {
    event.preventDefault();
    localStorage.setItem("text1", JSON.stringify($("#textInput1").val()));
})
$("#save2").click(function(event) {
    event.preventDefault();
    localStorage.setItem("text2", JSON.stringify($("#textInput2").val()));
})
$("#save3").click(function(event) {
    event.preventDefault();
    localStorage.setItem("text3", JSON.stringify($("#textInput3").val()));
})
$("#save4").click(function(event) {
    event.preventDefault();
    localStorage.setItem("text4", JSON.stringify($("#textInput4").val()));
})
$("#save5").click(function(event) {
    event.preventDefault();
    localStorage.setItem("text5", JSON.stringify($("#textInput5").val()));
})