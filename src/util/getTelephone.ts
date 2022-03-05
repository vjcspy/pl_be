import { randomIntFromInterval } from './randomNumber';

export const getTelephone = () => {
  const preTele = ['091', '088', '096', '097', '098'];
  const telephone = `${
    preTele[randomIntFromInterval(1, preTele.length) - 1]
  }${Math.floor(Math.random() * 10000000)}`;

  return telephone;
};
