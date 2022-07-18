import './Expenses1.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';


function Expenses2(props){
// const expenseDate = new Date(2022,7,17);
// const expenseTitle = "Car Insurance";
// const expenseAmount = 2000;

    return (
        <Card className="expense-item">
           {/* <div>{props.date.toISOString()}</div> */}
           <ExpenseDate date={props.date} title={props.title} amount={props.amount} />
            {/* <div className ="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div> 
            </div> */}
        </Card>
    )
}
export default Expenses2;