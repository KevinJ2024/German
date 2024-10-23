export class UserEmail{
    value: String

    constructor(value: String){
        this.value = value
        this.VerifyEmail()
    }

    private VerifyEmail(){
        if (this.value.length < 15) {
            throw new Error("email invalido, minimo 15 caracteres")
        }
    }
}