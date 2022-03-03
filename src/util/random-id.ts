import { performanceNow } from './performance-now';

export const getRandomId = () => {
  let t = Date.now(),
    e = performanceNow() || 0;
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (i) {
    let a = 16 * Math.random();
    return (
      t > 0
        ? ((a = (t + a) % 16 | 0), (t = Math.floor(t / 16)))
        : ((a = (e + a) % 16 | 0), (e = Math.floor(e / 16))),
      ('x' === i ? a : (3 & a) | 8).toString(16)
    );
  });
};
