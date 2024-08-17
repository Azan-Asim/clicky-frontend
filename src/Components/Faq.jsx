import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const Faq = ({ data }) => {
  return (
    <Accordion className="bg-white w-full  pt-4 pb-4 px-10" collapsible type="single">
      <AccordionItem value="item1">
        <AccordionTrigger>
          {data.trigger}
        </AccordionTrigger>
        <AccordionContent >
          <div>
            {data.faqData.map((faq, index) => (
              
              <div points={index} >

                {faq.points}
               
                {faq.subPoints}
                  
               
                
              </div>
            ))}

          </div>
         
        </AccordionContent >
      </AccordionItem>
    </Accordion>
  );
};
export default Faq;