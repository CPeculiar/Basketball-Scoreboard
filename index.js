let count = 0;


function count1() {
    count += 1;
    console.log(count);
    document.getElementById("homeScreen").innerHTML = count;
    updateWinner();
}

function count2() {
    count += 2;
    console.log(count);
    document.getElementById("homeScreen").innerHTML = count;
    updateWinner();
    // document.getElementById("guestScreen").textContent = count;
}

function count3() {
    count += 3;
    console.log(count);
    document.getElementById("homeScreen").innerHTML = count;
    updateWinner();
    // document.getElementById("guestScreen").textContent = count;
}



//FOR GUEST

let countGuest = 0;

function count4() {

    countGuest += 1;
    console.log(countGuest);
    document.getElementById("guestScreen").innerHTML = countGuest;
    updateWinner();
}

function count5() {
    countGuest += 2;
    console.log(countGuest);
    document.getElementById("guestScreen").innerHTML = countGuest;
    updateWinner();
}

function count6() {
    countGuest += 3;
    console.log(countGuest);
    document.getElementById("guestScreen").innerHTML = countGuest;
    updateWinner();
}

let home = document.getElementById("home").innerHTML;
let guest = document.getElementById("guest").innerHTML;


if (homeScreen > guestScreen) {
    document.getElementById("declare").textContent = home;
}
else if (guestScreen > homeScreen) {
    document.getElementById("declare").textContent = guest;
}
else {
    document.getElementById("declare").textContent = "DRAW";
}



function updateWinner() {
    let homeScreen = parseInt(document.getElementById("homeScreen").innerHTML);
    let guestScreen = parseInt(document.getElementById("guestScreen").innerHTML);

    if (homeScreen > guestScreen) {
        document.getElementById("declare").textContent = home;
    } else if (guestScreen > homeScreen) {
        document.getElementById("declare").textContent = guest;
    } else {
        document.getElementById("declare").textContent = "DRAW";
    }
}
