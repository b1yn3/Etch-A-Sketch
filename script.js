const container = document.querySelector('.container');

container.style.backgroundColor = 'pink';
container.style.height = '600px';
container.style.width = '600px';
container.style.display = 'flex';
container.style.flexDirection = 'column';

const btn = document.querySelector('button');

btn.addEventListener('onclick', () => {
    
})


for(let i =0; i < 16; i++){
    const rowDiv = document.createElement('div');
    rowDiv.classList.add("row")
    rowDiv.style.backgroundColor = 'white';
    rowDiv.style.flex = 1;
    rowDiv.style.display = 'flex';
    for(let j =0; j < 16; j++){
        const colDiv = document.createElement('div');
        colDiv.classList.add("col")
        colDiv.style.flex = 1;
        colDiv.style.backgroundColor = 'white';
        colDiv.style.border = '.5px solid gray';
        colDiv.addEventListener('mouseenter', (event) =>{
            colDiv.style.backgroundColor = 'purple'; 
        })
        rowDiv.appendChild(colDiv);
        
    }
    container.appendChild(rowDiv)
}

