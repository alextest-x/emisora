//import { Divisa } from '../interfaces/divisa.interface';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EmisorasService {

  private urlEmisora='https://api.databursatil.com/v1/emisoras?token=5fd32fb435065f45a4d42e49013297&letra=ALSEA&mercado=local';

  private urlEmisoraAll='https://api.databursatil.com/v1/emisoras?token=5fd32fb435065f45a4d42e49013297&letra=A&mercado=local';

  //divisas: Divisa [] = [];
  //divisas: Divisa {} = {};

  constructor(private http: HttpClient) {}



    public cargarEmisora():Observable<any>{
      return this.http.get<any>(this.urlEmisora);

      }

      public getJsonEmisora():Observable<any>{
        return this.http.get<any>(this.urlEmisoraAll);

      }

  }



