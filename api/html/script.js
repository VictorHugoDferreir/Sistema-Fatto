const tarefa = {
  nome: " ",
  custo: 0,
  dataLimite: " ",
  id: " "
}

async function adicionarLinha(){
    const tabela = document.getElementById("TabelaDeTarefas").getElementsByTagName('tbody')[0];
    tarefa.nome = document.getElementById("nome").value;
    tarefa.custo = document.getElementById("custo").value;
    tarefa.dataLimite = document.getElementById("dataLimite").value;
    
      if(tarefa.nome && tarefa.custo && tarefa.dataLimite){

        //let retorno = await incluirPost(tarefa);

        //alert(retorno.id);

        const novaLinha = tabela.insertRow();
        novaLinha.setAttribute('data-id', retorno.id);
        const celulaNome = novaLinha.insertCell(0);
        const celulaCusto = novaLinha.insertCell(1);
        const celulaDataLimite = novaLinha.insertCell(2);
        const celulaAcoes = novaLinha.insertCell(3);
        const celulaEdit = novaLinha.insertCell(4);
  
        celulaNome.textContent = tarefa.nome;
        celulaCusto.textContent = 'R$ ' + tarefa.custo;
        celulaDataLimite.textContent = tarefa.dataLimite;
        celulaAcoes.innerHTML = '<button class="btn btn-danger" onclick="excluirLinha(this)">Excluir</button>';
        celulaEdit.innerHTML = '<button class="btn btn-primary" onclick="editarLinha(this)">Editar</button>';
  
        
          if(tarefa.custo > 1000){
              novaLinha.classList.add("table-warning"); // adiciona a classe para a linha ficar amarela
          }
  
  
        //limpar os campos após adicionar
        document.getElementById("nome").value = '';
        document.getElementById("custo").value = '';
        document.getElementById("dataLimite").value = '';
      } 
        else{
          alert("Por favor, preencha todos os campos.");
        }
}
  
function excluirLinha(button) {
  const linha = button.parentElement.parentElement; //pega a linha da tabela
  const id = linha.getAttribute('data-id'); //pega o ID armazenado no atributo data-id

  let resposta = confirm("Você tem certeza que deseja excluir esta tarefa?");
  if(resposta){
    deletarPost(id).then(() => {
      linha.remove(); // Remove a linha da tabela após exclusão no banco
      alert("Tarefa excluída!");
    }).catch((error) => {
      console.error("Erro ao excluir tarefa:", error);
      alert("Não foi possível excluir a tarefa.");
    });
  } 
    else {
      alert("Exclusão cancelada!");
    }
}


function editarLinha(button){
  const linha = button.closest('tr');
  const id = linha.getAttribute('data-id'); // Obtém o ID da tarefa
  const celulas = linha.querySelectorAll('td');
  const editando = linha.classList.contains('editando');

  if(editando){
    const tarefaEditada = {
      nome: celulas[0].querySelector('input').value,
      custo: celulas[1].querySelector('input').value,
      dataLimite: celulas[2].querySelector('input').value
    };

    atualizarPost(tarefaEditada, id)
      .then(() => {
        celulas[0].textContent = tarefaEditada.nome;
        celulas[1].textContent = 'R$ ' + tarefaEditada.custo;
        celulas[2].textContent = tarefaEditada.dataLimite;

        linha.classList.remove('editando');
        button.textContent = 'Editar';

        //atualiza a cor da linha com base no custo
        if(parseFloat(tarefaEditada.custo) > 1000){
          linha.classList.add("table-warning");
        } 
          else {
            linha.classList.remove("table-warning");
          }
        })
      .catch((error) => {
        console.error("Erro ao atualizar tarefa:", error);
        alert("Não foi possível salvar a edição.");
      });
  } 
    else{
      celulas[0].innerHTML = `<input type="text" class="form-control" value="${celulas[0].textContent}">`;
      celulas[1].innerHTML = `<input type="number" class="form-control" value="${celulas[1].textContent.replace('R$ ', '')}">`;
      celulas[2].innerHTML = `<input type="date" class="form-control" value="${celulas[2].textContent}">`;

    button.textContent = 'Salvar';
    linha.classList.add('editando');
  }
}

//métodos http
async function jsonReposta(resposta){
  if(!resposta.ok){
    throw new Error(`${resposta.status} - ${resposta.statusText}`);
  }
 
  const json = await resposta.json();
  return json;
}

async function obterPost(id){
  const resposta = await fetch('http://localhost:5000/tarefas/'+id);
  return await jsonReposta(resposta);
}

async function incluirPost(data){
  const resposta = await fetch('http://localhost:5000/tarefas', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    }
  });
  return await jsonReposta(resposta);  
}

async function atualizarPost(data, id){
  const resposta = await fetch('http://localhost:5000/tarefas/'+id, {
    method: 'PATCH',
    body: JSON.stringify(data),
    headers: {
        'Content-type': 'application/json;charset=utf-8'
    }
  });
  return jsonReposta(resposta);
  
}

async function deletarPost(id){
    const resposta = await fetch('http://localhost:5000/tarefas/'+id, {
      method: 'DELETE',
      headers: {
          'Content-type': 'application/json;charset=utf-8'
      }
    });
    return jsonReposta(resposta);
}
  

  

  
  
