import { describe, it, expect } from "vitest";
import {
  columnsToNumber,
  letterToNumber,
  numberToColumns,
  numberToLetter,
} from "./column-to-int";

describe("converting excel columns to numbers", () => {
  it("converts columns correctly", () => {
    expect(columnsToNumber("A")).toBe(0);
    expect(columnsToNumber("C")).toBe(2);
    expect(columnsToNumber("AA")).toBe(26);
    expect(columnsToNumber("AQ")).toBe(42);
    expect(columnsToNumber("BA")).toBe(52);
    expect(columnsToNumber("GT")).toBe(201);
    expect(columnsToNumber("AAA")).toBe(702);
    expect(columnsToNumber("AJV")).toBe(957);
    expect(columnsToNumber("ALK")).toBe(998);
    expect(columnsToNumber("ALM")).toBe(1000);

    // input invalid
    expect(() => columnsToNumber("123")).toThrowError();
  });
});

describe("letter to number", () => {
  it("converts letter to number", () => {
    expect(letterToNumber("A")).toBe(0);
    expect(letterToNumber("C")).toBe(2);
    expect(letterToNumber("Z")).toBe(25);
    expect(() => letterToNumber("4")).toThrowError();
    expect(() => letterToNumber("fskjda")).toThrowError();
  });
});

describe("number to letter", () => {
  it("convert numbers to letters", () => {
    expect(numberToLetter(0)).toBe("A");
    expect(numberToLetter(20)).toBe("U");
    expect(numberToLetter(13)).toBe("N");
    expect(numberToLetter(25)).toBe("Z");
  });
});

describe("number to columns", () => {
  it("convert numbers to columns", () => {
    expect(numberToColumns(0)).toBe("A");
    expect(numberToColumns(33)).toBe("AH");
    expect(numberToColumns(384)).toBe("NU");
    expect(numberToColumns(889)).toBe("AHF");
  });
});
