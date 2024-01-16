import {
  IndividualParameters,
  IndividualProps,
  IndividualPointer,
} from "./types";

export class Individual implements IndividualProps {
  prev: IndividualPointer;
  next: IndividualPointer;
  cueNumber: number;
  amITheLastOne: boolean;

  constructor({ cueNumber, askWhoIsLast }: IndividualParameters) {
    this.cueNumber = cueNumber;
    this.next = null;
    this.amITheLastOne = true;
    this.prev = askWhoIsLast?.();

    if (this.prev) {
      this.prev.next = this;
      this.prev.amITheLastOne = false;
    }
  }

  leave(): IndividualProps {
    const current = this;

    if (this.prev) {
      this.prev.next = this.next;

      if (!this.next) {
        this.prev.amITheLastOne = true;
      }
    }

    return current;
  }
}
