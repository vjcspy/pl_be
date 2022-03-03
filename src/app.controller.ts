import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

const ladipage_id = '62185d22c113db00169769f7';
const form_config_id = '6218742cc113db00169838fb';

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

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/place-order')
  placeOrder(@Query('token') token: string): string {
    return `Token: ${token}`;
  }
}
