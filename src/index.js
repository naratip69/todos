
function pageLoad(){
    const body = document.querySelector("body");

    const div = document.createElement("div");
    div.classList.add("content");

    const header = document.createElement("h1");
    header.classList.add("header");
    header.textContent = "What to do..";

    div.appendChild(header);
    body.append(div);
}

let list = [];

const ToDoList = (title,descrip,dueDate,priority)=>{
    const proto = {
        add(){
            list.push(this);
        },
        remove(){
            list = list.filter( e => e !== this);
        },
    }
    return Object.assign(Object.create(proto),{title,descrip,dueDate,priority});
}
