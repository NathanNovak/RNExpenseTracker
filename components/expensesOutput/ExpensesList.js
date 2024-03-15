import React from 'react';
import {FlatList} from 'react-native';
import ExpenseItem from './ExpenseItem';

const ExpensesList = ({expenses}) => {

  const renderExpenseItem = (itemData) => {
    return <ExpenseItem {...itemData.item}/>
  }

  return (
      <FlatList keyExtractor={(item) => item.id} data={expenses} renderItem={renderExpenseItem}/>
  );
};

export default ExpensesList;
