/**  provides a sleep function via promise api */
export const sleep = (sec: number = 500) =>
  new Promise((res) => setTimeout(res, sec));

/** @returns formatted a time stamp via the @typedef Date constructor */
export function time_stamp() {
  const d = new Date();
  return `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
}
