class NegociacaoController{

    constructor(){
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

        this._listaNegociacoes = new ListaNegociacoes();
        this._negociacoesView = new NegociacoesView($('#NegociacoesView'));

        this._negociacoesView.update();
    }

   adiciona(event){
        event.preventDefault();
        
        this._listaNegociacoes.adiciona(this._criarNegociacao());
        console.log(this._criarNegociacao());
        this._limparFormulario();
        
        console.log(this._listaNegociacoes.negociacoes);

   }

   _criarNegociacao(){
       return  new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
   }

   _limparFormulario(){
       this._inputData.value = '';
       this._inputQuantidade.value = 1;
       this._inputValor.value = 0.0;
       this._inputData.focus();
   }
}