const form = document.querySelector('#formCadastro');

const cep = document.querySelector('#cep');

const buscarCep = document.querySelector('#buscarCep');


// Ouvir o evento de submit do Busca CEP

buscarCep.addEventListener("click", async function() {
    const valor = cep.value.replace(/\D/g, "");
    if (valor.length !== 8) {
        alert("Digite um CEP válido.");
        return;
    } try {
        const resposta = await fetch(`https://viacep.com.br/ws/${valor}/json/`);

        const dados = await resposta.json();

        if (!resposta.ok || dados.erro) 
            throw new Error("CEP não encontrado");
        document.querySelector('#logradouro').value = dados.logradouro;
        document.querySelector('#bairro').value = dados.bairro;
        document.querySelector('#estado').value = dados.estado;
        document.querySelector('#cidade').value = dados.localidade;

    } catch (erro) {
        alert(erro, "erro");
    };
});


// Ouvir o evento de submit do formulário e cria um Array de objetos

form.addEventListener("submmit", function(event) {
    event.preventDefault();

    console.log(Object.fromEntries([...form.elements]
        .filter(element => element.id)
        .map(element => [element.id, element.value])
    ));

    form.reset();
});


