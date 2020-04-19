import React, { useState } from 'react';
import axios from 'axios';

const CreateQuestion = () => {
  const [body, setBody] = useState("");
  const [instructions, setInstructions] = useState("");

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    console.log(body, instructions);
    await axios.post('/api/questions', {
      body,
      instructions
    });
    setBody("");
    setInstructions("");
  }

  return (
    <div className="question-create">
      <div className="question-create__header">
        <h2>Create A New Question</h2>
      </div>
      <form className="question-create__form">
        <label>
          Please enter a question:
        </label>
        <input
          className="question-create__input-body"
          type="text"
          value={body}
          onChange={evt => setBody(evt.target.value)}
        />
        <label>
          Please enter additional instructions:
        </label>
        <input
          className="question-create__input-instructions"
          type="text"
          value={instructions}
          onChange={evt => setInstructions(evt.target.value)}
        />
        <input
          className="button--submit"
          type="submit"
          value="Add My Question"
          onClick={handleSubmit}
        />
      </form>
    </div>
  )
}

export default CreateQuestion;
