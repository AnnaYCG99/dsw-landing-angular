import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil-screen',
  imports: [],
  templateUrl: './perfil-screen.html',
  styleUrl: './perfil-screen.scss'
})
export class PerfilScreen {
  perfil = {
    nombre: 'Valeria Campos',
    email: 'elizacampos@correo.com',
    telefono: '222 000 0000',
    direccion: '2 poniente, 1000, Centro, Puebla, Pue.',
    nacimiento: '01/01/2000'
  };
}
