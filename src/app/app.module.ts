import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UsuariosComponent } from '../usuarios/usuarios.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, FormsModule],
  declarations: [AppComponent, UsuariosComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
