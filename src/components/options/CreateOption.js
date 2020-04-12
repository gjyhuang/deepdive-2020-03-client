import React, { useState } from 'react';
import { useInput } from '../../hooks/useInput';
import axios from 'axios';

const CreateOption = () => {
  // const [body, setBody] = useState("");
  // const [instructions, setInstructions] = useState("");
  const { value:body, bind:bindBody, reset:resetBody } = useInput('');
  const { value:imageUrl, bind:bindImageUrl, reset:resetImageUrl } = useInput('');



  const handleSubmit = async (evt) => {
    evt.preventDefault();
    console.log(body, imageUrl);
    // await axios.post('/api/questions', {
    //   body,
    //   instructions
    // });
    resetBody();
    resetImageUrl();
  }

  return (
    <div className="question-create">
      <div className="question-create__header">
        <h2>Create A New Option</h2>
      </div>
      <form className="question-create__form">
        <label>
          Please enter an option:
        </label>
        <input
          className="question-create__input-body"
          type="text"
          {...bindBody}
        />
        <label>
          Please enter an image URL:
        </label>
        <input
          className="question-create__input-instructions"
          type="text"
          {...bindImageUrl}
        />
        <input
          className="question-create__input-submit"
          type="submit"
          value="Add My Question"
          onClick={handleSubmit}
        />
      </form>
    </div>
  )
}

export default CreateOption;
