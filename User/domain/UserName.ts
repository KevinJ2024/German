export class UserName{
    value: String

    constructor(value: String){
        this.value = value
        this.VerifyName()
    }

    private VerifyName(){
        if (this.value.length < 3) {
            throw new Error("nombre invalido, minimo 3 caracteres")
        }
    }
}