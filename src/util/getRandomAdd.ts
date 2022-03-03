import unescape from 'lodash/unescape';
import fetch from 'node-fetch';
import { parse } from 'node-html-parser';

import { randomIntFromInterval } from './randomNumber';

export const getRandomAdd = async () => {
  const addDataArr: any = [];
  const addNameArr: any = [];
  const res = await fetch(
    `https://www.random-name-generator.com/vietnam?gender=&n=10&s=${randomIntFromInterval(
      5000,
      100000,
    )}`,
    {
      headers: {
        accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'accept-language': 'vi',
        'cache-control': 'max-age=0',
        'if-modified-since': 'Mon, 27 Sep 2021 13:44:47 GMT',
        'sec-ch-ua':
          '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'document',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'none',
        'sec-fetch-user': '?1',
        'upgrade-insecure-requests': '1',
        cookie:
          '_ga=GA1.2.401053104.1645612997; _gid=GA1.2.921440923.1645612997; __gads=ID=f19957247d46e4c0-2294a161b5d000a0:T=1645612999:RT=1645612999:S=ALNI_MaxFl0vB7UIjTau0SvQfYHc92vr6g; _gat_UA-132540486-1=1; FCNEC=[["AKsRol97DCkNeo2L5dlg1cVPiVDS9tW3QBgxZwdctaJWeM7h0GC0DK4n-zWwbHyBr0eD6D0jyCH0jSsxrloHxvjYFMNpiJV2A6xvR-8M2qMDHYJc7OgaQZApAFEDW8LMr69mOI1oaedA8Ta0nIYW39ohMSHcnf5DMg=="],null,[]]',
      },
      referrerPolicy: 'strict-origin-when-cross-origin',
      body: null,
      method: 'GET',
    },
  );

  const html = await res.text();
  const root = parse(html);

  const medias = root.querySelectorAll('.media');
  if (Array.isArray(medias) && medias.length > 0) {
    medias.forEach((media) => {
      const addText = media.querySelectorAll('.col-sm-8');
      if (Array.isArray(addText) && addText.length === 11) {
        const textNodeElem = addText[0];
        if (textNodeElem.childNodes?.length === 3) {
          const textNode = textNodeElem.childNodes[0];
          const add = unescape(textNode.toString())
            .replace('\\n', ' ')
            .replace(/\s+/g, ' ');
          addDataArr.push(add);
        }
      }

      const addName = media.querySelectorAll('.col-12');
      if (Array.isArray(addName) && addName.length === 1) {
        if (
          Array.isArray(addName[0].childNodes) &&
          addName[0].childNodes.length === 2
        ) {
          const nameNode = addName[0].childNodes[0];
          const name = unescape(nameNode.toString())
            .replace('\\n', ' ')
            .replace(/\s+/g, ' ');
          addNameArr.push(name);
        }
      }
    });
  }

  return {
    addDataArr,
    addNameArr,
  };
};
