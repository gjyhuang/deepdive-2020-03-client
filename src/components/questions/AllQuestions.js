import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteButton from '../DeleteButton';

const AllQuestions = (props) => {
  // state in our functional component, with React hooks
  const [questions, setQuestions] = React.useState([]);

  const getQuestions = async () => {
    const { data } = await axios.get("/api/questions");
    setQuestions(data);
  }

  React.useEffect(() => {
    getQuestions();
  }, []);
  // console.log('questions >>>', questions);
  console.log('props in allquestions', props)

  return (
    <div className="question">
      <div className="question__header">
        <h2>Questions</h2>
      </div>
      <div className="question__list">
        {questions.map(question =>
          <div className="question__item" key={question.id}>
            <div className="question__item-body">
              {question.body} <Link to={`/questions/${question.id}`}>{question.id}</Link>
            </div>
            <div className="question__item-instructions">
              {question.instructions}
            </div>
            <DeleteButton
              itemId={question.id}
              itemType="questions"
              history={props.history}
            />
          </div>)}
      </div>
    </div>
  )
}

// <a href={`/${question.id}`}>{question.id}</a>
// // the difference between using a href and react router link: a href will cause the page to hard refresh/reload

export default AllQuestions;
