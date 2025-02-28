let countdown;
let timeLeft = 0;

function startTimer() {
    clearInterval(countdown);
    
    let inputTime = document.getElementById('input-time').value;
    if (!inputTime || inputTime <= 0) {
        alert("Input Valid Time!");
        return;
    }
    
    timeLeft = parseInt(inputTime);
    updateTimerDisplay();
    
    countdown = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateTimerDisplay();
        } else {
            clearInterval(countdown);
            document.getElementById('alarm-sound').play();
            alert('Time Out!');
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(countdown);
    timeLeft = 0;
    document.getElementById('timer').innerText = "00:00";
    document.getElementById('input-time').value = "";
}

function updateTimerDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    document.getElementById('timer').innerText = `${minutes}:${seconds}`;
}
