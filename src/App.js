import { useState } from "react";
import "./App.css";
import AccordionWrapper from "./Components/AccordionWrapper";

function App() {
  const Data = [
    {
      id: 1,
      question: "What is the React?",
      answer:
        " React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.",
    },
    {
      id: 2,
      question: "What is the Anguler?",
      answer:
        "Angular is a TypeScript-based free and open-source web application framework lead by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS",
    },
    {
      id: 3,
      question: "What is the TypeScript?",
      answer:
        " TypeScript is a free and open source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. It is designed for the development of large applications and transpiles to JavaScript.",
    },
    {
      id: 4,
      question: "What is the Javascript?",
      answer:
        " JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries. ",
    },
  ];

  const [active, setsetActive] = useState(null);

  const toggle = (id) => {
    active === id ? setsetActive(null) : setsetActive(id);
  };

  console.log(Data);
  return (
    <div className="App">
      <AccordionWrapper data={Data} toggle={toggle} active={active} />
    </div>
  );
}

export default App;
