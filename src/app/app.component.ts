import { Component, OnInit } from '@angular/core';
import { DivisasService } from './services/divisas.service';
import { DivisaInfo } from './interfaces/divisaInfo.interface';
import { EmisoraInfo } from './interfaces/emisora.interface';
import { EmisorasService } from './services/emisoras.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'

})
export class AppComponent implements OnInit{

  title: string  = 'divisas-app';
  //divisaList: Divisa {}= {};
  //divisaList: Divisa [] = [];

  //data: any[]=[];
  data: DivisaInfo[]=[];

  emisora: EmisoraInfo[]=[];

/*
   JSON.parse
  const objeto = JSON.parse(response.ObjectResult);
  this.data = objeto.39.AZTECA.0.row;
  console.log(this.data);
*/


  constructor(private divisasService: DivisasService,
              private emisorasService: EmisorasService){

  console.log('el componente se ha creado');

  }

  ngOnInit():void {
    this.llenarDivisa();
    this.llenarEmisora();

    //this.leerDivisas();
    //this.leerEmisorasAll();

    }


    llenarDivisa(){
      console.log('el componnente se ha inicalizado en divisa');
      this.divisasService.cargarDivisa()
      .subscribe(DivisaInfo => {
         this.data= DivisaInfo;

        console.log('llenar divisas');
        console.log(this.data);

        console.log('JSON.stringify');
        console.log(JSON.stringify(this.data, null, '-'));

        //console.log(JSON.stringify(this.data, ['AUDUSD']));
        //console.log('obteniendo el valor this.data[0]  :', this.data[0]);
        //console.log('obteniendo el valor this.data[1]  :', this.data[1].HERDEZ[0].Bolsa);

       });

    }

    llenarEmisora(){
      console.log('el componnente se ha inicalizado en emisora');
      this.emisorasService.cargarEmisora()
      .subscribe(EmisoraInfo => {
         this.emisora= EmisoraInfo;






         /*
         //leyendo key
        const myJSON = '{"name":"John", "age":30, "car":null}';
        const myObj = JSON.parse(myJSON);

        let text = "";
        for (const x in myObj) {
        text += x + ", ";
        console.log(text);
        }

         //leyendo value
         const myJSON1 = '{"name":"John", "age":30, "car":null}';
         const myObj1 = JSON.parse(myJSON1);

         let text1 = "";
         for (const x in myObj1) {
         text1 += myObj1[x] + ", ";
         console.log(text1);

        }

       */



        console.log('leer emisora alsea');
        console.log(this.emisora);

        console.log('JSON.stringify');
        console.log(JSON.stringify(this.data, null, '-'));
     });

    }


    leerEmisorasAll(){
      //console.log('leyendo todas las emisoras');
      this.emisorasService.getJsonEmisora()
      .subscribe(emisora => {
        this.emisora= emisora;
        console.log('leer todas las emisoras');
        console.log(emisora);
        });
    }

    leerDivisas(){
      //console.log('leyendo todas las emisoras');
      this.divisasService.getJsonDivisa()
      .subscribe(DivisaInfo => {
        this.emisora= DivisaInfo;
        console.log('leer todas las emisoras');
        console.log(DivisaInfo);
        });
    }




/*

 llenarEmisora(){
      console.log('el componnente se ha inicalizado en emisora');
      this.emisorasService.cargarEmisora()
      .subscribe(EmisoraInfo => {
         this.emisora= EmisoraInfo;

        console.log('leer emisora alsea');
        console.log(this.emisora);

        console.log('JSON.stringify');
        console.log(JSON.stringify(this.data, null, '-'));
     });

    }

         });

      }
*/


      objectKeys (objeto: any) {

        const data = Object.keys(objeto);
        console.log('objeto', objeto);
        console.log('data', data); // echa un vistazo por consola para que veas lo que hace "Object.keys"

        return data;

     }


    }

/*
  ngOnInit() {
      console.log('el componnente se ha inicalizado');
      this.divisasService.getDivisa()
          .subscribe((divisaList:DivisasService ) => {
            this.divisaList=divisaList;
          });
          console.log(this.divisaList);
        }
*/






/*
  ngOnInit() {
    console.log('el componnente se ha inicalizado');
    this.divisasService.cargarDivisas()
        .subscribe((res :any) => {
          this.divisaList= res;
          console.log(res);
         });


      }

    }
*/
