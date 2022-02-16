import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string { return 'Hola Mundo desde NestJs perú'; }

  @Get('nuevo')
  newEndPoint(): string { return 'endpoint nuevo' }

  @Get('/ruta/')
  ruta(): string { return 'con /sas/' }
}
