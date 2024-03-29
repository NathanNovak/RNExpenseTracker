import React, {useContext} from 'react';
import ExpensesOutput from '../components/expensesOutput/ExpensesOutput';
import {ExpensesContext} from '../store/expenses-context';

const AllExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);
  return (
    <ExpensesOutput expenses={expensesCtx.expenses} expensesPeriod={'Total'} fallbackText={'No expenses found'}/>
  );
};

export default AllExpenses;
