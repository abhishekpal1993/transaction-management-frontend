export const append = (...classNames) =>
  classNames.filter((cls) => !!cls).join(" ");
