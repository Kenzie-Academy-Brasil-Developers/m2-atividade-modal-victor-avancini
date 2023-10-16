/* Desenvolva seu código aqui... */

function handleModal(){
    const link = document.querySelector(".form__register-link")
    const modalController = document.querySelector(".modalController")

    link.addEventListener("click", function(){
        modalController.showModal();
        closeModal()
    });
}

handleModal()

function closeModal(){
    const button = document.querySelector(".closeModal")
    const modalController = document.querySelector(".modalController")

    button.addEventListener("click", function(){
        modalController.close();
    })
}