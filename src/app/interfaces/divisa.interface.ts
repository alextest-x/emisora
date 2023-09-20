export interface Divisa {
  AUDUSD: string;
  CADMXN: string;
  CHFMXN: string;
  EURMXN: string;
  EURUSD: string;
  GBPMXN: string;
  GBPUSD: string;
  USDCAD: string;
  USDJPY: string;
  USDMXN: string;
  tiempo: string;
  precio: number;
}

export interface CambioDivisa{
  precio: number;
  cambio: number;
  cambio$:number;
}
