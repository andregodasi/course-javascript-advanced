class DateHelper{

    constructor(){
        throw new Error('DateHelper não pode ser instaciada')
    }

    static dataParaTexto(data){
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
    }

    static textoParaData(dataTexto){
       
        if(!/^\d{4}-\d{2}-\d{2}$/.test(dataTexto))
            throw new Error('O formato da data deve ser yyyy-mm-dd');
       
            
        return new Date( ...
            dataTexto.split('-').
            map((item, indice)=> item - indice % 2));
            
    }
    


}