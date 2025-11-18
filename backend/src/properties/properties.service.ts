import { Injectable } from '@nestjs/common';

@Injectable()
export class PropertiesService {
    private properties = [
        {
            id: '1',
            title: 'คอนโด',
            image: 'http://localhost:5000/uploads/condo.png',
            location: 'Bangkok',
            price: 3500000,
            description: 'ใกล้ BTS เดิน 5 นาที, วิวเมืองสวย',
        },
        {
            id: '2',
            title: 'บ้านเดี่ยว (หลังเดี่ยว)',
            image: 'http://localhost:5000/uploads/villa.png',
            location: 'Bangkok',
            price: 12500000,
            description: 'สระว่ายน้ำส่วนตัว,เงียบสงบ, มีสวนหลังบ้านใหญ่',
        },
        {
            id: '3',
            title: 'บ้านเดี่ยวแฝด',
            image: 'http://localhost:5000/uploads/house.png',
            location: 'Bangkok',
            price: 4200000,
            description: 'บ้าน 2 หลังที่มีโครงสร้างบางส่วนติดกันหรือมีผนังร่วมกัน,มีพื้นที่บริเวณบ้าน',
        },
    ];

    findAll() {
        return this.properties;
    }
}
