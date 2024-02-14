import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interfaces';

@Component({
  selector: 'dragon-z-list',
  templateUrl: './dragon-z-list.component.html',
  styleUrl: './dragon-z-list.component.css'
})
export class DragonZListComponent {


@Input()
public characterList:Character[]=[]


@Output() 
public deleteId:EventEmitter<string>=new EventEmitter;



deleteCharacterById(id:string){

  this.deleteId.emit(id);


  }

}