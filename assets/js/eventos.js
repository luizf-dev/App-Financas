//=============ATIVAR MODAL DE ERRO NA GRAVAÇÃO DOS DADOS==================
const openModalError = () => document.getElementById('modalError').classList.add('active')

const closeModalError = () => {
   // clearFields();
    document.getElementById('modalError').classList.remove('active');
}
//=======================================



//=============ATIVAR MODAL DE SUCESSO NA GRAVAÇÃO DOS DADOS==================
const openModalSuccess = () => document.getElementById('modalSuccess').classList.add('active')

const closeModalSuccess = () => {
    document.getElementById('modalSuccess').classList.remove('active');
}
//==================================================================


//=============== EVENTOS DE CLICK DOS BOTÕES ERROR
document.getElementById('modalCloseError')
    .addEventListener('click', closeModalError)

document.getElementById('cancelarModalError')
   .addEventListener('click', closeModalError)
//==============================================

//=============== EVENTOS DE CLICK DOS BOTÕES SUCCESS
document.getElementById('modalCloseSuccess')
   .addEventListener('click', closeModalSuccess)

document.getElementById('cancelarModalSuccess')
    .addEventListener('click', closeModalSuccess)
//==============================================