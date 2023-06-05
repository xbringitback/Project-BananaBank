const withdrawAmount = (balance, setBalance, amount, setAmount) => {
    if (amount !== 0) {
      setBalance(balance - amount);
      setAmount(0);
    }
};
export default withdrawAmount;

