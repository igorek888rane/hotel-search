export interface IHotelsState {
    hotels: IHotel[],
    favoritesHotels: IFavoriteHotel[],
    loading: boolean,
    loadingFavorite: boolean,
    message: string,
}

export interface IHotel {
    hotelName: string,
    priceAvg: number,
    hotelId: number,
    stars: number,
    location: {
        country: string,
        name: string,
        geo: { lon: number, lat: number },
        state: string | null,
    },
    locationId: number,
    priceFrom: number,
    pricePercentile: {
        3: number,
        10: number,
        35: number,
        50: number,
        75: number,
        99: number
    }

}

export interface HotelsParams {
    location: string,
    checkIn: string,
    checkOut: string,
}

export interface IFavoriteHotel extends IHotel {
    userId: string,
    _id:string,
}
