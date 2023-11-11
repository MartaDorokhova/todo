export const numberOfTask = (num: number) => {
  if (num === 1 || num === 21) return "задача";
  if (num >= 2 && num < 5) return "задачи";
  if (num >= 5) return "задач";
};
