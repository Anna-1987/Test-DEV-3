const inputEl = document.querySelector('#textinput');
const outputEl = document.querySelector('#textoutput');
 console.log(outputEl);
const buttonEl = document.querySelector('button')

// inputEl.addEventListener('input', onInputChange );
buttonEl.addEventListener('click', onInputChange )

// outputEl.addEventListener('mousemove', function (event) {
//    // добавляем обработчик события "mousemove"
//    const x = event.clientX; // получаем координату X мыши
//    const y = event.clientY; // получаем координату Y мыши
 
//    console.log(`Координаты мыши: x=${x}, y=${y}`); // выводим координаты мыши в консоль
//  });


function onInputChange(){
   arrayOfChar();
}

function arrayOfChar(){
 let char = inputEl.value;
 let charArray = Array.from(char);
 console.log(charArray);

let subArrayCount = charArray.length;
let result = charArray.reduce((acc, item, index)=> {
  if (acc[index%subArrayCount] == undefined) acc.push([]);
  acc[index%subArrayCount].push(item);
  return acc;
} , [])


console.log(result);

const wordMarkup = result.map((char) => {
   return `<div class="lineword">${char}</div>`;
}).join('');

 
 const outputEl = document.querySelector('#textoutput');
 outputEl.insertAdjacentHTML("beforeend", wordMarkup);
}

outputEl.addEventListener('click', onClick);

function onClick(event){
   if(event.target.nodeName !== 'DIV'){
      return;
   };
   event.target.classList.toggle('activChar');
   // event.target.classList.toggle('block1');
    console.log(event);



}

function moveChar() {
   outputEl.addEventListener('mousedown', event => {
      document.addEventListener('mousemove', listener);
  });
  
  outputEl.addEventListener('mouseup', event => {
      document.removeEventListener('mousemove', listener);
  });

}

const listener = function(e) {
 const x = e.pageX  + e.clientX;
 console.log(x);
 e.pageY  + e.clientX;
 };

// const listener = function(event) {
   // function getCoords(event) {
   //    let box = event.getBoundingClientRect();
    
   //    return {
   //      top: box.top + window.pageYOffset,
   //      right: box.right + window.pageXOffset,
   //      bottom: box.bottom + window.pageYOffset,
   //      left: box.left + window.pageXOffset
   //    };
   //  }

   //  let mouseOffset

   //  outputEl.onmousedown = function(event) {
   
   //      const pos = getBoundingClientRect(event.target);
   //      console.log(pos);

   //      mouseOffset = { 
   //          x: e.pageX - pos.x, 
   //          y: e.pageY - pos.y 
   //      }
      
   //  }
    
   //  document.onmousemove = function(e) {
       
   //      outputEl.style.left = e.pageX - mouseOffset + 'px'
   //      outputEl.style.top = e.pageY - mouseOffset  + 'px'
      
   //  }
    
      

   // let shiftX = event.pageX - getCoords(event.target.textContent).left;
   // let shiftY = event.pageY - getCoords(event.target.textContent).top;
 
   // ball.style.zIndex = 1000; // над другими элементами
 
   
   // outputEl.style.left = e.pageX - shiftX + 'px';
   // outputEl.style.top = e.pageY - shiftY + 'px';
   // }

//    document.onmousemove = function(e) {
//      moveAt(e);
//    };
 
//    ball.onmouseup = function() {
//      document.onmousemove = null;
//      ball.onmouseup = null;
//    };
 
//  }
 
//  ball.ondragstart = function() {
//    return false;
//  };
 

// outputEl.addEventListener('mousedown', e => {
//     document.addEventListener('mousemove', listener);
// });

// outputEl.addEventListener('mouseup', e => {
//     document.removeEventListener('mousemove', listener);
// });



