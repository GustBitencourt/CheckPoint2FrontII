//checa status da api
const checkStatus = (status) => {
    (status) ? "complered" : "not-completed";
    
}

//modelo de criação dos cards com base nos dados recebidos da api
const criarCard = (userId,id,title,completed) => {
    let card = 
    `
    <div class="todo">
        <li class="todo-item">${id}</li>
        <p class="todo-descricao ${checkStatus(completed)}">${title}</p>
        <span class="id-usuario">Id usuário: ${userId}</span>
        <button class="complete-btn">OK</button>
        <button class="delete-btn">X</button>
    </div>
    `
    return card;
}

//carrega os dados da api no momento da inicialização da pagina
window.onload = () => {
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`https://jsonplaceholder.typicode.com/todos/`, options)
        .then(response => {
            response.json()
            .then (dados => {
                for(let dado of dados) {
                    let card = criarCard(dado.userId,dado.id,dado.title,dado.completed);

                    let todoList = document.querySelector(".todo-list"); 
                    todoList.insertAdjacentHTML("beforeend",card); 
                }

            })
        })
}