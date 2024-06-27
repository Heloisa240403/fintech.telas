function addInvestment() {
    const newInvestmentValue = document.getElementById('new-investment-value').value;
    if (newInvestmentValue) {
        const investmentList = document.getElementById('investment-list');
        const newRow = document.createElement('tr');
        const newTitleCell = document.createElement('td');
        newTitleCell.textContent = 'Novo Investimento';
        const newValueCell = document.createElement('td');
        newValueCell.textContent = `R$ ${parseFloat(newInvestmentValue).toFixed(2)}`;
        newRow.appendChild(newTitleCell);
        newRow.appendChild(newValueCell);
        investmentList.appendChild(newRow);

        // Update total value
        const totalValueElement = document.getElementById('total-value');
        const currentTotal = parseFloat(totalValueElement.textContent.replace('.', '').replace(',', '.'));
        const newTotal = currentTotal + parseFloat(newInvestmentValue);
        totalValueElement.textContent = newTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 });

        // Clear input
        document.getElementById('new-investment-value').value = '';
    }
}

function scrollToNewInvestment() {
    document.getElementById('new-investment-value').focus();
}