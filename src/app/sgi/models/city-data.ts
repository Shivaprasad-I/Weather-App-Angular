export interface CityData {
    total_count: number;
    results: City[];
}
export interface Coordinates {
    lon: number;
    lat: number;
}
  
export interface City {
    name: string;
    ascii_name: string;
    alternate_names: string[];
    country_code: string;
    cou_name_en: string;
    population: number;
    timezone: string;
    label_en: string;
    coordinates: Coordinates;
}