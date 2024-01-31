/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Weekend {
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
  Sun
}

const isWeekend = (day: Weekend): boolean => {
  return day === Weekend.Sat || day === Weekend.Sun;
}
