export const empty = null;

export const getDate = (dateTask, currentDate, completed) => {
  if (completed) return 'Выполнено';

  if (dateTask) {
    if (dateTask < currentDate) {
      return 'Просрочено!';
    }
    return `до ${dateTask}`;
  }
  return 'Бессрочно';
};
