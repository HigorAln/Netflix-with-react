const API_key = process.env.REACT_APP_API_KEY;
const API_base = process.env.REACT_APP_API_BASE;

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_base}${endpoint}`);
  const json = await req.json();
  return json;
};

export default {
  getHomeList: async () => [
    {
      slug: 'originals',
      title: 'Originais do Netflix',
      items: await basicFetch(
        `/discover/tv?with_network=213&language=pt-BR&api_key=${API_key}`,
      ),
    },
    {
      slug: 'trending',
      title: 'Recomendados para Você',
      items: await basicFetch(
        `/trending/all/week?language=pt-BR&api_key=${API_key}`,
      ),
    },
    {
      slug: 'toprated',
      title: 'Em Alta',
      items: await basicFetch(
        `/movie/top_rated?language=pt-BR&api_key=${API_key}`,
      ),
    },
    {
      slug: 'action',
      title: 'Ação',
      items: await basicFetch(
        `/discover/movie?with_genres=28&language=pt-BR&api_key=${API_key}`,
      ),
    },
    {
      slug: 'comedy',
      title: 'Comédia',
      items: await basicFetch(
        `/discover/movie?with_genres=35&language=pt-BR&api_key=${API_key}`,
      ),
    },
    {
      slug: 'horror',
      title: 'Terror',
      items: await basicFetch(
        `/discover/movie?with_genres=27&language=pt-BR&api_key=${API_key}`,
      ),
    },
    {
      slug: 'romance',
      title: 'Romance',
      items: await basicFetch(
        `/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_key}`,
      ),
    },
    {
      slug: 'Documentary',
      title: 'Documentários',
      items: await basicFetch(
        `/discover/movie?with_genres=99&language=pt-BR&api_key=${API_key}`,
      ),
    },
  ],
  getMovieInfo: async (movieId, type) => {
    let info: any = {};

    if (movieId) {
      switch (type) {
        case 'movie':
          info = await basicFetch(
            `/movie/${movieId}?language=pt-BR&api_key=${API_key}`,
          );
          break;
        case 'tv':
          info = await basicFetch(
            `/tv/${movieId}?language=pt-BR&api_key=${API_key}`,
          );
          break;
        default:
          info = null;
          break;
      }
    }
    return info;
  },
};
