import { choix } from './choix';
import { Deserializable } from './Deserializable';

export class quiz {
    _id: string;
    type: string;
    categorie: string;
    question:  string;
    choix :choix[];
    reponse: Number[];
    



    constructor( id: string,   type: string,   categorie: string,  question:  string,   choix :choix[], reponse:Number[]){

        this._id=id;
        this.type=type;
        this.categorie=categorie;
        this.question=question;
        this.choix=choix;
    }


    // constructor(QuestionResponse:any ){
    //     this.type=QuestionResponse.type;
    //     this.categorie=QuestionResponse.type;
    //     this.type=QuestionResponse.type;
    //     this.choix=QuestionResponse.choix;
    // }

    // deserialize(input: any): this {
    //     Object.assign(this, input);
    //     this.choix = new choix().deserialize(input.choix);
    //     return this;
    //   }

      
   
   
}

