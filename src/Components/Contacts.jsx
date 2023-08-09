import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { styled } from "styled-components";
import Map from "./Map";
import { slideIn } from "../styles/animations";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 54px;
  font-weight: 400;
  letter-spacing: 1px;
  background-image: linear-gradient(
    to right bottom,
    #952cbe,
    #8125b6,
    #6d1fad,
    #5719a4,
    #40149b
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

const Form = styled.form`
  display: flex;
  width: 50%;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 1.5rem;
  font-size: 16px;
  background-color: #eaeaea;
  border: none;
  border-radius: 0.5rem;
`;

const TextArea = styled.textarea`
  padding: 1.5rem;
  font-size: 16px;
  border: none;
  border-radius: 0.5rem;
  resize: none;
`;

const Button = styled.button`
  background-color: #9004d0;
  border: none;
  border-radius: 0.5rem;
  padding: 1rem 3rem;
  color: white;
  font-size: 20px;
  font-weight: 500;
  width: fit-content;
  align-self: center;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  &:hover {
    background-color: ${(props) => (props.disabled ? "#8f04d0cd" : "#a600f2")};
  }
`;

const Right = styled.div`
  flex: 1;
  height: 100%;
  user-select: none;
  pointer-events: none;
`;

const Success = styled.div`
  position: fixed;
  bottom: 0;
  left: 40%;
  transform: translateX(-50%);
  padding: 10px;
  background-color: #d61fee;
  border: none;
  border-radius: 0.5rem;
  font-size: 18px;
  font-weight: 400;
  color: #fff;
  animation: ${slideIn} 10s ease-in-out forwards;
`;

const Error = styled.div`
  position: fixed;
  bottom: 0;
  left: 40%;
  transform: translateX(-50%);
  padding: 10px;
  font-size: 18px;
  font-weight: 400;
  background-color: #d61fee;
  border: none;
  border-radius: 0.5rem;
  color: #fff;
  animation: ${slideIn} 10s ease-in-out forwards;
`;

const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const handleFieldChange = () => {
    const formData = new FormData(ref.current);

    // Check if all fields are filled
    const isValid =
      formData.get("from_name") &&
      formData.get("from_email") &&
      formData.get("message");

    setIsFormValid(isValid);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_tythata",
        "template_wznwx5e",
        ref.current,
        "bjDAUDJxDoEOUQAmG"
      )
      .then(
        (result) => {
          setSuccess(true);
          setShowSuccessMessage(true);
          console.log(result.text);
          setTimeout(() => {
            setShowSuccessMessage(false);
          }, 5000);
          // Clear form fields after successful submission
          ref.current.reset();
        },
        (error) => {
          setSuccess(false);
          console.log(error.text);
          setShowErrorMessage(true);
          setTimeout(() => {
            setShowErrorMessage(false);
          }, 5000);
        }
      );
  };

  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact Me</Title>
            <Input
              placeholder="Name"
              name="from_name"
              onChange={handleFieldChange}
            />
            <Input
              placeholder="Email"
              name="from_email"
              onChange={handleFieldChange}
            />
            <TextArea
              placeholder="Message"
              rows={10}
              name="message"
              onChange={handleFieldChange}
            />
            <Button type="submit" value="Send" disabled={!isFormValid}>
              Message
            </Button>
            {success === true ? (
              <Success>
                Message has been sent. Developer will get back to you soon!
              </Success>
            ) : success === false ? (
              <Error>
                Oops! An error occurred while sending the message. Please try
                again after some time.
              </Error>
            ) : null}
          </Form>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;
