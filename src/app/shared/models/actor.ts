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
