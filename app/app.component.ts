// Importar el núcleo de Angular
import {Component} from 'angular2/core';
import {Pelicula} from './model/pelicula';

// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'my-app',
    templateUrl: 'app/view/peliculas.html',
    styleUrls: ['../assets/css/styles.css']
})

// Clase del componente donde iran los datos y funcionalidades
export class AppComponent {
  public titulo:string = "Peliculas con Angular 2";
  public pelicula:Pelicula;
  public mostrarDatos:boolean;
  public peliculas;

  constructor(){
    this.mostrarDatos = false;
    this.pelicula = new Pelicula(1, "Batman vs Superman", "Juan", 2016);

    this.peliculas = [
      new Pelicula(1, "Batman vs Superman", "Juan", 2016),
      new Pelicula(2, "Hulk", "Juan", 2016),
      new Pelicula(3, "Iron Man", "Juan", 2016),
      new Pelicula(4, "Spiderman", "Juan", 2016),
      new Pelicula(5, "La vida es Bella", "", 2016),
    ];

    this.debug();
  }

  debug() {
    console.log(this.pelicula);
  }

  onShowHide(value) {
    this.mostrarDatos = value;
  }

}
