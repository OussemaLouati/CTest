export class User {
   
  email: string;
  password: string;
 typeUser : String


    constructor(typeUser:string, email: string,password: string){
        this.typeUser=typeUser;
        this.email=email;
        this.password=password;
    }

      set settypeUser(typeUser) { //this is use to set X
        this.typeUser = typeUser;
      }
      set setemail(email) { //this is use to set X
        this.email = email;
      }
    
      set setpassword(password) { //this is use to set X
        this.password = password;
      }
}