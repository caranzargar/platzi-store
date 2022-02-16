import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Query, Res, /*ParseIntPipe*/ } from '@nestjs/common';
import { Response } from 'express';
import { ProductsService } from '../services/products.service';
import { ParseIntPipe } from 'src/common/parse-int.pipe';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dtos'

@Controller('products')
export class ProductsController {

    constructor(private productsService: ProductsService) {  }
    // GET: RECIBIR PARAMETROS QUERY
    @Get()
    getProducts(
        @Query('limit') limit: number = 100,
        @Query('offset') offset: number = 0,
        @Query('brand') brand: string
    ) {
        return this.productsService.findAll();
    }

    // GET : RECIBIR PARAMETROS  
    @Get('filter') //Rutas Fijas primero antes que las rutas DINAMICAS
    getProductFilter() {
        return 'soy el filter'
    }

    @Get(':productId')
    @HttpCode(HttpStatus.ACCEPTED)
    getProduct(/*@Res() response: Response,*/ @Param('productId',ParseIntPipe ) productId: number) {
        /* response.status(200).send({ // Respondiendo con el motor de EXPRESS
            message: `product ${productId} `
        }) */
        return this.productsService.findOne(productId)
    }

    // POST: ENVIAR
    @Post()
    createOne(@Body() payload: CreateProductDto) {
        /*return {
            message: 'Accion de Crear',
            payload
        }*/
        return this.productsService.create(payload);
    }

    // PUT: MODIFICAR
    @Put(':productId')
    update(
        @Param('productId') productId: string,
        @Body() data: UpdateProductDto
    ) {
        /*return {
            productId,
            message: `Producto Actualizado ${productId}`,
            data
        }*/
        return this.productsService.update(+productId,data)
    }

    // DELETE: ELIMINAR
    @Delete(':productId')
    delete(
        @Param('productId') productId: string
    ) {
        return this.productsService.delete(+productId);
    }

}
