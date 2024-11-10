const getToday = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset time to midnight for comparison
    return today;
  };
  
  const getTomorrow = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    return tomorrow;
  };
  
  const getNextWeek = () => {
    const nextWeek = new Date();
    nextWeek.setDate(nextWeek.getDate() + 7);
    return nextWeek;
  };
  
  const getNextMonth = () => {
    const nextMonth = new Date();
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    return nextMonth;
  };
  
export const filterOptions = [
    {
      title: "Games",
      key: "game",
      opt: [
        { title: "Football", value: "Football" },
        { title: "Cricket", value: "Cricket" },
        { title: "FIFA", value: "FIFA" },
        { title: "Tekken", value: "Tekken" },
      ],
    },
    {
      title: "Date",
      key: "date",
      opt: [
        { title: "Today", value: getToday() },
        { title: "Tomorrow", value: getTomorrow() },
        { title: "Next week", value: getNextWeek() },
        { title: "Next month", value: getNextMonth() },
      ],
    },
    {
      title: "Distance",
      key: "distance",
      opt: [
        { title: "< 5km", value: 5 },
        { title: "< 10km", value: 10 },
        { title: "< 25km", value: 25 },
        { title: "< 50km", value: 50 },
      ],
    },
  ];