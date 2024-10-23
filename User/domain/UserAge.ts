export class UserAge{
    value: Int32Array

    constructor(value: Int32Array){
        this.value = value
        this.VerifyAge()
    }

    private VerifyAge(){
        if (this.value.length < 0) {
            throw new Error("edad invalida, no puede ser negativo")
        }
    }
}