import fetch from 'node-fetch';

// const a = () => {
//   const body = {
//     'form_config_id': '61784bb470b33200122469a1',
//     'ladi_form_id': 'FORM1659',
//     'ladipage_id': '617a20854456620012e4fbea',
//     'tracking_form': [{
//       'name': 'url_page',
//       'value': 'https://phuonglinhperfume.com/khuyen-mai/'
//     }, { 'name': 'utm_source', 'value': '' }, {
//       'name': 'utm_medium',
//       'value': ''
//     }, { 'name': 'utm_campaign', 'value': '' }, {
//       'name': 'utm_term',
//       'value': ''
//     }, { 'name': 'utm_content', 'value': '' }, {
//       'name': 'variant_url',
//       'value': ''
//     }, { 'name': 'variant_content', 'value': '' }],
//     'form_data': [{ 'name': 'name', 'value': 'Anh Bốn' }, {
//       'name': 'phone',
//       'value': '0916947234'
//     }, {
//       'name': 'address',
//       'value': ' 52, Thôn Điệp Thông, Phường 1, Huyện Dã Ngân Đắk Nông'
//     }, {
//       'name': 'coupon',
//       'value': '',
//       'is_ladipage': true
//     }, {
//       'name': 'cart_products',
//       'value': ['46765:1:899000::|Mã 01 - Coco Noir Chanel (black)|282:Giảm thêm 100.000đ:799000', '46766:1:899000::|Mã 02 - Coco Mademoiselle Edt (White)|282:Giảm thêm 100.000đ:799000', '46767:1:899000::|Mã 03 - Coco Vaporisateur Spray (Yellow)|282:Giảm thêm 100.000đ:799000', '46770:1:899000::|Mã 04 - No5 Chanel|282:Giảm thêm 100.000đ:799000', '46771:1:899000::|Mã 05 - Chanel Chance Eau Tendre|282:Giảm thêm 100.000đ:799000', '46772:1:899000::|Mã 06 - Gucci Bloom|282:Giảm thêm 100.000đ:799000', '9211:1:899000::|Mã 07 - Bleu De Chanel|282:Giảm thêm 100.000đ:799000', '46776:1:899000::|Mã 08 - Versace Eros Man EDT|282:Giảm thêm 100.000đ:799000', '46780:1:899000::|Mã 09 - Dior Sauvage|282:Giảm thêm 100.000đ:799000', '46781:1:899000::|Mã 10 - Acqua Di Gio|282:Giảm thêm 100.000đ:799000', '46784:1:899000::|Mã 11 - Allure Homme Sport|282:Giảm thêm 100.000đ:799000'],
//       'is_ladipage': true
//     }, { 'name': 'cart_revenue', 'value': 8789000, 'is_ladipage': true }],
//     'data_key': '61784bb470b33200122469a1|617a20854456620012e4fbea|1645672617528|09d5916e-1735-406c-ab69-31914e0d6d61',
//     'status_send': 2,
//     'checkout_token': '769610e65eae47a292448d1829f01159',
//     'total_revenue': 8789000,
//     'time_zone': 7
//   };
//   fetch('https://api.form.ladipage.com/sendform', {
//     'headers': {
//       'accept': '*/*',
//       'accept-language': 'vi',
//       'content-type': 'application/json',
//       'sec-ch-ua': '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
//       'sec-ch-ua-mobile': '?0',
//       'sec-ch-ua-platform': '"macOS"',
//       'sec-fetch-dest': 'empty',
//       'sec-fetch-mode': 'cors',
//       'sec-fetch-site': 'cross-site',
//       'Referer': 'https://phuonglinhperfume.com/',
//       'Referrer-Policy': 'strict-origin-when-cross-origin'
//     },
//     'body': body,
//     'method': 'POST'
//   });
// };

export const getCheckoutToken = async () => {
  // const productIds = [46766, 46765, 46767];
  try {
    const data = await fetch('https://api.ladisales.com/2.0/cart/add', {
      headers: {
        accept: '*/*',
        'accept-language': 'vi',
        'content-type': 'application/json',
        'sec-ch-ua':
          '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
        'store-id': '553',
        Referer: 'https://phuonglinhperfume.com/',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
      },
      body: '{"type":"LP","product_variant_id":46765,"quantity":1}',
      method: 'POST',
    });

    const json = await data.text();

    return JSON.parse(json);
  } catch (e) {
    return null;
  }
};

export const sendForm1 = async (
  name: string,
  add: string,
  phone: string,
  products: string[],
  data_key: string,
  form_config_id: string,
  ladipage_id: string,
) => {
  try {
    const body = {
      form_config_id: form_config_id,
      ladi_form_id: 'FORM1659',
      ladipage_id: ladipage_id,
      tracking_form: [
        {
          name: 'url_page',
          value: 'https://phuonglinhperfume.com/flash-sale-2/',
        },
        { name: 'utm_source', value: '' },
        {
          name: 'utm_medium',
          value: '',
        },
        { name: 'utm_campaign', value: '' },
        {
          name: 'utm_term',
          value: '',
        },
        { name: 'utm_content', value: '' },
        {
          name: 'variant_url',
          value: '',
        },
        { name: 'variant_content', value: '' },
      ],
      form_data: [
        {
          name: 'name',
          value: name,
        },
        { name: 'phone', value: phone },
        {
          name: 'address',
          value: add,
        },
        {
          name: 'coupon',
          value: '',
          is_ladipage: true,
        },
        {
          name: 'cart_products',
          value: products,
          is_ladipage: true,
        },
        {
          name: 'cart_revenue',
          value: products.length === 1 ? 899000 : 1598000,
          is_ladipage: true,
        },
      ],
      data_key: data_key,
      status_send: 1,
      total_revenue: products.length === 1 ? 899000 : 1598000,
      time_zone: 7,
    };

    await fetch('https://api.form.ladipage.com/sendform', {
      headers: {
        accept: '*/*',
        'accept-language': 'vi,en-US;q=0.9,en;q=0.8',
        'content-type': 'application/json',
        'sec-ch-ua':
          '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
        Referer: 'https://phuonglinhperfume.com/',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
      },
      body: JSON.stringify(body),
      method: 'POST',
    });
  } catch (e) {
    console.error('send form 1 error', e);
  }
};

export const sendForm2 = async (
  name: string,
  add: string,
  phone: string,
  products: string[],
  data_key: string,
  checkoutToken: string,
  form_config_id: string,
  ladipage_id: string,
) => {
  try {
    const body = {
      form_config_id: form_config_id,
      ladi_form_id: 'FORM1659',
      ladipage_id: ladipage_id,
      tracking_form: [
        {
          name: 'url_page',
          value: 'https://phuonglinhperfume.com/flash-sale-2/',
        },
        { name: 'utm_source', value: '' },
        {
          name: 'utm_medium',
          value: '',
        },
        { name: 'utm_campaign', value: '' },
        {
          name: 'utm_term',
          value: '',
        },
        { name: 'utm_content', value: '' },
        {
          name: 'variant_url',
          value: '',
        },
        { name: 'variant_content', value: '' },
      ],
      form_data: [
        { name: 'name', value: name },
        {
          name: 'phone',
          value: phone,
        },
        { name: 'address', value: add },
        {
          name: 'coupon',
          value: '',
          is_ladipage: true,
        },
        {
          name: 'cart_products',
          value: products,
          is_ladipage: true,
        },
        {
          name: 'cart_revenue',
          value: products.length === 1 ? 899000 : 1598000,
          is_ladipage: true,
        },
      ],
      data_key: data_key,
      status_send: 2,
      checkout_token: checkoutToken,
      total_revenue: products.length === 1 ? 899000 : 1598000,
      time_zone: 7,
    };
    await fetch('https://api.form.ladipage.com/sendform', {
      headers: {
        accept: '*/*',
        'accept-language': 'vi,en-US;q=0.9,en;q=0.8',
        'content-type': 'application/json',
        'sec-ch-ua':
          '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
        Referer: 'https://phuonglinhperfume.com/',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
      },
      body: JSON.stringify(body),
      method: 'POST',
    });
  } catch (e) {
    console.error('send form 2 error', e);
  }
};
