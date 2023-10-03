
export const exerciseOptions = {
        method: 'GET',
        url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back',
        params: { limit: '10' },
        headers: {
            'X-RapidAPI-Key': '71d43c6a20msh8f8e8772b8072e0p1dc721jsn999d755d3a39',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    };


export const youtubeOptions = {
    method: 'GET',
    url: 'https://youtube-search-and-download.p.rapidapi.com/channel/about',
    
    headers: {
        'X-RapidAPI-Key': 'f3357a1482msh7f29674d46defb9p1c84c9jsne6d29e307a11',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
};


export const fetchData = async (url, options) => {
    
    const response = await fetch(url, options);

    const data = await response.json();

    return data;

}