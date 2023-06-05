import {useState} from 'react'
import depositAmount from './Deposit'
import withdrawAmount from './withdraw';
import Transaction from './Transaction';

const Account = () => {
  const [balance, setBalance] = useState(2000);
  const [amount, setAmount] = useState(0);

  const withdraw = () => {
    withdrawAmount(balance, setBalance, amount, setAmount);
    };

    const deposit = () => {
        depositAmount(balance, setBalance, amount, setAmount)
    };

  return (
    <div className="konto">
      <h2 className="saldo">Kontostand: {balance} €</h2>
      <Transaction amount={amount} setAmount={setAmount} deposit={deposit} withdraw={withdraw} />
    </div>
  );
};

export default Account;


