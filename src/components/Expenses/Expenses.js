import {useState} from "react";

import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../UI/ExpensesFilter";

function Expenses(props){

    // Filter from filter up to Expenses (this) component.
    // Store filter data in state here.

    const [filterData, setFilterData] = useState("");

    const onFilterChange = (changedData) => {
        console.log(changedData);
        setFilterData(changedData);
    };

    return(

            <Card className="expenses">
                <div><ExpensesFilter onFilterChange={onFilterChange} /></div>
                {
                    props.expenses.map(expense => {
                        return <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}></ExpenseItem>
                    })
                }
            </Card>
    
    );
}

export default Expenses;