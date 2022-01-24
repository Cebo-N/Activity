export class Activity{
    activity : string;
    type : string;
    price : number;
    participants : number
    link : string;
    key : string;
    accessibility : number;

    constructor(activity ?:string, type ?:string,
        participants ?: number, price ?: number,
        link ?: string, key ?: string, accessibility ?: number 
        ){
            this.activity = activity ? activity : '';
            this.type = type ? type : '';
            this.participants = participants ? participants : 1;
            this.price = price ? price : 0; 
            this.link = link ? link : '';
            this.key = key ? key : '';
            this.accessibility = accessibility ? accessibility : 0
    }

    checkPrice(){
        if(this.price == 0){
          return "Free"
        }
        else if(this.price < 0.4){
          return "Cheap"
        }
        else if(this.price < 0.7){
          return "Affodable"
        }
        else {
          return 'Expensive'
        }
    }

    checkAvailability(){
        if(this.accessibility < 0.4){
            return "Easy"
        }
        else if(this.accessibility < 0.7){
            return "Meduim"
        }
        else{
            return "Hard"
        }
    }


}