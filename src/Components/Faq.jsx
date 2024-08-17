import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"  

 const Faq = () => {
  return (
    <Accordion className="bg-white w-full h-[510px] pt-4 pb-4 px-10" collapsible type="single">
      <AccordionItem value="item1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent >
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent >
  </AccordionItem>
    </Accordion>
  );
};
export default Faq;