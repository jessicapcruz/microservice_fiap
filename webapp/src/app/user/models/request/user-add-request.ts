export class UserAddRequest {

 name: string;
 username: string;
 email: string;
 password: string;
 gender: string;

 constructor(name:string, username:string, email: string, password:string, gender: string)
 {
    this.name = name;
    this.username = username;
    this.email = email;
    this.password = password;
    this.gender = gender;
 }

}
