import { getRandomId } from './random-id';
import { getCacheAdd, getRandomAdd } from './getRandomAdd';
import { getCheckoutToken, sendForm1, sendForm2 } from './ddos';
import { randomIntFromInterval } from './randomNumber';
import { getTelephone } from './getTelephone';
import * as _ from 'lodash';

const ladipage_id = '62185d22c113db00169769f7';
const form_config_id = '621e052e04f6520020ce9306';

const LAST_NAME = [
  'Nguyễn',
  'Lê',
  'Trần',
  'Phan',
  'Võ',
  'Hoàng',
  'Đặng',
  'Bùi',
  'Đỗ',
];
const productsCheckout = [
  '46765:1:899000::|Mã 01 - Coco Noir Chanel (black)|282:Giảm thêm 100.000đ:799000',
  '46766:1:899000::|Mã 02 - Coco Mademoiselle Edt (White)|282:Giảm thêm 100.000đ:799000',
  '46767:1:899000::|Mã 03 - Coco Vaporisateur Spray (Yellow)|282:Giảm thêm 100.000đ:799000',
  '46770:1:899000::|Mã 04 - No5 Chanel|282:Giảm thêm 100.000đ:799000',
  '46771:1:899000::|Mã 05 - Chanel Chance Eau Tendre|282:Giảm thêm 100.000đ:799000',
  '46772:1:899000::|Mã 06 - Gucci Bloom|282:Giảm thêm 100.000đ:799000',
  '9211:1:899000::|Mã 07 - Bleu De Chanel|282:Giảm thêm 100.000đ:799000',
  '46776:1:899000::|Mã 08 - Versace Eros Man EDT|282:Giảm thêm 100.000đ:799000',
  '46780:1:899000::|Mã 09 - Dior Sauvage|282:Giảm thêm 100.000đ:799000',
  '46781:1:899000::|Mã 10 - Acqua Di Gio|282:Giảm thêm 100.000đ:799000',
  '46784:1:899000::|Mã 11 - Allure Homme Sport|282:Giảm thêm 100.000đ:799000',
];

export const getDataKey = () => {
  const a =
    form_config_id + '|' + ladipage_id + '|' + Date.now() + '|' + getRandomId();

  return a;
};

export const checkout = async (
  name: string,
  add: string,
  phone: string,
  capcha1: string,
  capcha2: string,
) => {
  try {
    const checkoutTokenRes = await getCheckoutToken();
    const dataKey = getDataKey();

    if (checkoutTokenRes?.data?.checkout_token) {
      const checkoutToken = checkoutTokenRes?.data?.checkout_token;

      const numberOfProduct = randomIntFromInterval(1, 2);
      const products: any[] = [];
      for (let i = 0; i < numberOfProduct; i++) {
        const ranmdomProductIndex = randomIntFromInterval(1, 11);
        products.push(productsCheckout[ranmdomProductIndex - 1]);
      }
      const f1Res = await sendForm1(
        name,
        add,
        phone,
        products,
        dataKey,
        form_config_id,
        ladipage_id,
        capcha1,
      );
      console.log('=>>>>>>>sendform1 res', f1Res);
      const f2Res = await sendForm2(
        name,
        add,
        phone,
        products,
        dataKey,
        checkoutToken,
        form_config_id,
        ladipage_id,
        capcha2,
      );
      console.log('=>>>>>>>sendform2 res', f2Res);
    }
  } catch (e) {
    console.error('checkout error', e);
  }
  console.log('checkout ok');
};

const throttGetAdd = _.throttle(async () => {
  const data = await throttGetAdd();
  if (data) {
    getCacheAdd(data);
  }
}, 20000);

export const placeOrder = async (capcha: string[]) => {
  const addInfo = [];
  let addData = getCacheAdd();
  if (addData === null) {
    addData = getCacheAdd(await getRandomAdd());
  }

  setTimeout(async () => {
    throttGetAdd();
  }, 5000);
  if (Array.isArray(addData?.addNameArr)) {
    addData.addNameArr = _.shuffle(addData.addNameArr);
    addData.addNameArr.forEach((nameData: string) => {
      const _nameArr = nameData.split(' ');
      if (Array.isArray(_nameArr) && _nameArr.length === 3) {
        try {
          const name = `${LAST_NAME[randomIntFromInterval(1, 9) - 1]} ${
            _nameArr[1]
          } ${_nameArr[0]}`;
          const add = addData.addDataArr[randomIntFromInterval(1, 10) - 1];
          const telephone = getTelephone();
          addInfo.push({
            name,
            add,
            telephone,
          });
        } catch (e) {
          console.log(e);
        }
      }
    });
  }
  if (addInfo.length < 1) {
    console.log('error: address info');
  }
  const jobs: any = [];
  const SPLIT_CHAR = [',', ' /', ' -', ' ', ' _', ' \\'];
  for (let i = 0; i < 1; i++) {
    const _add = addInfo[i];
    jobs.push(
      new Promise(async (resolve) => {
        setTimeout(async () => {
          if (typeof _add.add === 'string' && _add.add.charAt(0) === ' ') {
            _add.add = _add.add.substring(1).slice(0, -1);
          }

          if (randomIntFromInterval(1, 5) >= 3) {
            const _namePre = ['Anh', 'anh', 'chị', 'Chị', 'Bác', 'Ông', 'bác'];
            const _nameArrSp = _add.name.split(' ');
            _add.name = `${
              _namePre[randomIntFromInterval(1, _namePre.length) - 1]
            } ${_nameArrSp[randomIntFromInterval(1, _nameArrSp.length) - 1]}`;
          }
          if (randomIntFromInterval(1, 5) >= 3) {
            _add.add = _add.add.replaceAll(
              ',',
              SPLIT_CHAR[randomIntFromInterval(1, SPLIT_CHAR.length) - 1],
            );
          }
          console.log(
            `name: '${_add.name}' add: '${_add.add}' telephone: '${_add.telephone}'`,
          );
          await checkout(
            _add.name,
            _add.add,
            _add.telephone,
            capcha[0],
            capcha[1],
          );
          resolve(null);
        }, randomIntFromInterval(1, 500));
      }),
    );
  }

  await Promise.all(jobs);
};
