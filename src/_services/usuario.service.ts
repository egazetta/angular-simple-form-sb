import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Usuario } from '../_models';

@Injectable({ providedIn: 'root' })
export class UsuarioService {
  constructor(private http: HttpClient) {}

  usuario: Usuario;

  save(usuario: Usuario) {
    return this.http.post(environment.apiUrl + '/usuario', usuario);
  }

  list() {
    return this.http.get<any>(environment.apiUrl + '/usuario');
  }
}
