const numeri = [];
const elementi = [];
const container = document.getElementById("container");
for(let i=0; i<5;i++){
    let numero =Math.floor(Math.random() *100) +1;
    const h1 = document.createElement("h1");
    h1.innerHTML=`${numero}`;
    container.appendChild(h1);
    elementi.push(h1);
    numeri.push(numero)
}

setTimeout(begin,3000);
function begin() {
    for(let i=0; i<elementi.length;i++){
        //elementi[i].innerHTML= "";
        elementi[i].remove();
    }
}

setTimeout(appear, 4000)
function appear(){
    for(let i=0; i<5;i++){
       const numero_user=  prompt(`Dimmi il numero ${i+1}`);
        
    }
    
}

function in_array()