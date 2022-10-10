import { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "../UI/ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props){

    // Filter from filter up to Expenses (this) component.
    // Store filter data in state here.

    const [filterData, setFilterData] = useState(
        {year: ""}
    );

    const onFilterChange = (changedData) => {
        console.log(changedData);
        // Doesn't depend on previous state, directly.
        setFilterData(changedData);
    };

    return(

            <Card className="expenses">
                <ExpensesFilter onFilterChange={onFilterChange} />
                {
                    props.expenses.map(expense => {
                        return <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}></ExpenseItem>
                    })
                }
            </Card>
    
    );
}

export default Expenses;