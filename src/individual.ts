import {
  IndividualParameters,
  IndividualProps,
  IndividualPointer,
} from "./types";

export class Individual implements IndividualProps {
  prev: IndividualPointer;
  next: IndividualPointer;
  cueNumber: number;

  constructor({ cueNumber, askWhoIsLast }: IndividualParameters) {
    this.cueNumber = cueNumber;
    this.next = null;
    this.prev = askWhoIsLast?.();

    if (this.prev) {
      this.prev.next = this;
    }
  }

  leave(): IndividualProps {
    const current = this;

    if (this.prev) {
      this.prev.next = this.next;
    }

    return current;
  }
}
