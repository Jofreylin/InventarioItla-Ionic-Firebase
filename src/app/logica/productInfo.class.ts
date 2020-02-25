import { Timestamp, timestamp } from 'rxjs/internal/operators/timestamp';

export class ProductInfo{
    id?: string;
    title: string;
    quantity: number;
    price: number;
    category: string;
    description: string;
    date: string;
    secondCode: string;
}