import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interfaces';
import { DragonService } from '../services/dragon.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

  // hay que mantener los servicio privados, ya que esto es una buena practica

  constructor(private DragonService:DragonService){}

  get Characters():Character[]{

    // los tres punto significan que crea por si mismo el arreglo esparciendo los datos

    return[...this.DragonService.Characters]

  }

    deleteCharacter(id:string):void{

      this.DragonService.deleteCharacteById(id);


    }


    NewCharacter(character:Character){

      this.DragonService.onNewCharacter(character);


    }


  }



