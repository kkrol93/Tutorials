let size = 10;
let orderElement = 1;

const init = () => {
 const btn = document.createElement('button');
 document.body.appendChild(btn);
 btn.textContent = 'Kliknij mnie!';
 btn.style.fontSize = '30px';
 const reset = document.createElement('button');
 document.body.appendChild(reset);
 reset.textContent = 'Resetuj!';
 reset.style.fontSize = '30px';
 const ul = document.createElement('ul');
 document.body.appendChild(ul);
 ul.style.listStyle = "none";
 btn.addEventListener('click', createLiElements);
 reset.addEventListener('click', cleanList);
}

const createLiElements = () => {
    const ul = document.querySelector('ul');
   
    for(let i=0; i < 10; i++) {
        const li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = `Element nr ${orderElement++}`;
        li.style.fontSize = `${size++}px`;
    }
}
const cleanList = () => {
    const ul = document.querySelector('ul').textContent = "";
    size = 10;
    orderElement = 1;
    
}

init()