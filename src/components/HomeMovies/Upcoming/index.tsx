import  Movies from "../../MoviesList/Movies"
import { Movie } from "../../../types/LatestMovies"
import { useEffect, useState } from "react"
import { getUpcomingMovies } from "../../../apis/Movies/getUpcomingMovies"

const Upcoming = () => {
    const [movies, setMovies] = useState<Movie[]>([])

    useEffect(()=>{
        getUpcomingMovies().then((movies)=> setMovies(movies)).catch((error)=>console.log(error))
    })

  return (
    <div className='py-1'>
    <Movies title='Upcoming YIFY Movies' urltitle="Request a Movie" url="/login" movies={movies} gridcolcss={"md:grid-cols-4"} />
    </div>
  )
}

export default Upcoming