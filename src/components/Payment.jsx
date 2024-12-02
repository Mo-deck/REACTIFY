const Payment = ()=>{
    return(
        <div>
            <h2>Pay With</h2>
            <div className="payment-cards">
                <div className="payment-card">
                    <h3>Zaad Services</h3>
                </div>
                <div className="payment-card">
                    <h3>Evc Plus</h3>
                </div>
                <div className="payment-card">
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