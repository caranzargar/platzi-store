import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
    @Get()
    getOrders(
        @Query('limit') limit: number = 200, 
        @Query('offset') offset: number = 20){
            return `Order: limit => ${limit}, offset => ${offset}`
    }

    @Get('filter')
    getOrderFilter(){
            return `Filtro de Orders`
    }

    @Get(':OrderId')
    getOrder(
        @Param('OrderId') orderId: string
    ) {
        return `Order ID: ${orderId}`
    }
}
