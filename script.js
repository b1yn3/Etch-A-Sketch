const container = document.querySelector('.container');

container.style.backgroundColor = 'pink';
container.style.height = '600px';
container.style.width = '600px';
container.style.display = 'flex';
container.style.flexDirection = 'column';

function promptB(){
    
    let newRow = parseInt(prompt("Enter the number of rows: "))
    let newCol = parseInt(prompt("Enter the number of columns: "))
    if(checkIf(newRow, newCol)){
        container.innerHTML = ''
        makeSquare(newRow, newCol);
        
    } else {
        alert("Invalid input! Please enter a number between 1 and 100.");
        return;
    }
}

function checkIf(newRow, newCol){
    if(!isNaN(newRow) && !isNaN(newCol) && newRow > 0 && newRow <= 100 && newCol > 0 && newCol <= 100){
        return true
    } 
    return false
}

function makeSquare(rowNum, colNum){

    for(let i =0; i < rowNum; i++){
        const rowDiv = document.createElement('div');
        rowDiv.classList.add("row")
        rowDiv.style.backgroundColor = 'white';
        rowDiv.style.flex = 1;
        rowDiv.style.display = 'flex';
        for(let j =0; j < colNum; j++){
            const colDiv = document.createElement('div');
            colDiv.classList.add("col")
            colDiv.style.flex = 1;
            colDiv.style.backgroundColor = 'white';
            colDiv.style.border = '.5px solid gray';
            colDiv.addEventListener('mouseenter', (event) =>{
                const randomColor = Math.floor(Math.random()*16777215).toString(16);
                colDiv.style.backgroundColor = "#" + randomColor; 
            })
            rowDiv.appendChild(colDiv);
            
        }
        container.appendChild(rowDiv)
    }
}

makeSquare(16,16);
