import { Injectable } from '@nestjs/common';
import { WebpayTokenDto } from './dto/webpayToken.dto';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getHelloEd(): string {
    return 'Hello Ed!';
  }
  postWebpayIPN(webpayToken: WebpayTokenDto): string {
    const { token } = webpayToken;
    console.log(token);
    return `received ${token}`;
  }
}
