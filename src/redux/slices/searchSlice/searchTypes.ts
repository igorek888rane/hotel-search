export interface ISearchState {
    locationInput: string,
    dateInput: string,
    countDayInput: number,
    info: infoType
}

export interface infoType {
    location: string,
    date: string,
    countDay: number
}