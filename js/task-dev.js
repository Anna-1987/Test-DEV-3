const inputEl = document.querySelector('#textinput');
const outputEl = document.querySelector('#textoutput');
const buttonEl = document.querySelector('button');

buttonEl.addEventListener('click', onInputChange )

let selectedLetters = [];

function onInputChange(){

let char = inputEl.value;
outputEl.innerHTML = "";
 for (let i = 0; i < char.length; i++) {
    const letter = char[i];
    const span = document.createElement('span');
    span.textContent = letter;
    console.log (letter);
   //  span.addEventListener('click', onClick);
    span.addEventListener('mousedown', (event) => handleMouseDown(event, i));
     outputEl.appendChild(span);
}

function handleMouseDown(event, index) {
   const letter = event.target;

   if (event) {
       toggleSelection(letter);
   } else {
       clearSelection();
       selectLetter(letter);
   }

   document.addEventListener('mousemove', (event) => handleMouseMove(event, index));
   document.addEventListener('mouseup', () => handleMouseUp());
}

function handleMouseMove(event, index) {
   const selectedLettersCopy = [...selectedLetters];

   selectedLettersCopy.forEach((letter, i) => {
       const rect = letter.getBoundingClientRect();
       const x = event.clientX + window.scrollX - rect.width / 2;
       const y = event.clientY + window.scrollY - rect.height / 2;

       letter.style.position = 'absolute';
       letter.style.left = `${x}px`;
       letter.style.top = `${y}px`;

       if (i === selectedLettersCopy.length - 1) {
           letter.dataset.lastIndex = index;
       }
   });
}

function handleMouseUp() {
   selectedLetters.forEach((letter, i) => {
       const lastIndex = letter.dataset.lastIndex;
       if (lastIndex !== undefined) {
           const targetLetter = document.getElementById(`textoutput`).childNodes[lastIndex];
           targetLetter.parentNode.insertBefore(letter, targetLetter);
           letter.style.position = 'static';
           letter.removeAttribute('data-last-index');
       }
   });

   document.removeEventListener('mousemove', handleMouseMove);
   document.removeEventListener('mouseup', handleMouseUp);
}

function selectLetter(letter) {
   letter.classList.add('activ');
   selectedLetters.push(letter);
}

function toggleSelection(letter) {
   if (letter.classList.contains('activ')) {
       letter.classList.remove('activ');
       selectedLetters = selectedLetters.filter(selectedLetter => selectedLetter !== letter);
   } else {
       selectLetter(letter);
   }
}

function clearSelection() {
   selectedLetters.forEach(letter => letter.classList.remove('activ'));
   selectedLetters = [];
}
}



