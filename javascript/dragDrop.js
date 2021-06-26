console.log('Drag and Drop');

const imgBox = document.querySelector('.imgBox');
const whiteBoxes = document.getElementsByClassName('whiteBox');
//Add Event Listner for dragable element box:
imgBox.addEventListener('dragstart', (e) => {
    console.log("drageStart triggered");
    e.target.className += ' hold';
    setTimeout(() => {
        e.target.className = 'hide';
    }, 0);
});
imgBox.addEventListener('dragend', (e) => {
    console.log("DragEnd triggered");
    e.target.className = 'imgBox';
});
for (whiteBox of whiteBoxes) {
    whiteBox.addEventListener('dragover', (e) => {
        console.log('Dragover triggered');
        e.preventDefault();
    });
    whiteBox.addEventListener('dragenter', (e) => {
        console.log('Dragenter triggered');
        e.target.className += ' dashed'

    });
    whiteBox.addEventListener('dragleave', (e) => {
        console.log('Dragleave triggered');
        e.target.className = 'whiteBox';

    });
    whiteBox.addEventListener('drop', (e) => {
        console.log('Drop triggered');
        e.target.append(imgBox);

    });
}