import { Component, OnInit } from '@angular/core';
import { DivisasService } from './services/divisas.service';
import { DivisaInfo } from './interfaces/divisaInfo.interface';


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

  emisora: any[]=[];

/*
   JSON.parse
  const objeto = JSON.parse(response.ObjectResult);
  this.data = objeto.39.AZTECA.0.row;
  console.log(this.data);
*/


  constructor(private divisasService: DivisasService){
  console.log('el componente se ha creado');

  }

  ngOnInit():void {
    this.llenarData();
    this.leerEmisoras();

    }


    llenarData(){
      console.log('el componnente se ha inicalizado');
      this.divisasService.cargarDivisas()
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

    leerEmisoras(){
      console.log('leyendo emisoras');
      this.divisasService.getJson()
      .subscribe(emisora => {
        this.emisora= emisora;
        console.log('leer emisora');
        console.log(emisora);
        });
    }




/*
      llenarData(){
        console.log('el componnente se ha inicalizado');
        this.divisasService.cargarDivisas()
        .subscribe(data => {
           this.data= data;
          //this.paises = data.map(p => p.name);
          console.log('leyendo datos');
          console.log(this.data);
          //console.log('obteniendo solo un valor', this.data[0]);
          console.log('obteniendo el valor this.data[0]  :', this.data[0]);
          console.log('obteniendo el valor this.data[1]  :', this.data[1].HERDEZ[0].Bolsa);

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
