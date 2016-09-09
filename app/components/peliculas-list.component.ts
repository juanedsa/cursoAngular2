// Importar el núcleo de Angular
import {Component} from 'angular2/core';
import {Pelicula} from '../model/pelicula';
import {PeliculasService} from '../services/peliculas.service';

// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'peliculas-list',
    templateUrl: 'app/view/peliculas-list.html',
    providers: [PeliculasService]
})

// Clase del componente donde iran los datos y funcionalidades
export class PelicilasListComponent {

  public pelicula:Pelicula;
  public peliculaElegida:Pelicula;
  public mostrarDatos:boolean;
  public peliculas;

  constructor(private _peliculasService: PeliculasService){
    this.mostrarDatos = false;

    this.peliculas = this._peliculasService.getPeliculas();


    this.pelicula = this.peliculas[0];
    this.peliculaElegida = this.peliculas[0];

    this.debug();
  }

  debug() {
    console.log(this.pelicula);
  }

  onShowHide(value) {
    this.mostrarDatos = value;
  }

  onCambiarPelicula(_pelicula) {
    this.pelicula = _pelicula;
    this.peliculaElegida = _pelicula;
  }

}
