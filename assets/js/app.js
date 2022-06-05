//===============LIMPAR OS CAMPOS DOs INPUTS
const clearFields = () => {
    const fields = document.querySelectorAll('.input-field');
    fields.forEach(field => field.value = "");
}//============================


//=================CLASSES=============================//
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
    
    recuperarTodosRegistros(){

        //Array de despesas
        let despesas = [];

        let id = localStorage.getItem('id');

        //recupera todas as despesas cadastradas em localStorage
        for(let i = 1; i <= id; i ++){
             //recupera a despesa
            let despesa = JSON.parse(localStorage.getItem(i));

        //verifica se índices foram removidos do localStorage e que se tornaram nulos
        //se houver, nesse caso o índice será pulado 

        if(despesa === null){

            continue
        }

            despesas.push(despesa);
        }     
        
        return despesas;
        
    }
}
let db = new DB();


//===========ADICIONA NOVA DESPESA===================//
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
        db.armazenar(despesa);
        openModalSuccess();
        clearFields();

    }else{
        openModalError();
    }
}

//============LISTA AS DESPESAS========================//
function carregarListaDespesas(){

    let despesas = [];
    despesas = db.recuperarTodosRegistros();

    //seleciona o elemento tbody da tabela
    var listaDespesas = document.getElementById('myTable')
    /*
    <tr>
        <td data-label="Ano"></td>
        <td data-label="Mês"></td>
        <td data-label="Dia"></td>
        <td data-label="Categoria"></td>
        <td data-label="Descrição"></td>
        <td data-label="Valor"></td>
    </tr>
    */

    //percorre o array despesas, listando de forma dinâmica todos os registros
    despesas.forEach(function(d){

        //criando a linha -> 'tr'// 
        let linha = listaDespesas.insertRow();

        //criando as colunas -> 'td'// 
        linha.innerHTML = 
        `
            <td data-label="Data">${d.dia}/${d.mes}/${d.ano}</td>
            <td data-label="Categoria">${d.tipo}</td>
            <td data-label="Descrição">${d.descricao}</td>
            <td data-label="Valor">${d.valor}</td>
            <td data-label="Ações">
                <button type="button" class="btn-edit">Edd</button>
                <button type="button" class="btn-delete">Del</button>
            </td>
        `    
    })
}






