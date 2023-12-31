import PacketMarkerDetector from "./packet-marker-detector";

export default function main(input: string, distinctChars: number = 4) {
  if (!input) {
    throw new Error("Input is empty");
  }

  const packetMarkerDetector = new PacketMarkerDetector(distinctChars);
  let counter: number = 0;

  for (const character of input) {
    counter++;
    packetMarkerDetector.addCharacter(character);

    if (packetMarkerDetector.hasMarker()) {
      return counter;
    }
  }
}
