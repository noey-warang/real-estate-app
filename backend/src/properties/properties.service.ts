import { Injectable } from '@nestjs/common';

@Injectable()
export class PropertiesService {
    private properties = [
        {
            id: '1',
            title: 'Condo',
            image: 'http://localhost:5000/uploads/condo.png',
            location: 'Bangkok',
            price: 3500000,
            description: 'ใกล้ BTS เดิน 5 นาที, วิวเมืองสวย',
        },
        {
            id: '2',
            title: 'Villa',
            image: 'http://localhost:5000/uploads/villa.png',
            location: 'Phuket',
            price: 12500000,
            description: 'สระว่ายน้ำส่วนตัว, ใกล้หาด',
        },
        {
            id: '3',
            title: 'House',
            image: 'http://localhost:5000/uploads/house.png',
            location: 'Chiang Mai',
            price: 4200000,
            description: 'เงียบสงบ, มีสวนหลังบ้านใหญ่',
        },
    ];

    findAll() {
        return this.properties;
    }
}
