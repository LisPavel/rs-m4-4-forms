type Classes = string | undefined | null | boolean;
export const merge = (...classes: Classes[]) =>
  classes.filter(Boolean).join(" ");
