function Activate(Category) {
    if (Category == "Track") {
        document.getElementById("Track").style.display = "block";
        document.getElementById("Settings").style.display = "none";
        document.getElementById("Order").style.display = "none";
        console.log("Track");
    } else if (Category == "Settings") {
        document.getElementById("Settings").style.display = "block";
        document.getElementById("Track").style.display = "none";
        document.getElementById("Order").style.display = "none";
        console.log("Settings");
    } else if (Category == "Order") {
        document.getElementById("Settings").style.display = "none";
        document.getElementById("Track").style.display = "none";
        document.getElementById("Order").style.display = "block";
        console.log("Order");
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
    document.getElementById("track-1").setAttribute("class", "progress-item");
    document.getElementById("track-2").setAttribute("class", "progress-item");
    document.getElementById("track-3").setAttribute("class", "progress-item");
    document.getElementById("track-4").setAttribute("class", "progress-item");
    document.getElementById("track-5").setAttribute("class", "progress-item");
    document.getElementById("track-6").setAttribute("class", "progress-item");
    document.getElementById("track-7").setAttribute("class", "progress-item");
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
    document.getElementById("ErrorOutput").innerText = "Loading..."
    document.getElementById("logs").innerHTML = ""
    const id = document.getElementById("tracknum").value;
    const link = "https://raw.githubusercontent.com/easonuwu/ep-tracker/main/data/"
    try {
        const response = await fetch(link + 'EP' + id + '.json');
        const data = await response.json();
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
            if (array1[0] == "D") {
                document.getElementById("track-3").classList.add("progress-complete");
                addLog(array1);
            } else if (array1[0] == "C") {
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

        // Down Data's ////////////////////////////////////

        if (data["length"] != "") {
            document.getElementById("data-1").innerText = data["length"];
        } else {
            document.getElementById("data-1").innerText = "Not Provided";
        }

        if (data["effects"] != "") {
            document.getElementById("data-2").innerText = data["effects"];
        } else {
            document.getElementById("data-2").innerText = "Not Provided";
        }

        if (data["subtitles"] != "") {
            document.getElementById("data-3").innerText = data["subtitles"];
        } else {
            document.getElementById("data-3").innerText = "Not Provided";
        }

        if (data["title"] != "") {
            document.getElementById("data-4").innerText = data["title"];
        } else {
            document.getElementById("data-4").innerText = "Not Provided";
        }

        if (data["thumbnails"] != "") {
            document.getElementById("data-5").innerText = data["thumbnails"];
        } else {
            document.getElementById("data-5").innerText = "Not Provided";
        }

        if (data["sound"] != "") {
            document.getElementById("data-6").innerText = data["sound"];
        } else {
            document.getElementById("data-6").innerText = "Not Provided";
        }


        if (data["bgm"] != "") {
            document.getElementById("data-7").innerText = data["bgm"];
        } else {
            document.getElementById("data-7").innerText = "Not Provided";
        }


        if (data["review"] != "") {
            document.getElementById("data-9").innerText = data["review"];
        } else {
            document.getElementById("data-9").innerText = "Not Provided";
        }

        if (data["price"] != "") {
            document.getElementById("data-10").innerText = "RM" + data["price"];
        } else {
            document.getElementById("data-10").innerText = "Not Provided";
        }


        ///////////////////////////////////////////////////

        document.getElementById("currently-tracking").innerHTML = "Order Number: " + id;
        document.getElementById("currently-tracking-name").innerText = "Client Name: " + data["ClientName"];
        document.getElementById("currently-tracking-payment").innerText = "Paid with " + data["Payment"];
        document.getElementById("currently-information").innerHTML = "<b>Additional Information</b><br><br>" + data["other"];
        document.getElementById("delivered-via").innerText = data["Delivery"];
        document.getElementById("expected-delivery").innerText = data["DeliveryDate"];
        document.getElementById("ready-in").innerText = data["ReadyIn"];

        // Enable /////////////////////////////////////////

        document.getElementById("tracking").style.display = "block";
        document.getElementById("input").style.display = "none";
    } catch {
        document.getElementById("ErrorOutput").innerText = "Invalid Tracking ID!"
    }
}