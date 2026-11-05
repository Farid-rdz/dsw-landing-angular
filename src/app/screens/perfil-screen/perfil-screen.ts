import { Component } from '@angular/core';
@Component({
  selector: 'app-perfil-screen',
  imports: [],
  templateUrl: './perfil-screen.html',
  styleUrl: './perfil-screen.scss'
})
export class PerfilScreen {
  perfil = {
    nombre: 'Nombre Apellido Apellido',
    email: 'correo@ejemplo.com',
    telefono: '222 000 0000',
    direccion: 'Calle, número, colonia, Puebla, Pue.',
    nacimiento: '01/01/2000'
  };
}
