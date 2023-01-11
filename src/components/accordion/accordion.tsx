import React, { createContext, useContext, useMemo, useState } from "react";
import clsx from "clsx";
import "../../styles/accordion.css";
import { AccordionContext, AccordionProps } from "./accordion.types";

const accordionContext = createContext<AccordionContext | undefined>(undefined);

export const useAccordionContext = () => {
  const context = useContext(accordionContext);
  if (!context) {
    throw new Error("this component should be inside of accordion");
  }
  return context;
};
export function Accordion({ children }: AccordionProps) {
  const [expand, setExpand] = useState(false);

  const handleExpand = () => {
    setExpand(!expand);
  };

  const values = useMemo(() => ({ isExpand: expand, handleExpand }), [expand]);
  return (
    <accordionContext.Provider value={values}>
      <div className={clsx("accordion")}>{children}</div>
    </accordionContext.Provider>
  );
}
