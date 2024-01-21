import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Answer } from './models/answer.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private apiUrl = 'URL_DE_LA_API';

  constructor(private _http: HttpClient) { }

  obtenerRespuesta() {
    return this._http.get<Answer>(this.apiUrl);
  }

  
}
