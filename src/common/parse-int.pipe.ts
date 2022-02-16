import { ArgumentMetadata, Injectable, PipeTransform, BadRequestException } from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    const val = Number(value);
    if(isNaN(val) || /\D/.test(value)){
      throw new BadRequestException(`${value} isn't integer`)
    }
    return val;
  }
}
