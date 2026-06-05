// Archivo para enlazar cada uno de los archivos, indicar las rutas
import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';
 
export const routes: Routes = [
 {
        //Path indica que se le va a agregar a la dirección de dominio
        path:'',
        component: CounterPageComponent, //cargar cuando es la url inicial
    },
    // {
    //     path: '',
    //     redirectTo: 'heroes',
    //     pathMatch: 'full'
    // }, 
 {
        path:'hero',
        component: HeroPageComponent, 
    },
    //Cada posición del arreglo indica un objeto

 


];
