export enum sortNameEnum {
    price = 'priceAvg',
    stars = 'stars'
}

export enum sortByEnum {
    asc = 'ASC',
    desc = 'DESC'
}

export interface ISortState {
    sortName: sortNameEnum,
    sortBy: sortByEnum,
}

