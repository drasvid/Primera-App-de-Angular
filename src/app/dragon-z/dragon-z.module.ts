import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { DragonZListComponent } from './components/dragon-z-list/dragon-z-list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainPageComponent,
    DragonZListComponent,
    AddCharacterComponent  ],

  exports:[

    MainPageComponent

  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DragonZModule { }
