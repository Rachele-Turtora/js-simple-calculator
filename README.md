L'utente inserisce le cifre del primo numero, dopo dovrà cliccare sull'operazione, poi inserirà le cifre del secondo numero e infine dovrà cliccare sul tasto = per vedere il risultato. Non si può applicare più di un'operazione alla volta.

MILESTONE 1
Aggiungere event listener a tutti i numeri (0-9): quando si clicca su un numero, concatenarlo al numero visualizzato in alto
- prendo tutti i numeri tramite una classe
- ciclo tutti i numeri 
    - aggiungo event listener per il numero 
- dichiaro una funzione per il numero specifico
    - prendo il valore per numero cliccato
    - metto il valore come risultato

MILESTONE 2
aggiungere event listener a tutti gli operatori: quando si clicca su un operatore, salvare l'operatore cliccato e il primo operando, quindi resettare il numero in alto
- prendo tutti gli operatori tramite una classe
- ciclo tutti gli operatori
    - aggiungo event listener per l'operatore 
- dichiaro una funzione per l'operatore
    - prendo il valore dell'operatore (quale operatore è) e lo metto in una variabile
    - prendo il risultato e lo metto in una variabile
    - resetto il risultato

MILESTONE 3
aggiungere event listener al pulsante "=": quando si clicca su =, salvare il secondo operando, effetuare il calcolo corretto in base all'operatore selezionato e visualizzare il risultato in alto
- prendo = tramite id
- aggiungo event listener per =
    - salvo il secondo numero
    - faccio il calcolo richiamando una funzione 
- dichiaro funzione per fare il calcolo in cui metto i diversi casi a seconda dell'operatore


MILESTONE 4
pulsante canc: cliccando il pulsante si resetta il calcolo

BONUS
verificare che non si stia cercando di dividere per 0