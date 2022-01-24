export class Companion{
    firstname : string;
    lastaname : string;
    picture : string;

    constructor(fistN ?: string, lastN ?: string, pic ?:string) {
        this.firstname = fistN ? fistN : ''
        this.lastaname = lastN ? lastN : ''
        this.picture = pic ? pic : ''
    }
}