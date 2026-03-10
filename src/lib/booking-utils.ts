export type CalendarDay = {
  date: Date;
  key: string;
  dayNumber: number;
  isCurrentMonth: boolean;
  isToday: boolean;
  isPast: boolean;
};

const DAY_IN_MS = 1000 * 60 * 60 * 24;

export function startOfDay(date: Date) {
  const next = new Date(date);
  next.setHours(0, 0, 0, 0);
  return next;
}

export function getMonthStart(date: Date) {
  return startOfDay(new Date(date.getFullYear(), date.getMonth(), 1));
}

export function addDays(date: Date, amount: number) {
  const next = new Date(date);
  next.setDate(next.getDate() + amount);
  return startOfDay(next);
}

export function addMonths(date: Date, amount: number) {
  return getMonthStart(
    new Date(date.getFullYear(), date.getMonth() + amount, 1),
  );
}

export function getDateKey(date: Date) {
  return startOfDay(date).toISOString().split("T")[0];
}

export function isSameDay(a: Date, b: Date) {
  return getDateKey(a) === getDateKey(b);
}

export function isSameMonth(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth();
}

export function isBeforeDay(a: Date, b: Date) {
  return startOfDay(a).getTime() < startOfDay(b).getTime();
}

export function isAfterDay(a: Date, b: Date) {
  return startOfDay(a).getTime() > startOfDay(b).getTime();
}

export function differenceInNights(checkIn: Date, checkOut: Date) {
  const start = startOfDay(checkIn).getTime();
  const end = startOfDay(checkOut).getTime();
  return Math.max(0, Math.round((end - start) / DAY_IN_MS));
}

export function formatMonthLabel(date: Date) {
  return new Intl.DateTimeFormat("en-ZA", {
    month: "long",
    year: "numeric",
  }).format(date);
}

export function formatDateLabel(date: Date) {
  return new Intl.DateTimeFormat("en-ZA", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);
}

export function buildMonthGrid(monthDate: Date): CalendarDay[] {
  const firstOfMonth = getMonthStart(monthDate);
  const mondayBasedWeekday = (firstOfMonth.getDay() + 6) % 7;
  const gridStart = addDays(firstOfMonth, -mondayBasedWeekday);
  const today = startOfDay(new Date());

  return Array.from({ length: 42 }, (_, index) => {
    const date = addDays(gridStart, index);

    return {
      date,
      key: getDateKey(date),
      dayNumber: date.getDate(),
      isCurrentMonth: date.getMonth() === firstOfMonth.getMonth(),
      isToday: isSameDay(date, today),
      isPast: isBeforeDay(date, today),
    };
  });
}
