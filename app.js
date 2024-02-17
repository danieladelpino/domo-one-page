const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


const sendForm = () => {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || phone === "" || message === "") {

        Swal.fire({
            position: "center",
            icon: "error",
            title: "Por favor, complete todos los campos.",
            showConfirmButton: true 
          });

    } else {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "¡Formulario enviado con éxito!",
            showConfirmButton: false,
            timer: 1500
          });

        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("message").value = "";
    }
}


const buttons = document.querySelectorAll('.menu-btn, .menu-btn2, .menu-btn3');


buttons.forEach(button => {
    button.addEventListener('click', () => {
  
        Swal.fire({
            title: "More Info",
            text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur reprehenderit iure suscipit
            ex possimus omnis, placeat expedita esse libero perferendis modi, amet quae vero, earum totam
            repellat quaerat unde accusantium.`,
            icon: "info"
          });

    });
});

