import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {


  public listaHeroes:string[]=['SpiderMan','Thor','Deadpool','xion'];

  public heroBorrado:string|undefined='';



  public removeLastHero():void{

    this.heroBorrado=this.listaHeroes.pop();


  }

}

