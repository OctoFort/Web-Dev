"use strict"


function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    if (taskText === "") return;


    const span = document.createElement("span");
    span.classList.add("list-span")
    span.textContent = taskText;


    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onchange = function() {
        span.classList.toggle("completed", checkbox.checked);
    };


    const deleteBtn = document.createElement("button"); 
    const deleteIcon = document.createElement("img"); 
    
    deleteIcon.src = "img/trash-solid.svg";
    deleteIcon.alt = "Delete";        
    deleteIcon.classList.add("trash");
    
    deleteBtn.appendChild(deleteIcon);
    
    deleteBtn.onclick = function() {
        li.remove();
    };


    li.append(checkbox, span, deleteBtn);
    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}