import { Injectable } from '@nestjs/common';
import { WebpayTokenDto } from './dto/webpayToken.dto';
import {
  Environment,
  IntegrationApiKeys,
  IntegrationCommerceCodes,
  Options,
  WebpayPlus,
} from 'transbank-sdk';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getHelloEd(): string {
    return 'Hello Ed!';
  }
  async postWebpayIPN(webpayToken: WebpayTokenDto): Promise<string> {
    const { token } = webpayToken;
    console.log(token);

    const token_ws =
      '01ab38d37caf006d5bccf0bf6fd60201b78df6741c6b9282ab5a8cb634643029';

    const tx = new WebpayPlus.Transaction(
      new Options(
        IntegrationCommerceCodes.WEBPAY_PLUS,
        IntegrationApiKeys.WEBPAY,
        Environment.Integration,
      ),
    );
    const response = await tx.commit(token_ws);
    const blah = `received ${JSON.stringify(response)}`;

    return blah;
  }
}
