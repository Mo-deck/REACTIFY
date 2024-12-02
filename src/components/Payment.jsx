import { useEffect, useState } from "react";

const Payment = ()=>{
    const initialPayment ={
        evc : "false",
        zaad:  "false",
        sahal: "false",
    };
    const [PaymentMethod, setPaymentMethod]= useState(initialPayment);

    const [updated,setUpdated]= useState(false)
    useEffect(() => {}, [updated])

    return(
        <div>
            <h2>Pay With</h2>
           <div className="payment-cards">
              <div className={`payment-card ${PaymentMethod.evc && "selected"}`}
              onClick={() => setPaymentMethod({...initialPayment, evc: true})}>
                <h3>Zaad</h3>
              </div>
              <div className={`payment-card ${PaymentMethod.evc && "selected"}`}
              onClick={() => setPaymentMethod({...initialPayment, evc: true})}>
                <h3>Evc Plus</h3>
              </div>
              <div className={`payment-card ${PaymentMethod.sahal && "selected"}`}
              onClick={() => setPaymentMethod({...initialPayment, sahal: true})}>
                <h3>Sahal</h3>
              </div>
              <form>
                <input type="text" className="form-control" placeholder="2526..." />
                <button className="btn-proceed">Proceed!</button>
              </form>
        </div>
            
        </div>
    )
}

export default Payment