

export interface IHotelsState {
    hotels: IHotels[],
    favoritesHotels: IHotels[],
    loading: boolean,
    message: string,
}

export interface IHotels {
    hotelName: string,
    priceAvg: number,
    hotelId: number,
    stars: number,
    location: {
        country: string,
        name: string,
        geo: { lon: number, lat: number },
        state:string | null,
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
    city: string,
    checkIn: string,
    checkOut: string,
}
