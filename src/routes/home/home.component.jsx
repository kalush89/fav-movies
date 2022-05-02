import { useEffect, useState } from 'react';

import MovieList from '../../components/movie-list/movie-list.component';
import Search from '../../components/search/search.component';

const Home = () => {
    const movieList = [
        {
          id: 1,
          title: 'Terminator 1',
          genre: 'Sci-fi/Action',
          year:'1984'
        },
        {
          id: 2,
          title: 'Predator',
          genre: 'Sci-fi/Action',
          year:'1987'
        },
        {
          id: 3,
          title: 'Iron Man 1',
          genre: 'Sci-fi/Adventure',
          year:'2008'
        },
        {
          id: 4,
          title: 'Scent of a Woman',
          genre: 'Drama',
          year:'1992'
        },
        {
          id: 5,
          title: 'Good Fellas',
          genre: 'Crime/Drama',
          year:'1990'
        },
        {
          id: 6,
          title: 'Casino',
          genre: 'Crime/Drama',
          year:'1995'
        },
        {
          id: 7,
          title: 'The Wolf of Wall Street',
          genre: 'Drama/Comedy',
          year:'2013'
        },
        {
          id: 8,
          title: 'The Incredible Hulk',
          genre: 'Sci-fi/Action',
          year:'2008'
        },
        {
          id: 9,
          title: 'Thor Ragnarok',
          genre: 'Sci-fi/Action',
          year:'2017'
        },
        {
          id: 10,
          title: 'Doctor Strange',
          genre: 'Action/Adventure',
          year:'2016'
        }
      
      ]

       
  const [movies, setMovies] = useState(movieList);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(()=> {
    setMovies(movieList)
   }, []);

   useEffect(()=>{
    filterList()
   },[searchTerm]);

   const handleChange = (e) => {
     setSearchTerm(e.target.value);
   }

   const filterList = () => {
    const filteredList = movies.filter(movie => (
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    ));
   setFilteredMovies(filteredList);
   }
   
  console.log(searchTerm);
  console.log('filtered',filteredMovies);

      return (
           <div className="App">
            <Search type={'Search'} placeholder={'Type to search...'} handleChange={handleChange} />
            <MovieList movies={filteredMovies} />
           </div>
      )
};

export default Home;