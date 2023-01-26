// Carrello e sconti particolari - BuildTime #2

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
*/


const marco = {
    name: 'Marco',
    lastName: 'Rossi',
    isAmbassador: true,
  }
  
  const paul = {
    name: 'Paul',
    lastName: 'Flynn',
    isAmbassador: false,
  }
  
  const amy = {
    name: 'Amy',
    lastName: 'Reed',
    isAmbassador: false,
  }
  
  const prices = [1,11,2]
  const shippingCost = 50

  function totaledelcarrello(prezzo,utente,costospedizione){
       let totale=0;
        const rand = prezzo.sort(() => 0.5 - Math.random());
        let prodottiscelti = rand.slice(1, 4);
        for(let i = 0; i < prodottiscelti.length; i++){
            totale += prodottiscelti[i];
        }

       if(utente.isAmbassador){
            if(totale<=100){
                totale=totale-(totale*0.3)+costospedizione;}
                else{
                totale=totale-(totale*0.3);
            }}
            else{
            if(totale<=100){
                totale+=costospedizione;
            }}

       return totale;
}

let spesamarco=totaledelcarrello(prices,marco,shippingCost);
console.log(spesamarco);


let spesaamy=totaledelcarrello(prices,amy,shippingCost);
console.log(spesamarco);

let spesapaul=totaledelcarrello(prices,paul,shippingCost);
console.log(spesapaul);