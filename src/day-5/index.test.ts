import { readFileSync } from "fs";
import path from 'path';
import { multipleStacksMain, singleStackMain } from "./index";
import SupplyStacksSingle from "./supply-stacks-single";
import SupplyStacksMultiple from "./supply-stacks-multiple";
import SupplyStacks, { SupplyStack } from "./supply-stacks";

describe("Supply Stacks", () => {
  const input = readFileSync(path.resolve(__dirname, "./input.txt"), "utf-8");
  const supplyStackSingle = new SupplyStacksSingle([]);
  const supplyStacksMultiple = new SupplyStacksMultiple([]);
  const supplyStack = new SupplyStacks([]);

  it("get items from each stack", () => {
    expect(singleStackMain(input, supplyStackSingle)).toEqual('CVCWCRTVQ');
  });

  it("get items from each stack", () => {
    expect(multipleStacksMain(input, supplyStacksMultiple)).toEqual('CNSCZWLVT');
  });

  it("throws error when input is empty", () => {
    expect(() => singleStackMain("", supplyStackSingle)).toThrowError("Input is empty");
    expect(() => multipleStacksMain("", supplyStacksMultiple)).toThrowError("Input is empty");
  });

  it("throws error when supply stack is empty", () => {
    expect(() => singleStackMain(input, null as unknown as SupplyStack)).toThrowError("Supply stack is empty");
    expect(() => multipleStacksMain(input, null as unknown as SupplyStack)).toThrowError("Supply stack is empty");
  });

  it ("throws error when SupplyStacks 'moveCrates' parent function is called", () => {
    expect(supplyStack.moveCrates).toThrowError("Not implemented");
  });
});
