import { Individual } from "./individual";

describe("Individual", () => {
  it("has cueNumber", () => {
    const individual = new Individual({
      cueNumber: 3,
      askWhoIsLast: () => null,
    });

    expect(individual.cueNumber).toBe(3);
  });

  it("knows who is the previous individual", () => {
    const previousIndividual = new Individual({
      cueNumber: 1,
      askWhoIsLast: () => null,
    });

    const individual = new Individual({
      cueNumber: 3,
      askWhoIsLast: () => previousIndividual,
    });

    expect(individual.prev?.cueNumber).toBe(1);
  });

  it("let know to the previous individual who is next", () => {
    const previousIndividual = new Individual({
      cueNumber: 1,
      askWhoIsLast: () => null,
    });

    new Individual({
      cueNumber: 3,
      askWhoIsLast: () => previousIndividual,
    });

    expect(previousIndividual?.next?.cueNumber).toBe(3);
  });

  it("let knows who is the following individual when leaving", () => {
    const previousIndividual = new Individual({
      cueNumber: 1,
      askWhoIsLast: () => null,
    });

    const individual = new Individual({
      cueNumber: 3,
      askWhoIsLast: () => previousIndividual,
    });

    const nextIndividual = new Individual({
      cueNumber: 5,
      askWhoIsLast: () => individual,
    });

    individual.leave();

    expect(previousIndividual.next?.cueNumber).toBe(5);
  });

  it("returns the cueNumber of the individual who left", () => {
    const individual = new Individual({
      cueNumber: 3,
      askWhoIsLast: () => null,
    });

    expect(individual.leave().cueNumber).toBe(3);
  });
});
