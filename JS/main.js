const btn = document.querySelector('button');
const li = document.querySelectorAll('li');
let size = 10;

btn.addEventListener('click', ()=> {
  
    li.forEach((liItem) =>{
        if (!liItem.style.display) {
        liItem.style.display = "block";
        }
        liItem.style.fontSize = `${size}px`;
    })
    size++; 
})

// btn.addEventListener('click', ()=> {
//     
// for (let i=0; i < li.length; i++) {
//     if (!li[i].style.display) {
//         li[i].style.display = "block";  
//     }    
//     li[i].style.fontSize = `${size}px`;
//     size++; 
// }
// })