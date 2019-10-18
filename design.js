btn.onclick = function makeGrid(x,y){
   y = document.getElementById("inputHeight");  //#rows
   x = document.getElementById("inputWidth");   //#columns
   let myGrid = "";
   let myXgrid ="";
    
//calculate #columns    
    for(let j=0; j<x.value ;j++){
        myXgrid += '<td class="cells"></td>';
             }
    
//calculate #rows and then inject it with the previous resulted cells
   for(let i=0; i<y.value ;i++){
       myGrid += "<tr>"+myXgrid+"</tr>";
             }
    
//display the desired grid
    document.getElementById("pixelCanvas").innerHTML = myGrid;
    cellsColors();
}

//change cell's backgroundColor as desired
function cellsColors(){
const color = document.getElementById("colorPicker");
const cells =document.getElementsByClassName("cells");
for (let z=0; z<cells.length; z++){
       cells[z].addEventListener("click",function(e)
                                 {
       e.target.style.backgroundColor = color.value;
                                 })
    }
}

//For the title 
const letters = document.getElementsByTagName("span");
letters[0].style.color='red';
letters[1].style.color='green';
letters[2].style.color='yellow';
