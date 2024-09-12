import navLink from '../Constants/const';
import logo from '../../assets/images/logo.svg';
import Input from '../General/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { ThemeButton } from '../General/Themebutton';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Movie } from '../../types/LatestMovies';
import { searchMovies } from '../../apis/Movies/searchMovies';

export default function Navbar() {
  const [query, setQuery] = useState('')
  const [searchedMovies, setSearchedMovies] = useState<Movie[]>()

  useEffect(() => {
    if (query !== undefined && query !== '') {
      searchMovies({
        query: query, quality: '', genre: '', rating: '',
        year: '',
        language: '',
        orderby: ''
      }).then((movieData) => {
        setSearchedMovies(movieData.movies)
        // console.log(searchedMovies)
      });
    }
  }, [query]);

  const handleChange = (query: string) => {
    setQuery(query)
  }

  return (
    <>
      <div className="px-[5%] py-4 text-[12px] font-bold border-b border-textsec">
        <div className="flex justify-between items-center">
          <div>
            <a href="/">
              <span>
                <img src={logo} alt="Logo" />
              </span>
            </a>
          </div>

          <div className="flex justify-end gap-5 relative">
            <div >

              <Input
                placeholder="Quick Search"
                focusColor="none"
                leadingIcon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
                rounded="rounded-3xl"
                backgroundColor="bg-bkgprim"
                onChange={handleChange}
                border='border border-textsec'
              />

              {
                query == '' ? <div></div> :
                  searchedMovies?.length === 0 ? <div></div> :
                    <div className='absolute top-[52px] z-10 bg-bkgprim border border-textsec divide-y divide-textsec'>
                      {


                        searchedMovies?.slice(0, 5).map((movie) => {
                          return <>
                            
                              <a href={`/movies/${movie.id}`}>
                              <div className='flex gap-2 p-2'>

                              <img src={movie.small_cover_image} alt={movie.title} />
                              <div >
                                <div className='font-bold'>
                                  {movie.title}
                                </div>
                                <div>
                                  {movie.year}
                                </div>
                              </div>
                            </div>
                              </a>
                          </>
                        })
                      }
                    </div>
              }

            </div>
            <ul className="flex gap-5 justify-end items-center ">
              {navLink.map((Link) => (
                <li key={Link.id} className={`hover:text-textprim font-bold ${Link.name === '4K'? 'text-webthemeprim': 'text-textsec'}`} >
                  <NavLink to={Link.link}>{Link.name}</NavLink>
                </li>
              ))}
            </ul>
            <div className="flex divide-x-2 divide-textprim  items-center">
              <div className="px-2">
                <NavLink to="/login">Login</NavLink>
              </div>
              <div className="px-2">
                <NavLink to="/register">Register</NavLink>
              </div>
            </div>
            <div className="flex items-center">
              <ThemeButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
