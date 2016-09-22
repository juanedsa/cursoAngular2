// Importar el núcleo de Angular
import {Component} from 'angular2/core';
import {Pelicula} from '../model/pelicula';
import {Router} from 'angular2/router';
import {PeliculasService} from '../services/peliculas.service';

// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    templateUrl: 'app/view/crear-pelicula.html',
    providers: [PeliculasService]
})

// Clase del componente donde iran los datos y funcionalidades
export class CrearPeliculaComponent {

    constructor(private _peliculasServices: PeliculasService, private _router: Router) {

    }


    onCrearPelicula(titulo, director, anio) {
        let pelicula: Pelicula = new Pelicula(77, titulo, director, anio);

        this._peliculasServices.insertPelicula(pelicula);

        this._router.navigate(["Peliculas"]);

    }

}
