export class Book {
    public get price(): number {
        return this._price;
    }
    public set price(value: number) {
        this._price = value;
    }

    public get author(): string {
        return this._author;
    }
    public set author(value: string) {
        this._author = value;
    }

    public get title(): string {
        return this._title;
    }
    public set title(value: string) {
        this._title = value;
    }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }


//raccourci d'écriture
//yasnaali att wyasnaali les constructeurs li yemchiw maa att
    constructor (private _id: number,
        private _title: string,
        //quand je sélectionne un att il va afficher une lampe bleue qui permet de générer get et set 
        private _author: string,
        private _price: number){}




    /* Ecriture explicite:
    private _id: number;
    private _title: string;
    private _author: string;
    private _price: number;
    constructor(id:number,title:string,author:string,price:number){
        this._id=id;
        this._title=title;
        this._author=author;
        this._price=price;
    }
    */
}