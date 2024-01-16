import { PoliteCue } from "./polite-cue";

describe("PoliteCue", () => {
  describe("push method", () => {
    it("creates the first individual in the cue", () => {
      const cue = new PoliteCue();
      cue.push();
      expect(cue.first?.cueNumber).toBe(1);
    });

    it("links the next individual to the previous", () => {
      const cue = new PoliteCue();
      cue.push();
      cue.push();
      expect(cue.first?.next?.cueNumber).toBe(2);
    });

    it("tracks last individual", () => {
      const cue = new PoliteCue();
      cue.push();
      cue.push();
      expect(cue.last?.cueNumber).toBe(2);
    });

    it("returns cueNumber when calling push", () => {
      const cue = new PoliteCue();
      cue.push();
      expect(cue.push()).toBe(2);
    });
  });

  describe("pop method", () => {
    it("removes the last individual in the cue", () => {
      const cue = new PoliteCue();
      cue.push();
      cue.push();
      cue.pop();
      expect(cue.last?.cueNumber).toBe(1);
    });

    it("returns the cueNumber when calling pop", () => {
      const cue = new PoliteCue();
      cue.push();
      cue.push();
      expect(cue.pop()).toBe(1);
    });
  });

  describe("shift method", () => {
    it("removes the first individual in the cue", () => {
      const cue = new PoliteCue();
      cue.push();
      cue.push();
      cue.shift();
      expect(cue.first?.cueNumber).toBe(2);
    });

    it("returns the cueNumber when calling shift", () => {
      const cue = new PoliteCue();
      cue.push();
      cue.push();
      expect(cue.shift()).toBe(1);
    });
  });

  describe("unshift method", () => {
    it("adds the first individual in the cue if there is none", () => {
      const cue = new PoliteCue();
      cue.unshift();
      expect(cue.first?.cueNumber).toBe(1);
    });

    it("thows an Error if the cue is not empty", () => {
      const cue = new PoliteCue();
      cue.unshift();
      expect(cue.unshift).toThrow(Error);
    });
  });
});
