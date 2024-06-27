function addDespesa() {
    const newDespesaValue = document.getElementById('new-despesa-value').value;
    if (newDespesaValue) {
        const newRow = document.createElement('tr');
        const newTitleCell = document.createElement('td');
        newTitleCell.textContent = 'Nova Despesa';
        const newValueCell = document.createElement('td');
        newValueCell.textContent = `R$ ${parseFloat(newDespesaValue).toFixed(2)}`;
        newRow.appendChild(newTitleCell);
        newRow.appendChild(newValueCell);

        // Append to a specific list (example: Variáveis)
        const variaveisList = document.getElementById('variaveis-list');
        variaveisList.appendChild(newRow);

        // Clear input
        document.getElementById('new-despesa-value').value = '';
    }
}

function scrollToNewDespesa() {
    document.getElementById('new-despesa-value').focus();
}