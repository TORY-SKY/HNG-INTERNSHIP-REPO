setInterval(function() {
    const now = new Date();
    const year = now.getUTCFullYear();
    const hour = now.getUTCHours() % 12;
    // make sure its displaying 12hrs format
    const hoursFormated = hour === 0 ? 12: hour;
    const minute = now.getUTCMinutes().toString().padStart(2, "0");
    const seconds = now.getUTCSeconds().toString().padStart(2, "0");
    const day = now.getUTCDay();

    // Getting am or pam
    const ampm = now.getUTCHours() >= 12 ? "pm" : "am";
    const days = ["Sunday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeek = days[now.getUTCDay()];

    // const utcTime = `${dayOfWeek}- ${month.}`



    const time = document.getElementById("currentTimeUTC");
    const daydisp = document.getElementById("currentDay");
    time.innerHTML = `${hour}:${minute}:${seconds}${ampm}`;
    daydisp.textContent = dayOfWeek;

  }, 1000);

