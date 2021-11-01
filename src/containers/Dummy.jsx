import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import ButtonBack from '../components/Button/ButtonBack';
import { 
  fetchMoviePopular,
  fetchMovieTopRated,
  fetchMovieUpcoming
} from '../stores/actions/dummy.action';

const Dummy = (props) => {
  const dispatch = useDispatch();
  const [listFavorite, setListFavorite] = useState([]);
  const [listTopRated, setListTopRated] = useState([]);
  const [listUpcoming, setListUpcoming] = useState([]);

  useEffect(async () => {
    const param = {
      page: 1,
    }
    const temp = await dispatch(fetchMoviePopular(param));
    const temp2 = await dispatch(fetchMovieTopRated(param));
    const temp3 = await dispatch(fetchMovieUpcoming(param));
    setListFavorite(temp.results)
    setListTopRated(temp2.results)
    setListUpcoming(temp3.results)
  }, [])

  return (
    <div className="container my-5">
        <div className="row">
          <div className="col-md-12 text-center">
            <h3 className="text-center">To do dummy</h3>
            <br />
          </div>
          <div className="col-md-4">
            <p><b>Favorite Movie</b></p>
            <ul>
              {listFavorite.map(val => <li>{val.original_title}</li>)}
            </ul>
          </div>
          <div className="col-md-4">
            <p><b>Top Rated Movie</b></p>
            <ul>
              {listTopRated.map(val => <li>{val.original_title}</li>)}
            </ul>
          </div>
          <div className="col-md-4">
            <p><b>Upcoming Movie</b></p>
            <ul>
              {listUpcoming.map(val => <li>{val.original_title}</li>)}
            </ul>
          </div>
        </div>
        <ButtonBack />
      </div>
  )
}

export default Dummy;