function getRandomId() {
    let rand = Math.random().toString(36).substring(2);
    rand = `a${rand}`;
    return rand;
}

let arr=[];
const FILTER_MODES = {
  ALL: 1,
  DONE: 2,
  NOT_DONE: 3
};

let filterMode = FILTER_MODES.ALL;


function newElement(id_,text_,chekced_,index_)
{
        const checkbox = document.createElement('input');
        const label = document.createElement('label');
        let divtext = document.getElementById("textFrom");
        label.id = id_;
        label.classList.add("wordlabel");
        const span = document.createElement('span');
        span.innerText =text_;
        const divChild = document.createElement('div');
        const buttonDelete = document.createElement('a');
        let buttonImage = document.createElement('img');

        buttonImage.src = 'trash.png';
        buttonDelete.classList.add("styleButtonDelete");
        buttonImage.style.height = "32px";
        buttonImage.style.width = "32px";
        buttonDelete.appendChild(buttonImage);
        buttonDelete.id = getRandomId();
        divChild.id = id_;
        divChild.style.fontSize = "30px";
        checkbox.type = 'checkbox';
        checkbox.value = text_;
        checkbox.id = getRandomId();

        divChild.classList.add("containerItem");
        label.appendChild(checkbox);
        label.appendChild(span);
        divChild.clientHeight = 300;
        divChild.clientWidth = 300;
        divChild.appendChild(label);
        divChild.appendChild(buttonDelete);
        divChild.classList.add("rectangl");
        divtext.appendChild(divChild);
        checkbox.classList.add("checkboxClass");
        checkbox.onchecked = chekced_;
        if(chekced_===true) {
            divChild.classList.toggle("crossOut");
            checkbox.checked = true;
        }
        document.getElementById("textforwrite").value = "";
        console.log(checkbox.id+"wwwwwwwwww "+divChild );
        checkbox.onclick = () => clickOncheck(checkbox.id, divChild);//бработчик чекбокса
        buttonDelete.onclick = () => deleteTask(divChild.id, checkbox); //удаление кнопка
}


function createTasks() {
    event.preventDefault();
    const checkbox = document.createElement('input');
    console.log(checkbox);
    const text = document.getElementById("textforwrite").value;
    let divtext = document.getElementById("textFrom");
    //listAll.push(text);
    const label = document.createElement('label');
    label.id = getRandomId();
    label.classList.add("wordlabel");
    const span = document.createElement('span');
    span.innerText = text;
    const divChild = document.createElement('div');
    const buttonDelete = document.createElement('a');
    let buttonImage = document.createElement('img');
    buttonImage.src = 'trash.png';
    buttonDelete.classList.add("styleButtonDelete");
    buttonImage.style.height = "32px";
    buttonImage.style.width = "32px";
    buttonDelete.appendChild(buttonImage);
    buttonDelete.id = getRandomId();
    divChild.id = getRandomId();
    divChild.style.fontSize = "30px";
    checkbox.type = 'checkbox';
    checkbox.value = text;
    checkbox.id = getRandomId();

    arr.push({id:divChild.id,text:text,checkedtext:false});

    divChild.classList.add("containerItem");
    label.appendChild(checkbox);
    label.appendChild(span);
    divChild.clientHeight = 300;
    divChild.clientWidth = 300;
    divChild.appendChild(label);
    divChild.appendChild(buttonDelete);
    divChild.classList.add("rectangl");
    divtext.appendChild(divChild);
    checkbox.classList.add("checkboxClass");
    checkbox.onchecked = 'handleChange(this)';
    document.getElementById("textforwrite").value = "";
    checkbox.onclick = () => clickOncheck(checkbox.id, divChild);//бработчик чекбокса
    buttonDelete.onclick = () => deleteTask(divChild.id, checkbox); //удаление кнопка
}


function deleteTask(idDiv, checkClick) {
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i].id===idDiv)
        {
            arr.splice(i, 1);
        }
    }
    let div = document.getElementById(idDiv);
    div.remove();
}

function clickOncheck(checbox, dv) {

    for(let i=0;i<arr.length;i++)
    {
        //console.log(arr[i].id + "}}}}}}"+checbox+" ;;;;;;"+ arr[i].checkedtext);
        if((arr[i].id===dv.id))
        {

            arr[i].checkedtext=!arr[i].checkedtext;
            break;
        }

    }

    render();
}

function removeElement() {
    let element = document.getElementsByClassName("containerItem");
    while (element.length) {
        element[0].parentNode.removeChild(element[0]);
    }
}


function render()
{
    let filtered = [...arr];
    if (filterMode === FILTER_MODES.DONE) {
        filtered = arr.filter(item => item.checkedtext);
    } else if (filterMode === FILTER_MODES.NOT_DONE) {
        filtered = arr.filter(item => !item.checkedtext);
    }
    removeElement();
    for(let i=0;i<filtered.length;i++)
    {
        newElement(filtered[i].id,filtered[i].text,filtered[i].checkedtext,i);
    }

}

function ClickOnButtonAll()
{
    filterMode = FILTER_MODES.ALL;
    render();
    document.getElementById('buttonAllId').style.backgroundColor='#7134FF';
    document.getElementById('buttonOfMadeId').style.backgroundColor='rgba(	30 144 255)';
    document.getElementById('buttonNotOfMadeId').style.backgroundColor= 'rgba(	30 144 255)';

}


function ClickOnButtonNotOfMade()
{
    filterMode = FILTER_MODES.NOT_DONE;
    render();
    document.getElementById('buttonAllId').style.backgroundColor='rgba(	30 144 255)';
    document.getElementById('buttonOfMadeId').style.backgroundColor='rgba(	30 144 255)';
    document.getElementById('buttonNotOfMadeId').style.backgroundColor= '#7134FF';
}


function ClickOnButtonOfMade() {
    filterMode = FILTER_MODES.DONE;
    render();
    document.getElementById('buttonAllId').style.backgroundColor='rgba(	30 144 255)';
    document.getElementById('buttonOfMadeId').style.backgroundColor='#7134FF';
    document.getElementById('buttonNotOfMadeId').style.backgroundColor= 'rgba(	30 144 255)';
}











