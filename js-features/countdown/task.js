function startTimer() {
    let seconds = Number(document.getElementById('timer').textContent);

    const interval = setInterval(() => {
        seconds = seconds - 1;
        document.getElementById('timer').textContent = seconds;

        if (seconds <= 0) {
            clearInterval(interval);
            alert('Вы победили в конкурсе!');
        }
    }, 1000);
}

startTimer();