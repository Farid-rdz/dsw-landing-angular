import { Component } from '@angular/core';
@Component({
  selector: 'app-perfil-screen',
  imports: [],
  templateUrl: './perfil-screen.html',
  styleUrl: './perfil-screen.scss'
})
export class PerfilScreen {
  perfil = {
    nombre: 'Sandro Farid Díaz Rodríguez',
    email: 'sandro@ejemplo.com',
    telefono: '222 111 0000',
    direccion: 'Calle, número, colonia, Puebla, Pue.',
    nacimiento: '31/07/2006'
  };
}
