const bank = [];

// Debit card
// deposit: если вносимая сумма больше 5000 - действие не совершается
// withdraw: нельзя уходить в минус
const bankAccount = {
  accountNumber: "123456789",
  accountHolderName: "Alice",
  balance: 0,
  deposit(sum) {
    // TODO
    sum >= 5 && sum <= 5000
      ? (this.balance += sum)
      : alert("Вводимая сумма для пополнения баланса некорректная");
  },
  withdraw(sum) {
    // TODO
    sum <= this.balance && sum > 0
      ? this.balance -= sum
      : alert("Вводимая сумма для снятия баланса некорректная");
  },
  checkBalance() {
    alert(this.balance + "€");
  },
};

bankAccount.deposit(100);
console.log(bankAccount.balance);

function createAccount() {
bankAccount.withdraw(50);
console.log(bankAccount.balance);

  const nameInput = document.getElementById("name");
  const name = nameInput.value.trim();

  

  function createAccount() {
    const nameInput = document.getElementById('name');
    const name = nameInput.value.trim();
    if (name) {
      bank.push({
        ...bankAccount,
        accountNumber: `${bank.length + 1}`,
        accountHolderName: name
      });
      alert("Account created successfully");
      console.log(bank);
      nameInput.value = '';
    } else {
      alert("Enter your name")

      updateAccountsList();
    }
    function showAccounts() {
      updateAccountsList();
    }
    function updateAccountsList() {
      const accountList = document.getElementById('accountList');
      const showSection = document.getElementById('show');
      accountList.innerHTML = '';
      if (bank.length > 0) {
        showSection.style.display = 'block';
        for (const account of bank) {
          const li = document.createElement('li');
          li.textContent = `ID: ${account.accountNumber}, Name: ${account.accountHolderName}, Balance: ${account.balance}`;
          accountList.appendChild(li);
        }
      } else {
        showSection.style.display = 'none';
      }
    }
    }
  }