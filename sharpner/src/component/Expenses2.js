import './Expenses1.css'
function Expenses2(props){
// const expenseDate = new Date(2022,7,17);
// const expenseTitle = "Car Insurance";
// const expenseAmount = 2000;

    return (
        <div className="expense-item">
           <div>{props.date.toISOString()}</div>
            <div className ="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </div>
    )
}
export default Expenses2;