
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

function update(){
    const content = document.querySelector(".content");
    const body = document.querySelector(".content");

    list.sort((a,b)=>b.priority - a.priority);

    const newContent = document.createElement("div");
    newContent.classList.add("content");

    list.forEach(e => {newContent.appendChild(e.div)});

    body.removeChild(content);
    body.appendChild(newContent);
}

function createFrom(){
    const div = document.createElement("div");
    div.classList.add("from");

    const title = document.createElement("div");
    title.classList.add("from-item");
    const label1 = document.createElement("label");
    label1.setAttribute("for","title");
    label1.textContent = "Title:";
    const input1 = document.createElement("input");
    input1.setAttribute("id","title");
    title.appendChild(label1);
    title.appendChild(input1);

    const des = document.createElement("div");
    des.classList.add("from-item");
    const label2 = document.createElement("label");
    label2.setAttribute("for","des");
    label2.textContent = "Description:";
    const input2 = document.createElement("textarea");
    input2.setAttribute("id","des");
    des.appendChild(label2);
    des.appendChild(input2);

    const priority = document.createElement("div");
    priority.classList.add("from-item");
    const label3 = document.createElement("label");
    label3.setAttribute("for","priority");
    label3.textContent = "Priority:";
    const input3 = document.createElement("input");
    input3.setAttribute("id","priority");
    input3.setAttribute("type","number");
    input3.setAttribute("min","0");
    input3.setAttribute("max","10");
    priority.appendChild(label3);
    priority.appendChild(input3);

    const date = document.createElement("div");
    date.classList.add("from-item");
    const label4 = document.createElement("label");
    label4.setAttribute("for","date");
    label4.textContent = "Due Date:";
    const input4 = document.createElement("input");
    input4.setAttribute("id","date");
    input4.setAttribute("type","date");
    date.appendChild(label4);
    date.appendChild(input4);
    
}
