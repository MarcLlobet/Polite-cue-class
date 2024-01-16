import { Individual } from "./individual";
import { IndividualPointer } from "./types";

export class PoliteCue {
  first: IndividualPointer = null;
  ticket = 0;
  last: IndividualPointer = null;
  next: IndividualPointer = null;

  push() {
    const individual = new Individual({
      cueNumber: ++this.ticket,
      askWhoIsLast: () => {
        return this.last;
      },
    });

    if (!this.first) {
      this.first = individual;
    }

    this.last = individual;
    return individual;
  }

  pop() {
    const last = this.last;
    this.last?.leave();
    return last;
  }

  shift() {
    if (!this.first) {
      return null;
    }

    return this.first.leave();
  }

  unshift() {
    if (!this.first) {
      this.push();
    } else {
      throw new Error(
        "This is a cue, wait for your turn like the rest of of us!",
      );
    }
  }
}
