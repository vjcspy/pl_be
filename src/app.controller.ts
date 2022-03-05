import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { checkout, placeOrder } from './util/checkout';
import { getTelephone } from './util/getTelephone';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/sendform1')
  async sendform1(@Query('token') token: string) {
    console.log(this.appService.capcha);
    if (this.appService.capcha.length >= 2) {
      console.log('=>> start place order');
      const capchas = [...this.appService.capcha];
      this.appService.capcha = [];
      await checkout(
        'https://ibb.co/gVx4qTz',
        'https://ibb.co/gVx4qTz',
        getTelephone(),
        capchas[0],
        capchas[1],
      );
    } else {
      this.appService.capcha.push(token);
    }
    return `send form1: ${token}`;
  }

  @Get('/sendform2')
  async sendform2(@Query('token') token: string) {
    console.log(this.appService.capcha);
    if (this.appService.capcha.length >= 2) {
      console.log('=>> start place order');
      const capchas = [...this.appService.capcha];
      this.appService.capcha = [];
      await checkout(
        'https://ibb.co/gVx4qTz',
        'https://ibb.co/gVx4qTz',
        getTelephone(),
        capchas[0],
        capchas[1],
      );
    } else {
      this.appService.capcha.push(token);
    }
    return `send form 2: ${token}`;
  }
}
