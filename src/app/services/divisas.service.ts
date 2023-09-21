//import { Divisa } from '../interfaces/divisa.interface';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DivisasService {
  //cargarEmisoras() {

  //}

  private urlDivisa='https://api.databursatil.com/v1/divisas?token=5fd32fb435065f45a4d42e49013297';



  private url='https://api.databursatil.com/v1/emisoras?token=5fd32fb435065f45a4d42e49013297&letra=A&mercado=local';



  //private urlDivisa='https://api.databursatil.com/v1/divisas?token=5fd32fb435065f45a4d42e49013297';
  //private urlDivisa='https://api.databursatil.com/v1/emisoras?token=5fd32fb435065f45a4d42e49013297';

  //divisas: Divisa [] = [];
  //divisas: Divisa {} = {};

  constructor(private http: HttpClient) {}


   public cargarDivisa():Observable<any>{
   return this.http.get<any>(this.urlDivisa);

   }


   public getJsonDivisa():Observable<any>{
    return this.http.get<any>(this.url);

  }

   /*
      public getJson(url: string){
    return this.http.get(url);

   }
   */

  }


/*



   //return this.http.get('/EURMXN');

   //return this.http.get('https://api.databursatil.com/v1/divisas?token=5fd32fb435065f45a4d42e49013297');
   //return this.http.get('/v1/divisas?token=5fd32fb435065f45a4d42e49013297');


    //return this.http.get('https://api.databursatil.com/v1/precios?token=5fd32fb435065f45a4d42e49013297&emisora_serie=AMXB&bolsa=BMV,BIVA');

*/
