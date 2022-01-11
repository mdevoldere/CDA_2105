const modalElement = document.getElementById('show-modal');

const modal = document.getElementById('modal');

const modalInner = document.querySelector('#modal .modal-inner');

const showModal = (event) => {
    console.log(modalElement);
    modal.classList.toggle('active');
}

modalElement.addEventListener('click', showModal);

modal.addEventListener('click', showModal);

modalInner.addEventListener('click', (event) => {
    event.stopPropagation();
});

window.addEventListener('keydown', (event) => {
    console.log(event);
    if(event.key == 'Escape' || event.key == ' ') {
        showModal(event);
    }
});