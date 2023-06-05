const depositAmount = (balance, setBalance, amount, setAmount) => {
    if (amount > 0) {
      setBalance(balance + amount);
      setAmount(0);
    }
};

export default depositAmount;