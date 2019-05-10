function drop() {
  document.getElementById("drop_id").classList.toggle("show");
}

function goto(element){
  document.querySelector(element).scrollIntoView({ 
    behavior: 'smooth' 
  });
}