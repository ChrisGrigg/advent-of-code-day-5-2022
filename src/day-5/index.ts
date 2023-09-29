import SupplyStacks, { SupplyStack } from "./supply-stacks";

function parseCrateStacks(input: string, supplyStacks: SupplyStack): SupplyStacks {
  const lines = input.split("\n");

  // Iterate over the lines in reverse order, starting at the second to last line.
  // The first line contains the stack numbers, so we can skip it.
  for (let i = lines.length - 2; i >= 0; i--) {
    const line = lines[i];

    const characters = line.split("");

    // Iterate over the characters in groups of 4.
    for (let j = 0; j < characters.length; j += 4) {
      const crate = characters[j + 1];

      if (crate !== " ") {
        supplyStacks.stacks[j / 4] = supplyStacks.stacks[j / 4] || [];
        supplyStacks.stacks[j / 4].unshift(crate);
      }
    }
  }
  
  return supplyStacks;
}

function parseMoveInstruction(instruction: string): [number, number, number] {
  const regex = /move (\d+) from (\d+) to (\d+)/;
  const match = instruction.match(regex);

  if (!match) {
    throw new Error(`Invalid move instruction: ${instruction}`);
  }

  const [quantity, fromStack, toStack] = match.slice(1).map((n) => parseInt(n));

  return [quantity, fromStack - 1, toStack - 1];
}

function executeMoveInstructions(supplyStacks: SupplyStacks, instructions: string[]) {
  for (const instruction of instructions) {
    const [quantity, fromStack, toStack] = parseMoveInstruction(instruction);

    supplyStacks.moveCrates(fromStack, toStack, quantity);
  }
}

function getTopOfEachStack(supplyStacks: SupplyStacks): string[] {
  return supplyStacks.stacks.map((stack) => stack[0]);
}

function main(input: string, supplyStack: SupplyStack) {
  if (!input) {
    throw new Error("Input is empty");
  }

  if (!supplyStack) {
    throw new Error("Supply stack is empty");
  }

  const [crateStacksInput, moveInstructionsInput] = input.split("\n\n");

  const supplyStacks = parseCrateStacks(crateStacksInput, supplyStack);

  const moveInstructions = moveInstructionsInput.split("\n");

  executeMoveInstructions(supplyStacks, moveInstructions);

  const topOfEachStack = getTopOfEachStack(supplyStacks);

  return topOfEachStack.join("");
}

export function singleStackMain(input: string, supplyStack: SupplyStack) {
  return main(input, supplyStack);
}

export function multipleStacksMain(input: string, supplyStack: SupplyStack) {
  return main(input, supplyStack);
}
