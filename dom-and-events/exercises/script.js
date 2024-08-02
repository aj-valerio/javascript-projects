function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.
    button.addEventListener("click", event => {
        paragraph.innerHTML = "Houston, we have liftoff!";
    });

    missionAbort.addEventListener("mouseover", function() {
        missionAbort.style.backgroundColor = 'red';
    });
    missionAbort.addEventListener("mouseout", function(){
        missionAbort.style.backgroundColor = "";
    });
    missionAbort.addEventListener("click", function(){
        let abortConfirm = window.confirm("Are you sure you want to abort the mission?");
        if (abortConfirm = true){
            paragraph.innerHTML = "Mission aborted! Space shuttle returning home"
        }
    })
}

window.addEventListener("load", init);
