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
        celulaEdit.innerHTML = '<button class="btn btn-primary" onclck="editarLinha(this)">Editar</button>';
  
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
  
  

  
  
