export interface IPeopleState {
    count: number,
    page: number,
    search: string,
    error: null | string,
    people: IPeople[],
}

export interface IImportPeopleList {
    count: number
    next: string | null,
    previous: string | null,
    results: IPeople[]
}

export interface IPeople {
    name: string,
    height: string,
    mass: string,
    hair_color: string,
    skin_color: string,
    eye_color: string,
    birth_year: string,
    gender: string,
    homeworld: string,
    films: string[]
    species: string[],
    vehicles: string[],
    starships: string[],
    url: string,
}