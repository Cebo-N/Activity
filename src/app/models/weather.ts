export class Weather{
    description : string;
    icon : string;
    temperature : number;
    humidity : number;
    windSpeed : number;
    locationName : string; 

    constructor(desc ?:string, icon ?: string, temp ?:number, 
        hum ?: number, win ?: number, location ?: string ){
            this.description = desc ? desc : '';
            this.humidity  = hum ? hum : 0;
            this.icon = icon ? icon : '';
            this.temperature = temp ? Math.ceil(temp) : 0;
            this.windSpeed = win ? win : 0;
            this.locationName = location ? location : ''
    }
}