// Archivo para enlazar cada uno de los archivos, indicar las rutas
import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';
import { AnimeComponent } from './pages/anime/anime-page.component';
import { AnimeSuperComponent } from './pages/anime-super/anime-super-page.component';
 
export const routes: Routes = [
 {
        //Path indica que se le va a agregar a la dirección de dominio
        path:'',
        component: CounterPageComponent, //cargar cuando es la url inicial
    },
 {
        path:'hero',
        component: HeroPageComponent, 
    },
    //Cada posición del arreglo indica un objeto
    {
        path: 'anime',
        component: AnimeComponent
    },
    {
        path: 'anime-super',
        component: AnimeSuperComponent
    }    
];
