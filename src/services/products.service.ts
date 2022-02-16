import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from '../entities/product.entity';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dtos';
@Injectable()
export class ProductsService {

    private counterId = 2;
    private products: Product[] = [{
        id: 1,
        name: 'Product 1',
        cod_fab: 'mhk9922',
        short_name: 'Prod 1',
        description: 'GA GA GA GA',
        price: 23,
        stock: 1000,
        image: 'c:/sddd/sda'
    }, {
        id: 2,
        name: 'Product 2',
        cod_fab: 'bb78',
        short_name: 'Prod 2',
        description: 'RA RA RA RA',
        price: 22,
        stock: 500,
        image: 'c:/RARA/rarass'
    }
    ]

    findAll() {
        return this.products;
    }

    findOne(id: number) {

        /*const productFound =  this.products.find((item) => item.id === id);
        return productFound */
        const product = this.products.find((item) => item.id === id);
        if (!product) {
            throw new NotFoundException(`Product #${id} not found`)
        }

        return product;
    }

    create(payload: CreateProductDto) {
        console.log(payload);
        
        this.counterId += 1;

        const newProduct = {
            id: this.counterId,
            ...payload
        };

        this.products.push(newProduct);

        return {newProduct};
    }

    update(id: number, payload: UpdateProductDto) {
        let message: string = '';
        let data: string = '';

        const product = this.findOne(id);
        const productFound = this.products.findIndex(item => item.id === id)
      // let productFound = this.products.findIndex(item => item.id === id)

        if (productFound == -1) {
            message = `No se pudo actualizar - Producto con id ${id} no existe`;
            data = '';
        } else if ((productFound + 1) > 0) {
            message = `Producto ${this.products[productFound].id} actualizado`;
            this.products[productFound] = {
                ...product,
                ...payload
            }
        }
        return {
            message,
            data: this.products[productFound]
        }
    }

    delete(id: number) {

        const index = this.products.findIndex(item => item.id === id)
        if (index === -1) {
            throw new NotFoundException(`Product #${id} not found`);
        }

        this.products.splice(index, 1);
        return this.products;
    }
}