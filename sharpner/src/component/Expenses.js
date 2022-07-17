import './Expenses1.css';
function Expenses(){
    return (
        <div className ="expense-item">
            <div> July 16th 2022</div>
            <div className ="expense-item__description">
                <h2 className="expense-item h2">Car Insurance</h2>
                <div className="expense-item__price">Rs 2000</div>
            </div>
        </div>

    )
}
export default Expenses;