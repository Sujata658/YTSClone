import { useEffect, useState } from 'react';
import { FirstHalf } from '../../components/ViewDetails/FirstHalf';
import { MovieDetail } from '../../types/MovieDetail';
import { Movie } from '../../types/LatestMovies';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../../apis/Movies/getMovieDetails';
import { getSimilarMovies } from '../../apis/Movies/getSimilarMovies';
import { Trailers } from '../../components/ViewDetails/Trailers';
import { PlotCast } from '../../components/ViewDetails/PlotCast';

export const ViewDetails: React.FC = () => {
  const [movieDetail, setMovieDetail] = useState<MovieDetail | undefined>();
  const [similarmovies, setSimilarmovies] = useState<Movie[] | undefined>();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        if (id) {
          getMovieDetails(id).then((detail) => {
            setMovieDetail(detail)
          }).catch((error) => console.log(error))
          getSimilarMovies(id).then((Similarmovies) => {
            setSimilarmovies(Similarmovies)
          }).catch((error) => console.log(error))
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieDetails();

  }, [id]);

  const uniqueQualities = [...new Set(movieDetail?.torrents.map(torrent => torrent.quality))];


  return (
    <>

      <FirstHalf bg={movieDetail?.background_image} medium_cover={movieDetail?.medium_cover_image} large={movieDetail?.large_cover_image} title={movieDetail?.title} year={movieDetail?.year} genres={movieDetail?.genres} uniqueQualities={uniqueQualities} like_count={movieDetail?.like_count} rating={movieDetail?.rating} similarmovies={similarmovies} />
      <Trailers yt={movieDetail?.yt_trailer_code} screenshots={[
        movieDetail?.medium_screenshot_image1,
        movieDetail?.medium_screenshot_image2,
        movieDetail?.medium_screenshot_image3,

      ]} />
      <PlotCast
        summary={movieDetail?.description_intro}
        cast={movieDetail?.cast || []}
      />



    </>
  );
};
