import { useState } from 'react';

import FormInput from '../../components/form-input/form-input.component';
import MessageBox from '../../components/message-box/message-box.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import {
  ContactPageContainer,
  FormContainer,
  ButtonContainer,
} from './contact.styles';

const ContactPage = () => {
  const [enquiry, setEnquiry] = useState({
    title: '',
    message: '',
  });
  const { title, message } = enquiry;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setEnquiry({ ...enquiry, [name]: value });
  };

  const handleSubmit = (event) => {
    alert(
      'Thank you for your message. We will get back to you as soon as possible!'
    );

    setEnquiry({ ...enquiry, title: '', message: '' });
  };

  return (
    <ContactPageContainer>
      <FormContainer>
        <h2>Need any help?</h2>
        <span>Please feel free to contact us!</span>
        <form>
          <FormInput
            handleChange={handleChange}
            label="Title"
            type="text"
            name="title"
            value={title}
          />
          {/* Dummy input element to prevent submitting when users hit the enter key */}
          <input type="text" style={{ display: 'none' }} />
          <MessageBox
            handleChange={handleChange}
            label="message"
            value={message}
            name="message"
            id="message"
            // cols="100"
            rows="15"
            placeholder="comments here..."
            style={{ width: '100%', resize: 'none' }}
          />
          <ButtonContainer>
            <CustomButton type="button" onClick={handleSubmit}>
              Send message
            </CustomButton>
          </ButtonContainer>
        </form>
      </FormContainer>
    </ContactPageContainer>
  );
};

export default ContactPage;
