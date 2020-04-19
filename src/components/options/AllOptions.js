import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteButton from '../DeleteButton';

const AllOptions = (props) => {
  // state in our functional component, with React hooks
  const [options, setOptions] = React.useState([]);

  const getOptions = async () => {
    const { data } = await axios.get("https://deepdive2020march.herokuapp.com/api/options");
    setOptions(data);
  }

  React.useEffect(() => {
    getOptions();
  }, []);

  return (
    <div className="option">
      <div className="option__header">
        <h2>Options</h2>
      </div>
      <div>
        {options.map(option =>
          <div className="option__item" key={option.id}>
            <div className="option__item-body">
              {option.body} {option.id}
              <DeleteButton
                itemId={option.id}
                itemType="options"
                history={props.history}
              />
            </div>
            <div className="option__item-img">
              {option.imgUrl}
            </div>
          </div>)}
      </div>
    </div>
  )
}

// <a href={`/${question.id}`}>{question.id}</a>
// // the difference between using a href and react router link: a href will cause the page to hard refresh/reload

export default AllOptions;
