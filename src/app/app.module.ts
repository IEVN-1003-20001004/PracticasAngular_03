import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppComponent } from './app.component';
import { PotenciasComponent } from './Operaciones/potencias/potencias.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CinepolisComponent } from './casos/cinepolis/cinepolis.component';

@NgModule({
  declarations: [
    AppComponent,
    PotenciasComponent,
    CinepolisComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
