import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
    @Get()
    getBrands(
        @Query('limit') limit: number = 200, 
        @Query('offset') offset: number = 20){
            return `Brands: limit => ${limit}, offset => ${offset}`
    }

    @Get('filter')
    getBrandFilter(){
            return `Filtro de Brands`
    }

    @Get(':brandId')
    getBrand(
        @Param('brandId') brandId: string
    ) {
        return `Brand ID: ${brandId}`
}
}
