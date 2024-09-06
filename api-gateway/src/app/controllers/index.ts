import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from '../services';
import { CreateOrderRequest } from '../dto/create-order-request.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  createOrder(@Body() createOrderRequest: CreateOrderRequest) {
    this.appService.createOrder(createOrderRequest);
  }
}
