
interface Accessory{
  name:string;
  type:string;
}
interface Rent{
  period: string;
  price: number;
}
export interface CarDTO{
    about:string;
    accessories:Accessory[];
    brand:string;
    fuel_type: string;
    id:string;
    name:string;
    photos:string[];
    rent: Rent;
    thumbnail: string;
}