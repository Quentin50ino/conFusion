import { Component } from '@angular/core'; //importa la classe Component da angular core

//un componente contiene dei metadati (selector, template, style), proprietà e metodi (che stanno all'interno della classe)

//Component decorator
@Component({
  selector: 'app-root', //è l'app-root presente nell'index.html!
  templateUrl: './app.component.html', //punta al file che contiene il template di questo particolare componente
  //template: `<h1>{{title}}</h1>`, questo è chiamato inline template (si usa solo quando il template è molto semplice da scrivere)
  styleUrls: ['./app.component.css'] //punta al file che contiene il css di questo componente
})

//il Componenet non è nient'altro che una classe javascript (o meglio TypeScript)
export class AppComponent { //la classe può essere esportata
  title = 'conFusion'; //variabile di classe
}
