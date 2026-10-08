const form = document.querySelector('#formCadastro');

// Ouvir o evento de submit do formulário e cria um Array de objetos

form.addEventListener("submmit", function(event) {
    event.preventDefault();

    console.log(Object.fromEntries([...form.elements]
        .filter(element => element.id)
        .map(element => [element.id, element.value])
    ));

    form.reset();
});


