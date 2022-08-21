let counter = document.getElementById('cowCounter');
let btnStart = document.getElementById('btn');
let result = document.getElementById('textResult');

//

btnStart.addEventListener("click", start);
function start(){
  result.innerHTML = 'Out of' + ' ' + counter.value + ' ' + 'animals ' + ' ' + counter.value * 2 + ' ' + 'half beef were obtained.' + ' ' + 'From' + ' ' + counter.value * 2 + ' ' + 'half beef,' + ' ' + counter.value * 2 + ' ' + 'parts of Roast and' + ' ' + counter.value * 2 + ' ' + 'of Brisket were obtained.';
}

