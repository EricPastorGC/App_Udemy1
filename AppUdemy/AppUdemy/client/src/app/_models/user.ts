export interface User{
    username: string;
    token: string;
    photoUrl: string;
}

//let data: number | string = 42;  //en typescript se pueden aplicar diferentes tipos de variable a una misma variable

//data = "8"; //sin el doble tipo de variable no podriamos aplicar aqui un string porque cuando hemos inicializado se le ha dado un number

//en una interfaz si se usa ? en una variable esa variable no sera obligatoria a la hora de crear una interfaz de ese tipo 