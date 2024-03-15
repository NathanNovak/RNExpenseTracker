import {createContext, useReducer} from 'react';

const dummyExpenses = [
  {
    id: 'e1',
    description: 'A BasketBall',
    amount: 59.99,
    date: new Date('2023-12-19')
  },
  {
    id: 'e2',
    description: 'A Shirt',
    amount: 29.99,
    date: new Date('2023-1-10')
  },
  {
    id: 'e3',
    description: 'Food',
    amount: 106.32,
    date: new Date('2023-12-01')
  },
  {
    id: 'e4',
    description: 'A Book',
    amount:19.99,
    date: new Date('2023-12-14')
  },
  {
    id: 'e5',
    description: 'A Movie',
    amount: 9.99,
    date: new Date('2023-12-15')
  },
  {
    id: 'e6',
    description: 'A BasketBall',
    amount: 59.99,
    date: new Date('2023-12-19')
  },
  {
    id: 'e7',
    description: 'A Shirt',
    amount: 29.99,
    date: new Date('2023-12-10')
  },
  {
    id: 'e8',
    description: 'Food',
    amount: 106.32,
    date: new Date('2023-12-01')
  },
  {
    id: 'e9',
    description: 'A Book',
    amount:19.99,
    date: new Date('2023-12-14')
  },
  {
    id: 'e10',
    description: 'A Movie',
    amount: 9.99,
    date: new Date('2023-12-15')
  },
]

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({description, amount, date}) => {
  },
  deleteExpense: (id) => {
  },
  updateExpense: (id, {description, amount, date}) => {
  },
});

const expensesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString()
      return [{...action.payload, id: id}, ...state]
    case 'UPDATE':
      const updatableExpenseIndex = state.findIndex((expense) => expense.id === action.payload.id);
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = {...updatableExpense, ...action.payload.data};
      const updatedExpenses = [...state]
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case 'DELETE':
      return state.filter(expense => expense.id !== action.payload);
    default:
      return state;
  }
};


const ExpensesContextProvider = ({children}) => {
  const [expensesState, dispatch] = useReducer(expensesReducer, dummyExpenses);

  const addExpense = (expenseData) => {
    dispatch({type: 'ADD', payload: expenseData});
  };

  const deleteExpense = (id) => {
    dispatch({type: 'DELETE', payload: id});
  };

  const updateExpense = (id, expenseData) => {
    dispatch({type: 'UPDATE', payload: {id: id, data: expenseData}});
  };

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  }

  return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>;
};

export default ExpensesContextProvider;
