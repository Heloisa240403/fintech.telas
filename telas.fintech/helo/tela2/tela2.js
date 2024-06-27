function addRecebimento() {
    const newRecebimentoValue = document.getElementById('new-recebimento-value').value;
    if (newRecebimentoValue) {
        const recebimentoList = document.getElementById('recebimento-list');
        const newRow = document.createElement('tr');
        const newTitleCell = document.createElement('td');
        newTitleCell.textContent = 'Novo Recebimento';
        const newValueCell = document.createElement('td');
        newValueCell.textContent = `R$ ${parseFloat(newRecebimentoValue).toFixed(2)}`;
        const newDateCell = document.createElement('td');
        const today = new Date();
        newDateCell.textContent = today.toLocaleDateString('pt-BR');
        newRow.appendChild(newTitleCell);
        newRow.appendChild(newValueCell);
        newRow.appendChild(newDateCell);
        recebimentoList.appendChild(newRow);

        // Update bank totals (example: add to Banco Itaú)
        const itauTotalElement = document.getElementById('itau-total');
        const currentItauTotal = parseFloat(itauTotalElement.textContent.replace('.', '').replace(',', '.'));
        const newItauTotal = currentItauTotal + parseFloat(newRecebimentoValue);
        itauTotalElement.textContent = newItauTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 });

        // Clear input
        document.getElementById('new-recebimento-value').value = '';
    }
}

function scrollToNewRecebimento() {
    document.getElementById('new-recebimento-value').focus();
}