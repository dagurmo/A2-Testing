import {describe, expect, test} from 'vitest';
import * as dateUtils from '../dateUtils';
import { DATE_UNIT_TYPES } from "../constants";


describe("getCurrentYear", () => {
  test("should return the current year", () => {
    const currentYear = new Date().getFullYear();
    expect(dateUtils.getCurrentYear()).toBe(currentYear);
  });
});


// add
describe("add", () => {
  test("should add days to a date", () => {
    const date = new Date(2021, 0, 1);
    const expectedDate = new Date(2021, 0, 5);
    expect(dateUtils.add(date, 4, DATE_UNIT_TYPES.DAYS)).toEqual(expectedDate);
  });

  test("should add weeks to a date", () => {
    const date = new Date(2022, 0, 1);
    const expectedDate = new Date(2022, 0, 8);
    expect(dateUtils.add(date, 1, DATE_UNIT_TYPES.WEEKS)).toEqual(expectedDate);
  });

  test("should add months to a date", () => {
    const date = new Date(2021, 0, 1);
    const expectedDate = new Date(2021, 4, 1);
    expect(dateUtils.add(date, 4, DATE_UNIT_TYPES.MONTHS)).toEqual(expectedDate);
  });

  test("should add years to a date", () => {
    const date = new Date(2022, 0, 1);
    const expectedDate = new Date(2024, 0, 1);
    expect(dateUtils.add(date, 2, DATE_UNIT_TYPES.YEARS)).toEqual(expectedDate);
  });

});


// isWithinRange
describe("isWithinRange", () => {

  test("should return true if date is within range", () => {

    const date = new Date(2021, 0, 1);
    const from = new Date(2019, 0, 1);
    const to = new Date(2022, 0, 1);

    expect(dateUtils.isWithinRange(date, from, to)).toBe(true);

  });

  test("should return false if date is not within range", () => {
    
    const date = new Date(2024, 0, 1);
    const from = new Date(2020, 0, 1);
    const to = new Date(2022, 0, 1);

    expect(dateUtils.isWithinRange(date, from, to)).toBe(false);

  });
});

// isDateBefore
describe("isDateBefore", () => {

  test("should return true if date is before compare date", () => {

    const date = new Date(2018, 0, 1);
    const compareDate = new Date(2021, 0, 1);

    expect(dateUtils.isDateBefore(date, compareDate)).toBe(true);

  });

  test("should return false if date is not before compare date", () => {
    
    const date = new Date(2022, 0, 1);
    const compareDate = new Date(2021, 0, 1);

    expect(dateUtils.isDateBefore(date, compareDate)).toBe(false);

  });
});


// isSameDay
describe("isSameDay", () => {
  test("should return true if dates are the same day", () => {
    const date = new Date(2022, 3, 5);
    const compareDate = new Date(2022, 3, 5);
    expect(dateUtils.isSameDay(date, compareDate)).toBe(true);
  });

  test("should return false if dates are not the same day", () => {
    const date = new Date(2020, 1, 1);
    const compareDate = new Date(2021, 0, 2);
    expect(dateUtils.isSameDay(date, compareDate)).toBe(false);
  });
});