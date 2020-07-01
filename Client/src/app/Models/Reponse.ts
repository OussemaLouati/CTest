

export class ReponseCandidat  {
    idQuestion: string ;
    idChoix: string;

    constructor(idQuestion: string , idChoix: string){
        this.idQuestion=idQuestion;
        this.idChoix= idChoix;
    }
}