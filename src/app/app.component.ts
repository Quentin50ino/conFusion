import { Component } from '@angular/core'; //importa la classe Component da angular core

//Component decorator
@Component({
  selector: 'app-root', //è l'app-root presente nell'index.html!
  templateUrl: './app.component.html', //punta al file che contiene il template di questo particolare componente
  styleUrls: ['./app.component.css'] //punta al file che contiene il css di questo componente
})
export class AppComponent {
  title = 'conFusion'; //variabile di classe
}
