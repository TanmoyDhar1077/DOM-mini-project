const numCount = document.getElementById('counter');
const plusBtn = document.getElementById('increment');
const mainusBtn = document.getElementById('decrement');

let count = 0;

const updateCount = (value) => {
    count = count + value;
    numCount.textContent = count;


    // for plus button
    if (count >= 15) {
        plusBtn.setAttribute('disabled', true);
    }else {
        plusBtn.removeAttribute('disabled', false);
    }


    // for minus button
    if (count <= 0) {
        mainusBtn.setAttribute('disabled', true);
    }else {
        mainusBtn.removeAttribute('disabled', false);
    }

};


plusBtn.addEventListener('click', () => {
     updateCount(1);  
});

mainusBtn.addEventListener('click', () => {
    updateCount(-1);
});