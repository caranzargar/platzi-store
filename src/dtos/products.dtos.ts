import { IsNotEmpty, IsNumber, IsPositive, IsString, IsUrl } from 'class-validator';

import { PartialType } from '@nestjs/mapped-types'

export class CreateProductDto {

    @IsString()
    @IsNotEmpty()
    readonly name:string; //atributo que coloquemos no podra ser modificado solo leido. es TypeScript(readonly)

    @IsNotEmpty()
    @IsString()
    readonly description:string;
    
    @IsNotEmpty()
    @IsString() 
    readonly cod_fab:string; 
    
    @IsNotEmpty()
    @IsString()
    readonly short_name:string; 

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    readonly price:number; 

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    readonly stock:number; 

    @IsUrl()
    @IsNotEmpty()
    readonly image:string;
    
}

export class UpdateProductDto extends PartialType(CreateProductDto) { }

/* export class UpdateProductDto { // lo mismo que arriba
    readonly name?:string; //atributo que coloquemos no podra ser modificado solo leido. es TypeScript(readonly)
    readonly description?:string; 
    readonly cod_fab?:string; 
    readonly short_name?:string; 
    readonly price?:number; 
    readonly stock?:number; 
    readonly image?:string;
} */