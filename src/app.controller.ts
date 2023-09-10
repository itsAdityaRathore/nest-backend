import { Body, Controller, Get, Param, Query } from '@nestjs/common';
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

  @Get("verify-otp")
  verifyOtp(@Query() params: any) {
    return this.appService.verifyOtp(params.otp);
  }

  @Get("user/:otp")
  verifyMyOtp(@Param() params: any) {
    return this.appService.verifyOtp(params.otp);
  }
  
}
