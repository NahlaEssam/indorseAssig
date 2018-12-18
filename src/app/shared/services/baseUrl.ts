export const BASE = {
    baseUrl: 'https://api.themoviedb.org/3',
    api_key: '7fc09b11cad197fa3e8fc2c22037b062',
    constructUrl: function (url: string, query: string) {
        return `${this.baseUrl}/${url}?api_key=${this.api_key}${query ? '&' + query : ''}`;
    }
};


