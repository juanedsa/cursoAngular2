System.register(['angular2/core', '../model/pelicula'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, pelicula_1;
    var PelicilasListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (pelicula_1_1) {
                pelicula_1 = pelicula_1_1;
            }],
        execute: function() {
            // Decorador component, indicamos en que etiqueta se va a cargar la plantilla
            PelicilasListComponent = (function () {
                function PelicilasListComponent() {
                    this.mostrarDatos = false;
                    this.peliculas = [
                        new pelicula_1.Pelicula(1, "Batman vs Superman", "Juan", 2016),
                        new pelicula_1.Pelicula(2, "Hulk", "Juan", 2016),
                        new pelicula_1.Pelicula(3, "Iron Man", "Juan", 2016),
                        new pelicula_1.Pelicula(4, "Spiderman", "Juan", 2016),
                        new pelicula_1.Pelicula(5, "La vida es Bella", "", 2016),
                    ];
                    this.pelicula = this.peliculas[0];
                    this.peliculaElegida = this.peliculas[0];
                    this.debug();
                }
                PelicilasListComponent.prototype.debug = function () {
                    console.log(this.pelicula);
                };
                PelicilasListComponent.prototype.onShowHide = function (value) {
                    this.mostrarDatos = value;
                };
                PelicilasListComponent.prototype.onCambiarPelicula = function (_pelicula) {
                    this.pelicula = _pelicula;
                    this.peliculaElegida = _pelicula;
                };
                PelicilasListComponent = __decorate([
                    core_1.Component({
                        selector: 'peliculas-list',
                        templateUrl: 'app/view/peliculas-list.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], PelicilasListComponent);
                return PelicilasListComponent;
            }());
            exports_1("PelicilasListComponent", PelicilasListComponent);
        }
    }
});
//# sourceMappingURL=peliculas-list.component.js.map