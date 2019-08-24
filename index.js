var DrumButtonNum = document.querySelectorAll(".drum").length;
for (i = 0; i <= DrumButtonNum; i++)
    document.querySelectorAll('.drum')[i].addEventListener("click", function() {
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
    });