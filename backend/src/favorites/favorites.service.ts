import { Injectable } from '@nestjs/common';

@Injectable()
export class FavoritesService {
    private favorites: Record<string, Set<string>> = {};

    getFavorites(userId: string): string[] {
        return Array.from(this.favorites[userId] ?? []);
    }

    toggle(userId: string, propertyId: string): string[] {
        if (!this.favorites[userId]) {
            this.favorites[userId] = new Set();
        }

        const favs = this.favorites[userId];

        if (favs.has(propertyId)) {
            favs.delete(propertyId);
        } else {
            favs.add(propertyId);
        }

        return Array.from(favs);
    }
}
