import { Injectable } from '@nestjs/common';
import { OtpDTO } from './app.otp';

@Injectable()
export class AppService {
  getHello(): string {
    return '{"Hello World!": "How are you"}';
  }

  getOtp(body: OtpDTO): any {
    var otp = Math.floor(100000 + Math.random() * 900000);
    body.otp = otp;
    return body;
  }
}
