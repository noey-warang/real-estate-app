import { Controller, Get } from '@nestjs/common';
import { PropertiesService } from './properties.service';

@Controller('properties')
export class PropertiesController {
    constructor(private readonly service: PropertiesService) { }

    @Get()
    getAll() {
        return this.service.findAll();
    }
}
