export class UserId{
    value: String

    constructor(value: String){
        this.value = value
        this.VerifyId()
    }

    private VerifyId(){
        if (this.value.length < 5) {
            throw new Error("id invalido, minimo 5 caracteres")
        }
    }
}