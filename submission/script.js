sum = 0;
fakesum =0;
var b = document.getElementsByClassName('newblock');
var newb = document.getElementsByClassName('block')

function changeColor(d) {
  var status = d.dataset.status;
  switch (status) {
    case "on":
      d.dataset.status = "off";
      d.style.backgroundColor = "white";
      d.dataset.value =1;
      addcount();
      break;
    case "off":
      d.dataset.status = "on";
      d.style.backgroundColor = "Gray";
      d.dataset.value =0;
      reducecount();
      break;
  }
}

function fakechange(d) {
  var status = d.dataset.status;
  switch (status) {
    case "on":
      d.dataset.status = "off";
      d.style.backgroundColor = "white";
      d.dataset.value =1;
      fakeaddcount();
      break;
    case "off":
      d.dataset.status = "on";
      d.style.backgroundColor = "Gray";
      d.dataset.value =0;
      fakereducecount();
      break;
  }
}

function resetthis(){
  var block  = document.getElementsByClassName('block');
  var newblocks = document.getElementsByClassName('newblock');
  sum = 0;
  for(i = 0; i<block.length; i++){
     block[i].style.backgroundColor ="Gray";
   }
   for(i = 0; i<newblocks.length; i++){
      newblocks[i].style.backgroundColor ="Gray";
    }
}


function addcount(){
  sum = sum +1;
  if(sum == b.length && fakesum ==0) {
    alert("congrats");
  }
}

function reducecount(){
  sum = sum -1;
}

function fakeaddcount(){
  fakesum = fakesum +1;
}

function fakereducecount(){
  fakesum = fakesum -1;
  if(sum == b.length && fakesum ==0) {
    alert("congrats");
  }
}

function findsolution(){
  for(i=0; i<b.length;i++){
    b[i].style.backgroundColor ='white';
  }
  for(i=0; i<newb.length;i++){
    newb[i].style.backgroundColor ='Gray';
  }
  sum = b.length;
  fakesum = 0;
  if(sum == b.length && fakesum ==0) {
    alert("congrats");
  }
}

function findthehint(){
  graysum = 0;
  whitesum = 0;
  for(i=0; i<b.length;i++){
    whitesum =whitesum+1;
  }
  for(i=0; i<newb.length;i++){
    graysum= graysum+1;
  }
  alert("There are white squares: "+whitesum+"." +" There are gray squares: "+ graysum+".")
}
