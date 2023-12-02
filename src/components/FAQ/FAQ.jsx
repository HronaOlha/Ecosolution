import { useState } from "react";
import {
  FaqSection,
  FaqTitle,
  TitleContainer,
  FaqQuestion,
  FaqAccordion,
  FaqContacts,
  FaqText,
} from "./Faq.styled";
import { questions } from "../../constants/constants";
import ContactBtn from "../ContactBtn/ContactBtn";

const Faq = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <FaqSection>
      <FaqTitle>Frequently Asked Questions</FaqTitle>
      {/* <Wrapper> */}
      <FaqAccordion>
        {questions.map((item, i) => (
          <li key={item.id}>
            <TitleContainer>
              <span>{selected == i ? "-" : "+"}</span>
              <FaqQuestion onClick={() => toggle(i)}>
                {item.question}
              </FaqQuestion>
            </TitleContainer>
            <p className={selected == i ? "question show" : "question"}>
              {item.answer}
            </p>
          </li>
        ))}
      </FaqAccordion>
      <FaqContacts>
        <FaqText>Didn&#39;t find the answer to your question? </FaqText>
        <ContactBtn text="Contact Us" />
      </FaqContacts>

      {/* </Wrapper> */}
    </FaqSection>
  );
};

export default Faq;
