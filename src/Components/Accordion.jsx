import React from "react";
import { Accordion as UIAccordion, AccordionItem } from "@/components/ui/accordion";
import { AccordionTrigger } from "@radix-ui/react-accordion";
import { AccordionContent } from "./ui/accordion";

export const Accordion = () => {
  return (
    <UIAccordion className="bg-white w-full h-[510px] pt-4 pb-4 px-10">
      <AccordionItem>
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent >
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent >
  </AccordionItem>
    </UIAccordion>
  );
};
export default Accordion;