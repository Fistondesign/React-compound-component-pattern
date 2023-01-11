import React from "react";
import clsx from "clsx";
import { IoMdArrowDropright } from "react-icons/io";

import { useAccordionContext } from "../accordion/accordion";

import { AccordionHeaderProps } from "./accordionHeader.types";

function AccordionHeader({ children }: AccordionHeaderProps) {
  const { isExpand, handleExpand } = useAccordionContext();
  return (
    <div
      className={clsx("accordion-header")}
      onKeyDown={() => handleExpand()}
      onClick={() => handleExpand()}
    >
      <IoMdArrowDropright className={clsx(isExpand && "rotate-icon")} />
      {children}
    </div>
  );
}
export default AccordionHeader;
