import { readFileSync } from "fs";
import path from 'path';
import { multipleStacksMain, singleStackMain } from "./index";

describe("Supply Stacks", () => {
  const input = readFileSync(path.resolve(__dirname, "../input.txt"), "utf-8");

  it("get items from each stack", () => {
    expect(singleStackMain(input)).toEqual('CVCWCRTVQ');
  });

  it("get items from each stack", () => {
    expect(multipleStacksMain(input)).toEqual('CNSCZWLVT');
  });
});
