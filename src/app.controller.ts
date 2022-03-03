import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { checkout, placeOrder } from './util/checkout';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/sendform1')
  async sendform1(@Query('token') token: string) {
    console.log(this.appService.capcha);
    this.appService.capcha.push(token);
    return `send form1: ${token}`;
  }

  @Get('/sendform2')
  async sendform2(@Query('token') token: string) {
    console.log(this.appService.capcha);
    this.appService.capcha.push(token);
    if (this.appService.capcha.length === 2) {
      await placeOrder(this.appService.capcha);
      // await checkout(
      //   'Ngô Tuấn',
      //   '223 Võ Văn Thái Thanh Xuân Hà Nội',
      //   '0964574147',
      //   this.appService.capcha[0],
      //   this.appService.capcha[1],
      // );
      this.appService.capcha = [];
    }
    return `send form 2: ${token}`;
  }
}
