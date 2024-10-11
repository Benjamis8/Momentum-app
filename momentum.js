const clock = document.querySelector('.clock');
const main = document.querySelector('.main');
const quote = document.querySelector('#randomQuote');


// clock
// Changing bg img depending on time of the day
function setupClock() {
    const dateObj = new Date();
    let hours = dateObj.getHours();
    let minutes = dateObj.getMinutes();

    if (hours >= 5 && hours < 12) {
        document.body.style.backgroundImage = 'url(bgimgs/morning.jpg)';
        main.textContent = `GoodMorning,   `
    } else if (hours >= 12 && hours < 17) {
        document.body.style.backgroundImage = 'url(bgimgs/afternoon.jpg)';
        main.textContent = `Good Afternoon,  `
    } else if (hours >= 17 && hours < 24) {
        document.body.style.backgroundImage = 'url(bgimgs/night.jpg)';
        main.textContent = `Good Evening,  `
    }
    
    if (hours <= 9) {
        hours = `0${hours}`;
    }
    if (minutes <= 9) {
        minutes = `0${minutes}`;
    }
    
    let time = `${hours}:${minutes}`;
    clock.textContent = time;

}
setupClock();

// quotesList
const quotes = [
    "Be yourself everyone else is already taken",
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe",
    "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind",
    "Be the change that you wish to see in the world."
];

let randomNumber = Math.random() * quotes.length;
let newNumber = Math.floor(randomNumber);
document.getElementById("randomQuote").textContent = quotes[newNumber];

// add quote +
function Addquote(){
    let quoteInput = document.querySelector("#quoteInput");
    let randomQuote = document.querySelector("#randomQuote");
    if (quoteInput.value.trim() === "") {
        alert("Please enter a Quote.");
        return;
    }
    randomQuote.textContent = `${quoteInput.value}`;
    quoteInput.value = ""; 

    } 
document.getElementById("AddQuoteButton").addEventListener("click", Addquote);

// task
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value;
    const taskList = document.getElementById("taskList");
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }
    const listItem = document.createElement("div");
    const label = document.createElement("label");
    label.textContent = taskText;
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onclick = function() {
        label.classList.toggle("completed");
    }

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    taskList.appendChild(listItem);
    taskInput.value = "";
} 
function clearTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
}

document.getElementById("addButton").addEventListener('click', addTask);
document.getElementById("clearButton").addEventListener('click', clearTasks);
// name 
function editName() {
    let name = document.querySelector("#name");
    let main = document.querySelector(".main");
    if (name.value.trim() === "") {
        alert("Please enter a name.");
        return; 
    }
    main.textContent = `Good evening, ${name.value}`;
    name.value = "";
 } 
   
 document.getElementById("editbutton").addEventListener("click", editName);

//  focus +
function focusToday(){
    let focus = document.querySelector("#focus");
    let focusText = document.querySelector(".focusText");
    if (focus.value.trim() === "") {
        alert("Please enter a focus for today.");
        return;
    }
    focusText.textContent = `${focus.value}`;
    focus.value = "";
    focusText.addEventListener('click', () => {
        focusText.classList.toggle('strikethrough');
    });
}

document.getElementById("EnterAdd").addEventListener("click", focusToday);

