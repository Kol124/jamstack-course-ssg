const jams = [
    "This is Gunna",
    "No, my name is Jeffrey",
    "I'm on the rvn",
    "I love when it's hot"
];

let myJams = jams[Math.floor(Math.random() * Math.floor(jams.length))];

document.querySelector('.jams').append(myJams);