import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('customers')
export class CustomersController {
    @Get()
    getCustomers(
        @Query('limit') limit: number = 200, 
        @Query('offset') offset: number = 20){
            return `Customers: limit => ${limit}, offset => ${offset}`
    }

    @Get('filter')
    getCustomerFilter(){
            return `Filtro de Customers`
    }

    @Get(':customerId')
    getCustomer(
        @Param('customerId') customerId: string
    ) {
        return `Customer ID: ${customerId}`
    }
}
