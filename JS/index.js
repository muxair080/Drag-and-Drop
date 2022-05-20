console.log('Drag and Drop project');

let whitebox = document.getElementsByClassName('whitebox');
let img = document.querySelector('.imagebox');
// console.log(whitebox);
// console.log(img);
 
img.addEventListener('dragstart' , (e)=>{
    console.log('Element Draging is starting');
    e.target.className += ' hold';
    setTimeout(() => {
        e.target.className +=' hide';
    }, 0);
});

img.addEventListener('dragend' , (e)=>{
    e.target.className = 'imagebox';
    console.log('Element Draging is ended');
});

for(key of whitebox) {
    key.addEventListener('dragover' , (e)=>{
        e.preventDefault();
        console.log('Drag over is fired');
    });

    key.addEventListener('dragleave' , (e)=>{
        e.target.className = 'whitebox';
        console.log('Drag leave is fired');
    });
    key.addEventListener('drop' , (e)=>{
        e.target.className = 'whitebox';
        console.log('Drag over is fired');
        
        e.target.append(img);
    });
    key.addEventListener('dragenter' , (e)=>{
        e.target.className += ' dashed';
        console.log('Drag enter is fired');
    });
} 