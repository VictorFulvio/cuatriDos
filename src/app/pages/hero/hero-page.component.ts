import { Component, signal } from "@angular/core";

@Component({ 
    templateUrl:'./hero-page.component.html',
    styleUrl: './hero-page.component.css'
})
export class HeroPageComponent{
    name = signal('Punisher');
    age = signal('40 años');
    description = signal('');

    modifyName() {
        this.name.set('Daredevil');
}
    modifyAge(){
        this.age.set('35 años');
    }
    getHeroDescription(){
        if (this.name() == 'Punisher'){
            return('Punisher es la identidad justiciera de Francis G. "Frank" Castle (nacido Castiglione), un veterano explorador/francotirador del Cuerpo de Marines de los Estados Unidos en Force Recon.');
        } else{
            return(' Matt Murdock / Daredevil, un abogado ciego de día que lucha contra el crimen como un justiciero enmascarado por la noche.');
        }
    }
    reset(){
        this.name.set('Punisher')
        this.age.set('40 años')
    }
}

