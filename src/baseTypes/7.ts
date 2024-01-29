/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Weekend {
  пн,
  вт,
  ср,
  чт,
  пт,
  сб,
  нд
}

const isWeekend = (day: Weekend): boolean => {
  return day === Weekend.сб || day === Weekend.нд;
}
