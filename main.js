var no_of_logouts = 0
document.addEventListener("visibilitychange", function () {
    document.title = document.visibilityState;
    console.log(document.title)

    if (document.title == "hidden") {
        no_of_logouts = no_of_logouts + 1;
        if (no_of_logouts < 3)
            alert("Loged Out " + no_of_logouts + " times")
        if (no_of_logouts == 3) {
            window.location.href = "exit.html";
        }
    }

});