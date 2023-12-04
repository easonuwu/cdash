function Activate(Category) {
    if (Category == "Track") {
        document.getElementById("Track").style.display = "block";
        document.getElementById("Settings").style.display = "none";
        console.log("Track");
    } else if (Category == "Settings") {
        document.getElementById("Settings").style.display = "block";
        document.getElementById("Track").style.display = "none";
        console.log("Settings");
    } 
}

async function addLog(array1) {
    if (array1[2] == "") {
        array1[2] = "In Progress"
    }
    document.getElementById("logs").innerHTML = "<p><span class='date'>" + array1[1] + "</span>  |  <span class='data'>" + array1[2] + "</span></p>" +  document.getElementById("logs").innerHTML
}

async function Exit() {
    document.getElementById("tracknum").value = ""
    document.getElementById("ErrorOutput").innerText = ""
    document.getElementById("tracking").style.display = "none";
    document.getElementById("input").style.display = "block";
}

async function Update() {
    document.getElementById("ErrorOutput").innerText = "";
    document.getElementById("Update").disabled = true;
    Track()
    document.getElementById("UpdateOutput").innerText = "Progress has been updated, next update in 30 seconds!";
    setInterval(function() {
        document.getElementById("UpdateOutput").innerText = "";
    }, 5000);
    setInterval(function() {
        document.getElementById("Update").disabled = false;
    }, 30000);
}

async function Track() {
    document.getElementById("logs").innerHTML = ""
    const id = document.getElementById("tracknum").value;
    const link = "https://track.api.projects.epiceason.com/data/"
    try {
        const response = await fetch(link + 'EP' + id + '.json');
        const data = await response.json();
        document.getElementById("ErrorOutput").innerText = "Loading..."
        // Making Data
        // Track Progress
        // 1
        if (data["1"] != "") {
            const array1 = data["1"].split("|");
            if (array1[0] == "D") {
                document.getElementById("track-1").classList.add("progress-complete");
                addLog(array1);
            } else if (array1[0] == "C") {
                document.getElementById("track-1").classList.add("progress-error");
                addLog(array1);
            } else {
            document.getElementById("track-1").classList.add("progress-progress");
            addLog(array1);
            }
        }

        // 2
        if (data["2"] != "") {
            const array1 = data["2"].split("|");
            if (array1[0] == "D") {
                document.getElementById("track-2").classList.add("progress-complete");
                addLog(array1);
            } else if (array1[0] == "C") {
                document.getElementById("track-2").classList.add("progress-error");
                addLog(array1);
            } else {
            document.getElementById("track-2").classList.add("progress-progress");
            addLog(array1);
            }
        }

        // 3
        if (data["3"] != "") {
            const array1 = data["3"].split("|");
            if (array1[3] == "D") {
                document.getElementById("track-3").classList.add("progress-complete");
                addLog(array1);
            } else if (array1[3] == "C") {
                document.getElementById("track-3").classList.add("progress-error");
                addLog(array1);
            } else {
            document.getElementById("track-3").classList.add("progress-progress");
            addLog(array1);
            }
        }

        // 4
        if (data["4"] != "") {
            const array1 = data["4"].split("|");
            if (array1[0] == "D") {
                document.getElementById("track-4").classList.add("progress-complete");
                addLog(array1);
            } else if (array1[0] == "C") {
                document.getElementById("track-4").classList.add("progress-error");
                addLog(array1);
            } else {
            document.getElementById("track-4").classList.add("progress-progress");
            addLog(array1);
            }
        }

        // 5
        if (data["5"] != "") {
            const array1 = data["5"].split("|");
            if (array1[0] == "D") {
                document.getElementById("track-5").classList.add("progress-complete");
                addLog(array1);
            } else if (array1[0] == "C") {
                document.getElementById("track-5").classList.add("progress-error");
                addLog(array1);
            } else {
            document.getElementById("track-5").classList.add("progress-progress");
            addLog(array1);
            }
        }

        // 6
        if (data["6"] != "") {
            const array1 = data["6"].split("|");
            if (array1[0] == "D") {
                document.getElementById("track-6").classList.add("progress-complete");
                addLog(array1);
            } else if (array1[0] == "C") {
                document.getElementById("track-6").classList.add("progress-error");
                addLog(array1);
            } else {
            document.getElementById("track-6").classList.add("progress-progress");
            addLog(array1);
            }
        }

        // 7
        if (data["7"] != "") {
            const array1 = data["7"].split("|");
            if (array1[0] == "D") {
                document.getElementById("track-7").classList.add("progress-complete");
                addLog(array1);
            } else if (array1[0] == "C") {
                document.getElementById("track-7").classList.add("progress-error");
                addLog(array1);
            } else {
            document.getElementById("track-7").classList.add("progress-progress");
            addLog(array1);
            }
        }

        document.getElementById("currently-tracking").innerText = "Tracking: " + id;
        document.getElementById("currently-tracking-name").innerText = "Client: " + data["ClientName"];
        document.getElementById("currently-information").innerHTML = "<b>Information</b><br>" + data["Info"];

        // Enable
        document.getElementById("tracking").style.display = "block";
        document.getElementById("input").style.display = "none";
    } catch {
        document.getElementById("ErrorOutput").innerText = "Invalid Tracking ID!"
    }
}
