

function handle(){
    // alert("Form SUbmitted")

    const txtTodo = document.getElementById("txtTodo")
    console.log(txtTodo)

    const txtTodoValue = txtTodo.value
    console.log(txtTodoValue)
    createToDOList(txtTodoValue)
    
}
function createToDOList(text){

    const li="<li><label style='width:80%'>"+text+"</label><button class='btn btn-primary'>edit</button>&nbsp<button class='btn btn-danger'>Delete</button></li>"
    const ul=document.getElementById("todoList")
    ul.innerHTML+=li;
}