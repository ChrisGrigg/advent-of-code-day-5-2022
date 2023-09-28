import SupplyStacks from "./supply-stacks";

export default class SupplyStacksSingle extends SupplyStacks {
  moveCrates(fromStack: number, toStack: number, quantity: number) {
    for (let i = 0; i < quantity; i++) {
      const cratesToMove = this.stacks[fromStack].splice(0, 1);
      this.stacks[toStack].unshift(...cratesToMove);
    }
  }
}
