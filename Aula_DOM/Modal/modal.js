const openModal = document.getElementById('openModal');

const modalWrapper = document.querySelector('.modal-wrapper');


// Ao clicar no botão eu removo a propriedade Invisible da classe
// faazendo ele aparecer na tela.
openModal.onclick = function(){
    modalWrapper.classList.remove('invisible');
}

// ao clicar na tecla 'ESC' o modal deve desaparecer novamente
// por isso passa-se o (event) dentro da função , para saber que o evento de click é exatamente na tecla digitada 'ESC'.  ps: poder ser qualquer outra mas o exercicio pede a 'ESC' 
document.addEventListener('keydown', function(event){
    const isEsckey = event.key == 'Escape' // aqui ele confirma no console se esse evento é o de chave (key) 'ESC' (Escape) 
    if(isEsckey){
        modalWrapper.classList.add('invisible')
    }
});