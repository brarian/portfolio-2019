
function drop() {
  document.getElementById("drop_id").classList.toggle("show");
}

function goto(element){
  console.log(element)
  document.querySelector(element).scrollIntoView({ 
    behavior: 'smooth' 
  });
}
