import { readFileSync } from "fs";
import path from 'path';
import main from "./index";

describe("Supply Stacks", () => {
  it("get items from each stack", () => {
    const input = readFileSync(path.resolve(__dirname, "../input.txt"), "utf-8");
    expect(main(input)).toEqual('CVCWCRTVQ');
  });
});
