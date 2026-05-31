const birthday = new Date("November 14, 2026 00:00:00").getTime();

const timer = setInterval(() => {

    const now = new Date().getTime();
    const distance = birthday - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if(distance < 0){
        clearInterval(timer);

        document.querySelector(".countdown").style.display = "none";

        document.getElementById("message").innerHTML =
        "🎉 Happy Birthday Fouizya ❤️<br><br>May Allah fill your life with happiness, success, good health and countless beautiful moments. Stay blessed and keep smiling always! 🌹✨";
    }

}, 1000);
