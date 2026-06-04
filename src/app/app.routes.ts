// Archivo para enlazar cada uno de los archivos, indicar las rutas
import { Routes } from '@angular/router';

import { HeroPageComponent } from './pages/hero/hero-page.component';

import { CounterPageComponent } from './pages/counter/counter.component';
 

 
export const routes: Routes = [
    {
        path: '',
        redirectTo: 'heroes',
        pathMatch: 'full'
    }, 
        {
        path:'heroes',
        component: HeroPageComponent, 
    },
    //Cada posición del arreglo indica un objeto
    {
        //Path indica que se le va a agregar a la dirección de dominio
        path:'',
        component: CounterPageComponent, //cargar cuando es la url inicial
    },
 


];
