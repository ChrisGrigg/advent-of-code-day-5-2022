type Crate = string;
type Stack = Array<Crate>;

export default class SupplyStacks {
  public stacks: Stack[];

  constructor(stacks: Stack[]) {
    this.stacks = stacks;
  }

  moveCrates(fromStack: number, toStack: number, quantity: number) {
    for (let i = 0; i < quantity; i++) {
      const cratesToMove = this.stacks[fromStack].splice(0, 1);
      this.stacks[toStack].unshift(...cratesToMove);
    }
  }

  getTopOfEachStack(): string[] {
    return this.stacks.map((stack) => stack[0]);
  }
}
