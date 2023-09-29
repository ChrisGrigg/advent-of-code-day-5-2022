import SupplyStacks from "./supply-stacks";

export default class SupplyStacksMultiple extends SupplyStacks {
  moveCrates(fromStack: number, toStack: number, quantity: number) {
    const cratesToMove = this.stacks[fromStack].splice(0, quantity);
    this.stacks[toStack].unshift(...cratesToMove);
  }
}
