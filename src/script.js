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
            novaLinha.classList.add("table-warning"); // Adiciona a classe para a linha ficar amarela
        }
  
  
        // Limpar os campos após adicionar
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
    const linha = button.parentElement.parentElement; // Pega a linha da tabela
    linha.remove();
    alert("Tarefa excluída!");
    }
      else{
        alert("Exclusão cancelada!");
      }
}

function editarLinha(button){
  const linha = button.closest('tr'); // Pega a linha da tabela
  const células = linha.querySelectorAll('td'); // Pega todas as células da linha
  
  // Verifica se está no modo de edição
  const editando = linha.classList.contains('editando');
  
  if(editando){
    // Se estiver editando, salva os valores dos inputs e atualiza as células
    const novoNome = células[0].querySelector('input').value; // Nome
    const novoCusto = células[1].querySelector('input').value; // Custo
    const novaData = células[2].querySelector('input').value; // Data Limite

    // Atualiza as células com os valores editados
    células[0].textContent = novoNome;
    células[1].textContent = 'R$ ' + novoCusto;
    células[2].textContent = novaData;

    button.textContent = 'Editar'; // Muda o texto do botão de volta para "Editar"
    linha.classList.remove('editando'); // Remove a classe 'editando'

    // Verifica se o custo é maior que 1000 para adicionar ou remover a classe 'table-warning'
    if(parseFloat(novoCusto) > 1000){
      linha.classList.add("table-warning"); // Adiciona a classe para a linha ficar amarela
    } 
      else{
        linha.classList.remove("table-warning"); // Remove a classe para voltar à cor original
      }

  } 
    else{
      // Caso contrário, transforma as células em inputs para edição
      células[0].innerHTML = `<input type="text" value="${células[0].textContent}">`; // Nome
      células[1].innerHTML = `<input type="number" value="${células[1].textContent.replace('R$ ', '')}">`; // Custo
      células[2].innerHTML = `<input type="date" value="${células[2].textContent}">`; // Data Limite
      button.textContent = 'Salvar'; // Muda o texto do botão para "Salvar"
      linha.classList.add('editando'); // Adiciona a classe 'editando'
    }
}
  
  

  
  
