/* eslint-disable no-unused-vars */
import { Fragment } from "react";
import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  return (
    <Fragment>
      <Steps/>
      <Steps/>
    </Fragment>
  )
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  // const [test, setTest] = useState({ name: "An" });

  function handlePrevious() {
    if (step > 1) {
      setStep((curStep) => curStep - 1);
    }
  }

  function handleNext() {
    if (step < messages.length) {
      // setStep(curStep => curStep + 1);
      setStep(curStep => curStep + 1);
    }

    // setTest({
    //   name: 'Minh'
    // })
  }

  function handleClose() {
    setIsOpen(is => !is);
  }

  return (
    <div className="steps-container">
      <button className="close" onClick={handleClose}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
            {/* {test.name} */}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950F2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950F2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
