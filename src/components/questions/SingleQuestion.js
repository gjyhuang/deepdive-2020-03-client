import React from 'react';
import axios from 'axios';
import DeleteButton from '../DeleteButton';
import { FormGroup } from 'react-bootstrap';
import { Typeahead } from 'react-bootstrap-typeahead';

const SingleQuestion = (props) => {
  const [question, setQuestion] = React.useState({});
  const [allOptions, setAllOptions] = React.useState([]);
  const [optionsToAdd, setOptionsToAdd] = React.useState([]);

  const getQuestion = async () => {
    const { id } = props.match.params;
    const { data } = await axios.get(`https://deepdive2020march.herokuapp.com/api/questions/${id}`);
    setQuestion(data);
  }

  const getAllOptions = async () => {
    const { data } = await axios.get("https://deepdive2020march.herokuapp.com/api/options");
    setAllOptions(data);
  }
  // console.log('props?', props);
  console.log('question state', question)
  // console.log('all options >>>', allOptions)

  const handleSubmit = async () => {
    optionsToAdd.forEach(async (option) => {
      const dataToSend = {
        questionId: question.id,
        optionId: option.id,
        isAnswer: false
      }
      await axios.post("https://deepdive2020march.herokuapp.com/api/questionOptions", dataToSend);
      getQuestion();
    })
  }

  React.useEffect(() => {
    getQuestion();
    getAllOptions();
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
      <div className="question__options">
        <h3>Options:</h3>
        {!question?.options?.length ? "None associated." : null}
        {question?.options?.map((option) => (
          <div key={option.id} className="question__single-option">
            {option.body} - id: {option.id}
          </div>
        ))}
      </div>
      <div className="question__add-options">
        <h3>Add options to this question:</h3>
        <div className="question__typeahead">
          <Typeahead
            id="question-options"
            labelKey="body"
            multiple={true}
            onChange={setOptionsToAdd}
            options={allOptions}
            placeholder="Choose an option"
          />
        </div>
        <div
          className="button--submit"
          onClick={handleSubmit}
        >
          Submit
        </div>
      </div>
    </div>
  )
}

export default SingleQuestion;
