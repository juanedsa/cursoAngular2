// Importar el núcleo de Angular
import {Component} from 'angular2/core';
import {PelicilasListComponent} from './components/peliculas-list.component';
import {PelicilasFooterComponent} from './components/peliculas-footer.component';

// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'my-app',
    templateUrl: 'app/view/peliculas.html',
    directives: [PelicilasListComponent, PelicilasFooterComponent]
})

// Clase del componente donde iran los datos y funcionalidades
export class AppComponent {
  public titulo:string = "Peliculas con Angular 2";

}
