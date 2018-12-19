export interface ActorDetails {
    birthday?: string;
    known_for_department?: string;
    deathday?: string;
    id?: number;
    name?: string;
    also_known_as?: string[];
    gender?: number;
    biography?: string;
    popularity?: number;
    place_of_birth?: string;
    profile_path?: string;
    adult?: boolean;
    imdb_id?: string;
    homepage?: string;
}

/******popular actor and search actors response************ */
export interface ActorResponse {
    page?: number;
    results?: Actor[];
    total_results?: number;
    total_pages?: number;
}

export interface Actor {
    profile_path?: string;
    adult?: boolean;
    id?: number;
    known_for?: any;
    name?: string;
    popularity?: number;

}

export interface KnownFor {
    poster_path?: string;
    adult?: boolean;
    overview?: string;
    release_date?: string;
    original_title?: string;
    genre_ids?: number[];
    id?: number;
    media_type?: string;
    original_language?: string;
    title?: string;
    backdrop_path?: string;
    popularity?: number;
    vote_count?: number;
    video?: boolean;
    vote_average?: number;

    first_air_date?: string;
    origin_country?: string[];
    name?: string;
    original_name?: string;
}

/**********************Person Images*************************/
export interface ActorImages {
    id?: number;
    profiles?: Profiles[];
}

export interface Profiles {

    aspect_ratio?: number;
    file_path?: string;
    height?: number;
    iso_639_1?: undefined;
    vote_average?: number;
    vote_count?: number;
    width?: number;
}

/********************Actor movie credits******** */
export interface ActorMovieCredit {

    cast?: ActorCast[];

    crew?: ActorCrew[];

}

export interface ActorCrew {
    id?: number;
    department?: string;
    original_language?: string;
    original_title?: string;
    job?: string;
    overview?: string;
    vote_count?: number;
    video?: boolean;
    poster_path?: string;
    backdrop_path?: string;
    title?: string;
    popularity?: number;
    genre_ids?: number[];
    vote_average?: number;
    adult?: boolean;
    release_date?: string;
    credit_id?: string;

}

export interface ActorCast {
    character?: string;
    credit_id?: string;
    release_date?: string;
    vote_count?: number;
    video?: boolean;
    adult?: boolean;
    vote_average?: number;
    title?: string;
    genre_ids?: number[];
    original_language?: string;
    original_title?: string;
    popularity?: number;
    id?: number;
    backdrop_path?: string;
    overview?: string;
    poster_path?: string;
}
