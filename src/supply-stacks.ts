export interface SupplyStack {
  stacks: string[][];
  moveCrates(fromStack: number, toStack: number, quantity: number): void;
  getTopOfEachStack(): string[];
}

export default class SupplyStacks implements SupplyStack {
  public stacks: Stack[];

  constructor(stacks: Stack[]) {
    this.stacks = stacks;
  }

  moveCrates(fromStack: number, toStack: number, quantity: number) {
    throw new Error('Not implemented');
  }

  getTopOfEachStack(): string[] {
    return this.stacks.map((stack) => stack[0]);
  }
}
