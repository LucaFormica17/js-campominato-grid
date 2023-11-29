Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata (click su un pulsante... cosa dovrà essere chiamata? Quindi cosa dobbiamo definire prima?).
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.


BONUS
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


SUPER BONUS
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;


Consigli del giorno:  :party_wizard:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.
In allegato esempi di layout da avere come guida nel caso non abbiate idee sullo stile grafico.
Buon lavoro, a domani!



PROBLEMA
1 - definire funzione che generi una griglia al click di un pulsante
    1.2 - definire una funzione che generi una cella 
        1.2.1 - creare un elemento all'interno del DOM
        1.2.2 - assegnare una classe all'elemento creato
        1.2.3 - iniettare testo che verrà visualizzato all'interno dela cella
        1.2.4 - ritornare elemento creato
    1.3 - recuperare elemento presente nel DOM che conterrà la griglia
    1.4 - creare ciclo for che ripeta 100 volte la creazione della cella e assegni a ogni cella testo progressivo
        1.4.1 - dichiarare variabile che richiami la funzione che crea la singola cella assegnando parametro progressivo 
        1.4.2 - appendere elemento creato a elemento che conterrà la griglia



BONUS
1 - mettere in ascolto l'elemento cella creato e assegnare un background all'evento click
2 - visualizzare in console inoltre il numero della cella visualizzata



SUPERBONUS
1 - recuperare elemento nel DOM che permetterà di scegliere la difficoltà
2 - assegnare valore intero a elemento recuperato per la difficoltà
3 - creare switch per differenziare grandezza griglia in base alla difficoltà
4 - 






