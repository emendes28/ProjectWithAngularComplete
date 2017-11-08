export class Recepie {
    public name: string;
    public descripition: string;
    public imagePath: string;

    constructor(name : string, desc: string, imagePath: string){
        this.name = name;
        this.descripition = desc;
        this.imagePath = imagePath;
    }
}