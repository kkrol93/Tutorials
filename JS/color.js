// document.body.addEventListener('click', (e)=> {  
//     const x = e.clientX;   
//     const y = e.clientY;    
//   if (x%2 == 0 && y%2 == 0) {
//     document.body.style.backgroundColor = 'red';
//   } else if (x%2 != 0 && y%2 != 0) {

//     document.body.style.backgroundColor = 'blue'; 
//   } else {
//     document.body.style.backgroundColor = 'green';
//   }
//     console.log (`${x}, ${y}`);    
// })
document.body.addEventListener('click', (event) => {
  console.log(event.clientX, event.clientY);
  const color = getColor(event);
  document.body.style.backgroundColor = color;
 }) 
 const getColor = (e) => {
  if (e.clientX % 2 === 0) {
   if (e.clientY % 2 === 0) {
    return "red";
   } else {
    return "green";
   }
  } 
  else {
   if (e.clientY % 2 === 0) {
    return "green";
   } else {
    return "blue"
   } 
  }
 }