class View{

    constructor(elemento){
        this._elemento = elemento;
    }

    template(){
        throw new Error('Método template tem que se implementado');
    }

    update(model){
        this._elemento.innerHTML = this.template(model);
    }
}