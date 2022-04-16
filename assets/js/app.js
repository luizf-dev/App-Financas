//=============ATIVAR MODAL==================
const openModalError = () => document.getElementById('modalError').classList.add('active')

const closeModalError = () => {
   // clearFields();
    document.getElementById('modalError').classList.remove('active');
}
//=======================================

//=============== EVENTOS DE CLICK DOS BOTÕES


document.getElementById('modalClose')
    .addEventListener('click', closeModalError)

document.getElementById('cancelar')
    .addEventListener('click', closeModalError)



//========================CLASSES=============================//
//**CLASSE DESPESA
class Despesa{
    constructor(ano, mes, dia, tipo, descricao, valor){

        this.ano = ano;
        this.mes = mes;
        this.dia = dia;
        this.tipo = tipo;
        this.descricao = descricao;
        this.valor = valor;
    }

    validarCampos(){
        for(let i in this){
            if(this[i] === undefined || this[i] === '' || this[i] === null){
                return false;                
            }
        }
        return true;
    }
}

//**CLASSE DB
class DB {

    constructor(){
        let id = localStorage.getItem('id');

        if(id === null){
            localStorage.setItem('id', 0);
        }
    }

    getProximoId(){
        let proximoId = localStorage.getItem('id');
        return parseInt(proximoId) + 1;

    }

    armazenar(despesa){

        let id = this.getProximoId();
        localStorage.setItem(id, JSON.stringify(despesa));  
        localStorage.setItem('id', id);
    }
}

let db = new DB();











function addDespesa(){

    let ano = document.getElementById('ano');
    let mes = document.getElementById('mes');
    let dia = document.getElementById('dia');
    let tipo = document.getElementById('tipo');
    let descricao = document.getElementById('descricao');
    let valor = document.getElementById('valor');

    let despesa = new Despesa(
        ano.value,
        mes.value,
        dia.value,
        tipo.value,
        descricao.value,
        valor.value
    );

    if(despesa.validarCampos()){
      //  db.armazenar(despesa);
      console.log('tudo certo');

    }else{
        openModalError();
    }
}



