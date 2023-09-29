import { readFileSync } from "fs";
import path from 'path';
import main from "./index";

describe("Tuning Trouble", () => {
  const input = readFileSync(path.resolve(__dirname, "./input.txt"), "utf-8");

  it("calculate marker based on 4 distinct characters", () => {
    expect(main(input)).toEqual(1582);
  });

  it("calculate marker based on 14 distinct characters", () => {
    expect(main(input, 14)).toEqual(3588);
  });
});
