/* TODO: inserite il codice JavaScript necessario a completare il MHW! */
const CHECKED_IMAGE='images/checked.png';
const UNCHECKED_IMAGE='images/unchecked.png';
let i=0; //indice primalista
let j=0; //indice secondalista
let k=0; //indice terzalista


  
function selectedboxONE(event){ //quando clicco una delle prime 9 foto si attiva
  
        const container = event.currentTarget;   //assegno a container il div cliccato
        const image =container.querySelector(".checkbox"); 
        image.src=CHECKED_IMAGE;
        container.style.backgroundColor = "#cfe3ff";
        container.removeEventListener('click', selectedboxONE);
       
         
 if(listONE.length==9 ){

            for(const boxes1 of listONE){
                if(boxes1===container){
                    i=listONE.indexOf(container); //conservo l'indice 
                    }
                }

        console.log(listONE[i].dataset.choiceId);

        listONE.splice(i,1);//cosi' tolgo dalla lista un elemento a partire dalla posizione i
 
        console.log(i);

            for(const boxes1 of listONE){ //ora la lista avra' un elemento in meno
                boxes1.style.opacity=0.6; //aggiungo opacita' agli 8 elementi rimasti
                }


    if(listTWO.length==8 && listTHREE.length==8){ 
            finalresults(); //se le altre 2 liste hanno lunghezza 8 vuol dire che questa sara' l'ultima scelta, dunque non devo permettere di cambiarla
        }

}else if(listONE.length==8){ //avendo tolto dalla lista un elemento ora la sua lunghezza sara' pari a 8, parte questo nel momento in cui cambio la risposta
      
             ricaricalistONE();
                    for(const boxes1 of listONE){
                          boxes1.style.opacity=1;
                          boxes1.style.backgroundColor = "#f4f4f4";
                          const image =listONE[i].querySelector(".checkbox");
                          image.src=UNCHECKED_IMAGE;
                        }

                    const image=container.querySelector(".checkbox");
                    image.src=CHECKED_IMAGE;
                    container.style.backgroundColor="#cfe3ff";
                    container.removeEventListener('click', selectedboxONE);

                    for(const boxes1 of listONE){
                        if(boxes1===container){
                            i=listONE.indexOf(container);
                          }
                     }

                    console.log(listONE[i].dataset.choiceId);
                    listONE.splice(i,1);//cosi' tolgo dalla lista un elemento a partire dalla posizione i

                    console.log(i);
                     
                     for(const boxes1 of listONE){ //ora la lista avra' un elemento in meno
                            boxes1.style.opacity=0.6; 
                    }

    } 

}



function selectedboxTWO(event){
    
       const container=event.currentTarget;
       const image= container.querySelector('.checkbox');
       image.src=CHECKED_IMAGE;
       container.style.backgroundColor = "#cfe3ff";
       container.removeEventListener('click', selectedboxTWO);
       
 if(listTWO.length==9){
     
            for(const boxes1 of listTWO){
                if(boxes1===container){
                     j=listTWO.indexOf(container); //conservo l'indice 
                    }
                }

        listTWO.splice(j,1);//cosi' tolgo dalla lista un elemento a partire dalla posizione i

        console.log(j);

            for(const boxes1 of listTWO){ //ora la lista avra' un elemento in meno
                 boxes1.style.opacity=0.6; //aggiungo opacita' agli 8 elementi rimasti
                }

            if(listONE.length==8 && listTHREE.length==8){
                    finalresults();
                }

}else if(listTWO.length==8){ //avendo tolto dalla lista un elemento ora la sua lunghezza sara' pari a 8
      
            ricaricalistTWO();
                for(const boxes1 of listTWO){
                        boxes1.style.opacity=1;
                        boxes1.style.backgroundColor = "#f4f4f4";
                        const image =listTWO[j].querySelector(".checkbox");
                        image.src=UNCHECKED_IMAGE;
                        }

            const image=container.querySelector(".checkbox");
            image.src=CHECKED_IMAGE;
            container.style.backgroundColor="#cfe3ff";
            container.removeEventListener('click', selectedboxTWO);

                for(const boxes1 of listTWO){
                    if(boxes1===container){
                        j=listTWO.indexOf(container);
                        }
                    }


            listTWO.splice(j,1);//cosi' tolgo dalla lista un elemento a partire dalla posizione i

            console.log(j);

            for(const boxes1 of listTWO){ //ora la lista avra' un elemento in meno
                 boxes1.style.opacity=0.6; 
                }

   }

}
  
 


function selectedboxTHREE(event){
 
    
    const container=event.currentTarget;
    const image= container.querySelector('.checkbox');
    image.src=CHECKED_IMAGE;
    container.style.backgroundColor = "#cfe3ff";
    container.removeEventListener('click', selectedboxTHREE);
    

 if(listTHREE.length==9){
    
            for(const boxes1 of listTHREE){
                if(boxes1===container){
                    k=listTHREE.indexOf(container); //conservo l'indice 
                }
            }


    listTHREE.splice(k,1);//cosi' tolgo dalla lista un elemento a partire dalla posizione i

    console.log(k);

            for(const boxes1 of listTHREE){ //ora la lista avra' un elemento in meno
                boxes1.style.opacity=0.6; //aggiungo opacita' agli 8 elementi rimasti
            }

            if(listONE.length==8 && listTWO.length==8){
                finalresults();
            }

}else if(listTHREE.length==8){ //avendo tolto dalla lista un elemento ora la sua lunghezza sara' pari a 8
    
                ricaricalistTHREE();
                for(const boxes1 of listTHREE){
                    boxes1.style.opacity=1;
                    boxes1.style.backgroundColor = "#f4f4f4";
                    const image =listTHREE[k].querySelector(".checkbox");
                    image.src=UNCHECKED_IMAGE;
                }

                const image=container.querySelector(".checkbox");
                image.src=CHECKED_IMAGE;
                container.style.backgroundColor="#cfe3ff";
                container.removeEventListener('click', selectedboxTHREE);

                for(const boxes1 of listTHREE){
                        if(boxes1===container){
                            k=listTHREE.indexOf(container);
                                }
                }
                

                listTHREE.splice(k,1);//cosi' tolgo dalla lista un elemento a partire dalla posizione j

                console.log(k);

                for(const boxes1 of listTHREE){ //ora la lista avra' un elemento in meno
                        boxes1.style.opacity=0.6; 
                        }
    
    }

}




const firstlist=document.querySelectorAll("[data-question-id='one']"); //e' una nodeList
const secondlist=document.querySelectorAll("[data-question-id='two']");
const thirdlist=document.querySelectorAll("[data-question-id='three']");
const listONE=[];
const listTWO=[];
const listTHREE=[];

for(const box of firstlist){
    box.addEventListener('click', selectedboxONE);  //aggiungo a firstlist l'eventlistener quando clicco
    listONE.push(box);
 } 

function ricaricalistONE(){
    listONE.length=0; //azzero la lista
   for(const box of firstlist){
       box.addEventListener('click', selectedboxONE);  
       listONE.push(box);
    } 

} 

for(const box of secondlist){
    box.addEventListener('click', selectedboxTWO);
   listTWO.push(box);
}

function ricaricalistTWO(){
    listTWO.length=0; //azzero la lista
   for(const box of secondlist){
       box.addEventListener('click', selectedboxTWO);  
       listTWO.push(box);
    } 

}

for(const box of thirdlist){
    box.addEventListener('click', selectedboxTHREE);
    listTHREE.push(box);
 } 

function ricaricalistTHREE(){
    listTHREE.length=0; //azzero la lista
   for(const box of thirdlist){
       box.addEventListener('click', selectedboxTHREE);  
       listTHREE.push(box);
    } 

}

function reset(){
    ricaricalistONE();
    ricaricalistTWO();
    ricaricalistTHREE(); //ricarico le liste e gli riaggiungo l'event listener cosi' da farle tornare allo stato iniziale
//per tutte e tre rimetto lo stile iniziale

    for(const boxes1 of listONE){
                boxes1.style.opacity=1;
                boxes1.style.backgroundColor = "#f4f4f4";
                const image =listONE[i].querySelector(".checkbox");
                image.src=UNCHECKED_IMAGE;
    }

    for(const boxes1 of listTWO){
                boxes1.style.opacity=1;
                boxes1.style.backgroundColor = "#f4f4f4";
                const image =listTWO[j].querySelector(".checkbox");
                image.src=UNCHECKED_IMAGE;
    }

    for(const boxes1 of listTHREE){
                boxes1.style.opacity=1;
                boxes1.style.backgroundColor = "#f4f4f4";
                const image =listTHREE[k].querySelector(".checkbox");
                image.src=UNCHECKED_IMAGE;
    }

    //elimino la risposta finale
    //elimino h1 e p perche' vengono creati nuovamente quando avro' il risultato finale
    const eliminah1p=document.querySelector('#finalresult');
    eliminah1p.innerHTML=''; //elimino i figli di #finalresult ovvero h1 e p
}



function finalresults(){
    for(const box of firstlist){
        box.removeEventListener('click',selectedboxONE);
    }
    for(const box of secondlist){
        box.removeEventListener('click',selectedboxTWO);
    }
    for(const box of thirdlist){
        box.removeEventListener('click',selectedboxTHREE);
    }
    //ricarico le liste se no avro' un elemento in meno all'interno, tanto la posizione del risultato e' salvata nella i
    ricaricalistONE();
    ricaricalistTWO();
    ricaricalistTHREE();
    const resultContainer=document.querySelector('#finalresult');
    const header=document.createElement('h1'); //Per il titolo
    const testo=document.createElement('p'); //per scrivere il contenuto
    const bottonerestart=document.createElement('button'); //creo un bottone
 
     if(listTWO[j].dataset.choiceId===listTHREE[k].dataset.choiceId) {
          header.textContent=RESULTS_MAP[listTWO[j].dataset.choiceId].title;
          resultContainer.appendChild(header); //appendo il titolo 
          testo.textContent=RESULTS_MAP[listTWO[j].dataset.choiceId].contents;
          resultContainer.appendChild(testo); //appendo il testo
          bottonerestart.textContent='Ricomincia il quiz';
          resultContainer.appendChild(bottonerestart);
          bottonerestart.addEventListener('click', reset);
         }else{
          header.textContent=RESULTS_MAP[listONE[i].dataset.choiceId].title;
          resultContainer.appendChild(header); //appendo il titolo 
          testo.textContent=RESULTS_MAP[listONE[i].dataset.choiceId].contents;
          resultContainer.appendChild(testo); //appendo il testo
          bottonerestart.textContent='Ricomincia il quiz';
          resultContainer.appendChild(bottonerestart);
          bottonerestart.addEventListener('click', reset); 
        
 
     }
 
 } 
 /*
 console.log(RESULTS_MAP[listONE[i].dataset.choiceId].title);
 console.log(listONE[i].dataset.questionId);
 console.log(listTWO[j].dataset.questionId);
 console.log(listTHREE[k].dataset.questionId); 
 console.log(listTWO[j].dataset.choiceId);  */