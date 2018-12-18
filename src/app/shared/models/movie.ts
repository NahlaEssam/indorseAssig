export interface MovieDetails {
    adult?: boolean;
    backdrop_path?: string;
    belongs_to_collection?: {};
    budget?: number;
    genres?: Genres[];
    homepage?: string;
    id?: number;
    imdb_id?: string;
    original_language?: string;
    original_title?: string;
    overview?: string;
    popularity?: number;
    poster_path?: string;
    production_companies?: ProductionCompanies[];
    production_countries?: ProductionCountries[];
    release_date?: string;
    format?: string;
    revenue?: number;
    runtime?: number;
    spoken_languages?: SpokenLanguages[];
    status?: string;
    tagline?: string;
    title?: string;
    video?: boolean;
    vote_average?: number;
    vote_count?: number;

}

export interface Genres {
    id?: number;
    name?: string;
}

export interface ProductionCompanies {
    name?: string;
    id?: number;
    logo_path?: string;
    origin_country?: string;
}

export interface ProductionCountries {
    iso_3166_1?: string;
    name?: string;
}

export interface SpokenLanguages {
    iso_639_1?: string;
    name?: string;
}

/******popular movies, trending movies and search movies response************ */
export interface MoviesResponse {
    page?: number;
    results?: Movie[];
    total_results?: number;
    total_pages?: number;
}

export interface Movie {
    poster_path?: string;
    adult?: boolean;
    overview?: string;
    release_date?: string;
    genre_ids?: number[];
    id?: number;
    original_title?: string;
    original_language?: string;
    title?: string;
    backdrop_path?: string;
    popularity?: number;
    vote_count?: number;
    video?: boolean;
    vote_average?: number;
}
