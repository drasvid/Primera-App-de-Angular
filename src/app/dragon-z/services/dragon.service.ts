import { Injectable } from "@angular/core";
import { v4 as uuid} from "uuid";

import { Character } from "../interfaces/character.interfaces";



@Injectable({

    providedIn:'root'


})

export class DragonService {

    public Characters:Character[]=[

        {
            
            id:uuid(),
            name:'krillin',
            power:1000
    
        },{
            
            id:uuid(),  
            name:'goku',
            power:2000
    
        },{

            id:uuid(),
            name:'vegeta',
            power:7000
        
    
    
        }
    
      ];

    
      onNewCharacter(character:Character){
    
        this.Characters.push(character)
    
    
      }
    
    
      deleteCharacteById(id:any){
        
        this.Characters=this.Characters.filter(character=> character.id!==id)
    

      }


 
    


}