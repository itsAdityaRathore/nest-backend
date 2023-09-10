import { Body, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { OtpDTO } from './app.otp';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("otp")
  getOtp(@Body() body: OtpDTO) {
    return this.appService.getOtp(body);
  }
}
