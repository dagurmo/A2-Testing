// import moment from "moment";
import { add as addDateFns, isAfter, isBefore, isSameDay as isSameDayFns } from "date-fns";
import { DATE_UNIT_TYPES } from "./constants";


export function getCurrentYear(): number {
  return new Date().getFullYear();
}

export function add(date: Date, number: number, type = DATE_UNIT_TYPES.DAYS): Date {
  return addDateFns(date, { [type]: number });
}

export function isWithinRange(date: Date, from: Date, to: Date): boolean {
  return isAfter(date, from) && isBefore(date, to);
}

export function isDateBefore(date: Date, compareDate: Date): boolean {
  return isBefore(date, compareDate);
}

export function isSameDay(date: Date, compareDate: Date): boolean {
  return isSameDayFns(date, compareDate);
}
