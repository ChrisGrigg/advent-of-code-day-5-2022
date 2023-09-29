export default class PacketMarkerDetector {
  private buffer: string = "";

  constructor(private markerLength: number) {}

  addCharacter(character: string) {
    this.buffer += character;

    if (this.buffer.length > this.markerLength) {
      this.buffer = this.buffer.slice(-this.markerLength);
    }
  }

  hasMarker(): boolean {
    return new Set(this.buffer).size === this.markerLength;
  }
}
