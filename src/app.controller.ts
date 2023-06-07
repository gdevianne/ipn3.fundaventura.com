import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { WebpayTokenDto } from './dto/webpayToken.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/ed')
  getHelloEd(): string {
    return this.appService.getHelloEd();
  }
  @Post('/webpayIPN')
  async postWebpayIPN(@Body() webpayToken: WebpayTokenDto): Promise<string> {
    const resp = await this.appService.postWebpayIPN(webpayToken);

    return resp;
  }
}
