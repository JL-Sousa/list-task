
let valortarefa = document.getElementById("tarefa");
let ullistar = document.getElementById("prioridades");
let botaoclicar = document.getElementById("btn");
let uloutras = document.getElementById("outras");
let btnoutras = document.getElementById("btnOutras");

let tarefas  = JSON.parse(localStorage.getItem("@tarefas")) || [];

let outras = [];

function listartarefas(){
    ullistar.innerHTML = "";

    tarefas.map( (todo) =>{
        let lilista = document.createElement("li");
        let texttarefa = document.createTextNode(todo);
        
        lilista.appendChild(texttarefa);
        ullistar.appendChild(lilista);
    })
}

function outrastarefas() {
    uloutras.innerHTML = "";

    outras.map( (todo) =>{
        let lioutras = document.createElement("li");
        let textoutras = document.createTextNode(todo);

        lioutras.appendChild(textoutras);
        uloutras.appendChild(lioutras);
    })
}

outrastarefas();

listartarefas();

function adicionartarefa(){
    if(valortarefa.value === ""){
        alert("digite alguma tarefa!!");
        return false;
    }else{
        
        let novatarefa = valortarefa.value;
        tarefas.push(novatarefa);
        valortarefa.value = "";

        listartarefas();
        salvardados();
    }

}

function adcionaroutras(){
    if(valortarefa.value === ""){
        alert("digite alguma tarefa!!");
        return false;
    }else{
        let outratarefa = valortarefa.value;
        outras.push(outratarefa);
        outratarefa.value = "";

        outrastarefas();

    }
}

botaoclicar.onclick = adicionartarefa;

btnoutras.onclick = adcionaroutras;

function salvardados(){
    localStorage.setItem("@tarefas", JSON.stringify(tarefas));
}



