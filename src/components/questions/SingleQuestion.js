import React from 'react';
import axios from 'axios';
import DeleteButton from '../DeleteButton';

const SingleQuestion = (props) => {
  const [question, setQuestion] = React.useState({});

  const getQuestion = async () => {
    const { id } = props.match.params;
    const { data } = await axios.get(`/api/questions/${id}`);
    setQuestion(data);
  }
  // console.log('props?', props);
  // console.log('question state', question)

  React.useEffect(() => {
    getQuestion();
  }, []);

  return (
    <div className="question-single">
      <h2>Single Question Page</h2>

      <div className="question__item" key={question.id}>
        <div className="question__item-body">
          {question.body} {question.id}
        </div>
        <div className="question__item-instructions">
          {question.instructions}
        </div>
        <DeleteButton
          itemId={question.id}
          itemType="questions"
          history={props.history}
        />
      </div>
    </div>
  )
}

export default SingleQuestion;
