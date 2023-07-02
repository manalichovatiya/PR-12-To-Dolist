// Initialize an array to store all tasks
const all_Task = [];
// Function to add a new task
function task() {
    let task = document.getElementById('blank').value;
    if (task.length == 0 || task == "") {
        alert("Please enter a task!");
    } else {
        all_Task.push(task);// Add the task to the array
        show_();// Update the task list
        document.getElementById('blank').value = "";// Clear the input field
    }
}
// Function to update the task list
function show_() {
    let ul_li = "";
    all_Task.forEach(function(value, index) {
        ul_li += `
            <div class="task">
                <ul class="ul">
                    <li id="taskname">${value}</li>
                </ul>
                <button class="delete" onclick="confirmDelete(${index})" id="deleteId${index}"><i class="far fa-trash-alt"></i></button>
                <button class="undo" onclick="undoTask(${index})" id="undoId${index}" style="display:none">Undo</button>
            </div>
            <br>
        `;
    });
    document.getElementById('tasks').innerHTML = ul_li;
}
// Function to confirm task deletion
function confirmDelete(del_index) {
    all_Task.map((val , index ,array)=>{
        if(index == del_index){
            document.getElementById(`deleteId${index}`).style.display = "none";// Hide the delete button
            document.getElementById(`undoId${index}`).style.display = "block";// Show the undo button
        }
    })
    set_Time = setTimeout(deleteTask,2000,del_index);// Set a timeout to delete the task after 2 seconds
    // console.log(set_Time);
}
// Function to delete a task
function deleteTask(del_index) {
    all_Task.splice(del_index, 1);// Remove the task from the array
    show_();// Update the task list
} 
// Function to undo task deletion
function undoTask(del_index) {
    all_Task.map((val,index,array)=>{
        if(index == del_index){
            document.getElementById(`deleteId${index}`).style.display = "block"; // Show the delete button
            document.getElementById(`undoId${index}`).style.display = "none"; // Hide the undo button
        }
    })
    clearTimeout(set_Time);// Clear the timeout set for task deletion
}