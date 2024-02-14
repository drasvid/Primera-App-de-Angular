import { Component, EventEmitter, Output } from '@angular/core';
import { v4 as uuid } from "uuid";
import { Character } from '../../interfaces/character.interfaces';

@Component({
  selector: 'dragon-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {



  @Output()
  public  onNewCharacter:EventEmitter<Character>=new EventEmitter;




  public character:Character={

    id:uuid(),
    name:'',
    power:0

  }


  PrintCharacter(){

    if (this.character.name.length===0) return;
    


    // aqui se emite el valor
    this.onNewCharacter.emit(this.character);

    this.character={id:uuid(),name:'',power:0}

  }

}
