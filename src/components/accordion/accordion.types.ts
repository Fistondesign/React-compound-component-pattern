import React from "react";

export interface AccordionProps {
  children: React.ReactNode;
}
export interface AccordionContext {
  isExpand: boolean;
  handleExpand: Function;
}
