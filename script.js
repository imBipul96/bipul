let inputBox = document.getElementById("inputBox");
let listContainer = document.getElementById("listContainer");
let inputRow = document.querySelector(".input");
let alert = document.querySelector(".alert");

const switchTheme = () => {
    const rootElem = document.documentElement;
    let dataTheme = rootElem.getAttribute('data-theme');

    let newTheme = (dataTheme == 'light') ? 'dark' : 'light';
    rootElem.setAttribute('data-theme', newTheme);

}
document.querySelector('#theme-selector').addEventListener('click', switchTheme);


function addTask(){
    let task = inputBox.value;

    if(task == ''){
        alert.style.display = 'block';
    } else {
        alert.style.display = 'none';
        let li = document.createElement("li");
        li.innerHTML = task;
        listContainer.insertBefore(li, listContainer.firstChild);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData(); 
}

inputBox.addEventListener("keypress", function(e) {
    if(e.key === "Enter"){
        e.preventDefault();
        addTask();
        saveData();
    }
})

listContainer.addEventListener("click", function(event){
    if(event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
        saveData();
    }
    else if(event.target.tagName === "SPAN"){
        event.target.parentElement.remove();
        saveData();
    };

});

let saveData = () => {
    localStorage.setItem("data", listContainer.innerHTML);
} 
let showTask = () => {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();

/* let listItems = Array.from(listContainer.getElementsByTagName('li'));

listItems.reverse();

listItems.forEach(item => {
    listContainer.appendChile(item);
})
 */