export type IndividualProps = {
  prev: IndividualProps | null;
  next: IndividualProps | null;
  cueNumber: number;
  leave: () => IndividualProps;
};

export type IndividualPointer = IndividualProps | null;

export type IndividualParameters = {
  cueNumber: number;
  askWhoIsLast: () => IndividualPointer;
};
