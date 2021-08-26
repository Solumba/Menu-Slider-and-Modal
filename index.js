const toggleButton = document.getElementById('toggle');
const modalContainer = document.getElementById('modal');
const signupButton = document.getElementById('sign-up');
const closeButton = document.getElementById('close');
const modal = document.querySelector('.modal-container .modal');
const closeButton2 = document.querySelector('#close .fa-times');
const body = document.body;
const windowObject = window;

const toggleSidebar = () => {
    body.classList.toggle('show-nav');
};

//Show modal
const showModal = () => {
    if(modalContainer.classList.contains('modal-anim-close')){
        modalContainer.classList.remove('modal-anim-close');
    }
    modalContainer.style.display = 'block';
    modal.classList.add('modal-anim');
};

//Close Modal when window or close button is clicked
const closeModal = (e) => {
    if(e.target == modalContainer || e.target == closeButton2){
        modalContainer.classList.add('modal-anim-close');
        setTimeout(() => {
            modalContainer.style.display = 'none';
        },900);
    }
};

toggleButton.addEventListener('click', toggleSidebar);
signupButton.addEventListener('click', showModal);
closeButton.addEventListener('click', closeModal);
windowObject.addEventListener('click', closeModal);