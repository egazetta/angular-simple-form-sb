import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../_services';
import { Usuario } from '../_models';
@Component({
  selector: 'app-usuario',
  templateUrl: 'usuarios.component.html'
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuario[];
  usuario: Usuario = new Usuario();

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.listarUsuarios();
  }

  salvar() {
    this.usuarioService.save(this.usuario).subscribe(
      data => {
        this.listarUsuarios();
        this.usuario = new Usuario();
      },
      error => {
        console.log(error);
      }
    );
  }

  listarUsuarios() {
    this.usuarioService.list().subscribe(
      data => {
        this.usuarios = data;
      },
      error => {
        console.log(error);
      }
    );
  }
}
