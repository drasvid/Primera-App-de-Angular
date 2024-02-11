import { Component } from "@angular/core";



@Component({

    selector:'app-counter',

    template:`


        <h2>Contador</h2>
    
        <h3>{{contador}}</h3>

        <button type="button" (click)="aumentarContador()" >+1</button>
        <button type="button" (click)="resetContador()" >reset</button>
        <button type="button" (click)="disminuirContador()" >-1</button>
    
    
    `


})

export class AppContador{

    public contador:number=10;


    aumentarContador():void{
  
      this.contador +=1
  
    }
  
    disminuirContador():void{
  
      this.contador-=1
  
    }
  
  
    resetContador():void{
  
      this.contador=10;
  
  
    }



}