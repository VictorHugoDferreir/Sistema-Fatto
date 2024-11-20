import axios from 'axios'

function adicionarLinha(){
    const tabela = document.getElementById("TabelaDeTarefas").getElementsByTagName('tbody')[0];
    const nome = document.getElementById("nome").value;
    const custo = document.getElementById("custo").value;
    const dataLimite = document.getElementById("dataLimite").value;
    
      if(nome && custo && dataLimite){
        const novaLinha = tabela.insertRow();
        const celulaNome = novaLinha.insertCell(0);
        const celulaCusto = novaLinha.insertCell(1);
        const celulaDataLimite = novaLinha.insertCell(2);
        const celulaAcoes = novaLinha.insertCell(3);
        const celulaEdit = novaLinha.insertCell(4);
  
        celulaNome.textContent = nome;
        celulaCusto.textContent = 'R$ ' + custo;
        celulaDataLimite.textContent = dataLimite;
        celulaAcoes.innerHTML = '<button class="btn btn-danger" onclick="excluirLinha(this)">Excluir</button>';
        celulaEdit.innerHTML = '<button class="btn btn-primary" onclick="editarLinha(this)">Editar</button>';
  
        
          if(custo > 1000){
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
  
function excluirLinha(button){
    
    let resposta = confirm("Você tem certeza que deseja excluir esta tarefa?");
    
    if(resposta){
    const linha = button.parentElement.parentElement; // pega a linha da tabela
    linha.remove();
    alert("Tarefa excluída!");
    }
      else{
        alert("Exclusão cancelada!");
      }
}

function editarLinha(button){
  const linha = button.closest('tr'); // pega a linha da tabela
  const celulas = linha.querySelectorAll('td'); // pega todas as células da linha
  
  //verifica se está no modo de edição
  const editando = linha.classList.contains('editando');
  
  if(editando){
    //se estiver editando, salva os valores dos inputs e atualiza as células
    const novoNome = celulas[0].querySelector('input').value; // Nome
    const novoCusto = celulas[1].querySelector('input').value; // Custo
    const novaData = celulas[2].querySelector('input').value; // Data Limite

    //atualiza as células com os valores editados
    celulas[0].textContent = novoNome;
    celulas[1].textContent = 'R$ ' + novoCusto;
    celulas[2].textContent = novaData;

    button.textContent = 'Editar'; //muda o texto do botão de volta para "Editar"
    linha.classList.remove('editando'); // Remove a classe 'editando'

    //verifica se o custo é maior que 1000 para adicionar ou remover a classe 'table-warning'
    if(parseFloat(novoCusto) > 1000){
      linha.classList.add("table-warning"); //adiciona a classe para a linha ficar amarela
    } 
      else{
        linha.classList.remove("table-warning"); //remove a classe para voltar à cor original
      }

  } 
    else{
      //caso contrário, transforma as células em inputs para edição
      celulas[0].innerHTML = `<input type="text" class="form-control" value="${celulas[0].textContent}">`; // Nome
      celulas[1].innerHTML = `<input type="number" class="form-control" value="${celulas[1].textContent.replace('R$ ', '')}">`; // Custo
      celulas[2].innerHTML = `<input type="date" class="form-control" value="${celulas[2].textContent}">`; // Data Limite
      button.textContent = 'Salvar'; //muda o texto do botão para "Salvar"
      linha.classList.add('editando'); //adiciona a classe 'editando'
    }
}
  

  

  
  
