/**
 *  Counter script
 */

const countText = document.querySelector('.count');
let count = 0;
countText.textContent = count;
const addButton = document.querySelector('#add');
const resetButton = document.querySelector('#reset');
const decreseButton = document.querySelector('#minus');
addButton.addEventListener('click',(e)=>{
    count++;
    countText.textContent = count;
    changeCountColor(count);
})
resetButton.addEventListener('click',(e)=>{
    count = 0;
    countText.textContent = count;
    changeCountColor(count);
})
decreseButton.addEventListener('click',(e)=>{
    count--;
    countText.textContent = count;
    changeCountColor(count);
})

function changeCountColor(count){
    if(count > 0){
        countText.style.color = "#00ff00";
    }else if(count == 0){
        countText.style.color = "#1a1a1a";
    }else{
        countText.style.color = "#ff0000"
    }
}