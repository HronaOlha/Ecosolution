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
  const [selected, setSelected] = useState(0);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <FaqSection id="faq">
      <FaqTitle>Frequently Asked Questions</FaqTitle>
      <FaqAccordion>
        {questions.map((item, i) => (
          <li key={item.id}>
            <TitleContainer onClick={() => toggle(i)}>
              <span className={selected == i ? "show" : ""}>
                {selected == i ? "-" : "+"}
              </span>
              <FaqQuestion>{item.question}</FaqQuestion>
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
    </FaqSection>
  );
};

export default Faq;
