import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name='SpiderMan';
  public age=20;




  public cambiarNombre():void{

    this.name='IronMan';


  }

  public cambiarEdad():void{

    this.age=54;

  }

  public resetForm():void{

    this.name='SpiderMan';
    this.age=20


  }
   


}
