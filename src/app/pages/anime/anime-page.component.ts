import { Component, signal } from "@angular/core";
interface Character { //al nivel de interfase cumple con las reglas
    id:number;
    name:string;
    power:number;
}
@Component({
    selector:'app-anime',
    templateUrl: './anime-page.component.html'
})
export class AnimeComponent{
    name = signal('');
    power = signal(0); //Se agregan con la información de los input
    characters = signal<Character[]> //al no estar en parentesis son datos creados por Mi y con sus caracteristicas o reglas
    ([
        {id:1, name:' Goku ', power: 9001},
        {id:2, name:' Vegeta ', power: 8000},
        {id:3, name:' Piccolo ', power: 3000},
        {id:4, name:' Yamcha ', power: 500},
    ]) 
}