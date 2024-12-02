import { useEffect, useState } from "react";

const Payment = () => {
  const initialPayment = {
    evc: false,
    zaad: false,
    sahal: false,
  };

  const [paymentMethod, setPaymentMethod] = useState(initialPayment);

  const handlePaymentSelect = (method) => {
    setPaymentMethod({ ...initialPayment, [method]: true });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Payment Method Selected:", paymentMethod);
    // Add your proceed logic here
  };

  return (
    <div>
      <h2>Pay With</h2>
      <div className="payment-cards">
        <div
          className={`payment-card ${paymentMethod.zaad ? "selected" : ""}`}
          onClick={() => handlePaymentSelect("zaad")}
        >
          <h3>Zaad</h3>
        </div>
        <div
          className={`payment-card ${paymentMethod.evc ? "selected" : ""}`}
          onClick={() => handlePaymentSelect("evc")}
        >
          <h3>Evc Plus</h3>
        </div>
        <div
          className={`payment-card ${paymentMethod.sahal ? "selected" : ""}`}
          onClick={() => handlePaymentSelect("sahal")}
        >
          <h3>Sahal</h3>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="2526..."
          required
        />
        <button type="submit" className="btn-proceed">
          Proceed!
        </button>
      </form>
    </div>
  );
};

export default Payment;