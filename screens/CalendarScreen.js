import {format} from 'date-fns';
import React, {useContext, useState} from 'react';
import {StyleSheet} from 'react-native';
import CalendarView from '../components/CalendarView';
import LogContext from '../contexts/LogContext';
import FeedList from '../components/FeedList';

function CalendarScreen() {
  const {logs} = useContext(LogContext);
  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), 'yyyy-MM-dd'),
  );

  const markedDates = logs.reduce((acc, cur) => {
    const formattedDate = format(new Date(cur.date), 'yyyy-MM-dd');
    acc[formattedDate] = {marked: true};
    return acc;
  });

  const filteredLogs = logs.filter(
    log => format(new Date(log.date), 'yyyy-MM-dd') === selectedDate,
  );

  return (
    <FeedList
      ListHeaderComponent={
        <CalendarView
          markedDates={markedDates}
          selectedDate={selectedDate}
          onSelectDate={setSelectedDate}
        />
      }
      logs={filteredLogs}
    />
  );
}

export default CalendarScreen;
