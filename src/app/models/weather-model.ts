export class Weather{
    temperature : number;
    humidity : number;
    windSpeed : number;
    description : string;
    icon : string;

    constructor(temp : number, hum : number, winSpeed : number, desc : string, icon : string){
        this.temperature = temp;
        this.humidity = hum;
        this.windSpeed = winSpeed;
        this.description = desc;
        this.icon = icon;
    }

} 