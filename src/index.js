
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

const ToDoList = (title,descrip,dueDate,priority,div)=>{
    const proto = {
        add(){
            list.push(this);
        },
        remove(){
            list = list.filter( e => e !== this);
        },
    }
    return Object.assign(Object.create(proto),{title,descrip,dueDate,priority,div});
}

function createListItem(title,descrip,dueDate,priority){
    const div = document.createElement("div");
    div.classList.add("item");

    const item = ToDoList(title,descrip,dueDate,priority,div);
    
    const head = document.createElement("h2");
    head.classList.add("title");
    head.textContent = item.title;
    div.appendChild(head);

    const btn = document.createElement("button");
    btn.setAttribute("type","button");
    btn.textContent = "X";
    div.appendChild(btn);

    const date = document.createElement("div");
    date.classList.add("date");
    date.textContent = item.dueDate;
    div.appendChild(date)

    const des = document.createElement("div");
    des.classList.add("des");
    des.textContent = item.descrip;
    div.appendChild(des);


    btn.addEventListener("click",(e)=>{
        const content = document.querySelector(".content");
        item.remove();
        content.removeChild(div);
    })

    return item;
}
