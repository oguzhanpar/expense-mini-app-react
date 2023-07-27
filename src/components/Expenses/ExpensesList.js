import React from 'react'
import ExpenseItem from "./ExpenseItem"
import './ExpensesList.css'


const ExpensesList = (props) => {

    if (props.items.lenght === 0) {
        return <h2 className="expeneses-list__fallback">Found no ecpenses</h2>;
    }

    return (
        <ul className="expenses-list">
            {
                props.items.map((expense) => (
                    <ExpenseItem
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                        key={expense.id}
                    />
                ))}
        </ul>
    )
}

export default ExpensesList