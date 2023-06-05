const Transaction = ({ amount, setAmount, deposit, withdraw }) => {
    return (
        <div>
        <input
        type="number"
        className="geldbetrag"
        value={amount}
        onChange={(e) => setAmount(parseFloat(e.target.value))}
      />
      <button className="einzahlen" onClick={deposit}>
        Einzahlen
      </button>
      <button className="auszahlen" onClick={withdraw}>
        Auszahlen
      </button>
        </div>
    );
};
export default Transaction;