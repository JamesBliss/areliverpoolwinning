import React from 'react';

// components
import Group from './Group';

//
const Day = ({data}) => {
  const { groupedMatches } = data;
  return groupedMatches.map((group) =>  (<Group key={ group.utcDate } data={ group } /> ))
}

export default Day;