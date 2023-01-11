import React from "react";
import { Accordion } from "./components/accordion";
import AccordionDetail from "./components/accordionDetail/AccordionDetail";
import AccordionHeader from "./components/accordionHeader/accordionHeader";

function App() {
  return (
    <div className="App">
      <Accordion>
        <AccordionHeader>header</AccordionHeader>
        <AccordionDetail>
          <div>text it</div>
        </AccordionDetail>
      </Accordion>
    </div>
  );
}

export default App;
