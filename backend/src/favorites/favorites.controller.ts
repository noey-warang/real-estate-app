import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { FavoritesService } from './favorites.service';

@Controller('favorites')
export class FavoritesController {
    constructor(private readonly service: FavoritesService) { }

    @Get(':userId')
    getUserFavorites(@Param('userId') userId: string) {
        return this.service.getFavorites(userId);
    }

    @Post(':userId/toggle')
    toggleFavorite(
        @Param('userId') userId: string,
        @Body('propertyId') propertyId: string
    ) {
        return this.service.toggle(userId, propertyId);
    }
}
