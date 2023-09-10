import { Injectable } from '@nestjs/common';
import { OtpDTO } from './app.otp';

@Injectable()
export class AppService {
  getHello(): string {
    return '{"Hello World!": "How are you"}';
  }

  otparray = [2];

  getOtp(body: OtpDTO): any {
    var otp = Math.floor(100000 + Math.random() * 900000);
    this.otparray.push(otp);
    body.otp = otp;
    return body;
  }

  verifyOtp(userOtp: Number) {

    var otp = this.otparray.find((e) => e == userOtp);
    if (otp == userOtp) {
      return '{"status":"user verified"}';
    }
    return '{"status":"user not verified"}';
  }
}
