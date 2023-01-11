import React from "react";
import clsx from "clsx";
import { accordionDetailProps } from "./accordionDetail.types";
import { useAccordionContext } from "../accordion/accordion";

function AccordionDetail({ children }: accordionDetailProps) {
  const { isExpand } = useAccordionContext();
  return (
    <div className={clsx("accordion-detail", isExpand && "expand")}>
      {children}
    </div>
  );
}
export default AccordionDetail;
