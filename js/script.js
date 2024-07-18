function calculate(){
    let morAmount = Number(document.getElementById('amount').value);
    let morTerm = Number(document.getElementById('term').value);
    let intRate = Number(document.getElementById('rate').value);
    let morType = document.querySelector('input[name="mortgage"]:checked');


    if (!morType) {
        throw new Error("Please select a mortgage type.")
    }

    let monthlyPayment;
    let monthlyInterestRate = intRate / 100 / 12;
    let numberOfPayments = morTerm * 12;

    if(morType.value === '1'){
        monthlyPayment = morAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
        (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
    }
    else if(morType.value === '2'){
        monthlyPayment = morAmount * monthlyInterestRate;
    }
    else {
        throw new Error("Invalid mortgage type. Please specify 'Repayments' or 'InterestRate'. ");
    }

    let totalRepayment = monthlyPayment * numberOfPayments;
    
    document.querySelector('.default-res').classList.add('hidden');
    document.querySelector('.results').classList.remove('hidden');
    document.getElementById('monthlyPayment').textContent = `R$ ${new Intl.NumberFormat('pt-BR').format(monthlyPayment.toFixed(2))}`
    document.getElementById('totalRepayment').textContent = `R$ ${new Intl.NumberFormat('pt-BR').format(totalRepayment.toFixed(2))}`;

}
