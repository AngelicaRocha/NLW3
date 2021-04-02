//Procurar o botão
document.querySelector("#add-time").addEventListener('click', cloneField)

//Executa uma ação 
function cloneField (){
    //Duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //nodes se refere a tags, elementos do HTML
    //Limpra os campos antes de colocar na página
    const fields = newFieldContainer.querySelectorAll('input')
    fields.forEach(function(field) {
        field.value = ""
    }) 
    //Colocar na página
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}  