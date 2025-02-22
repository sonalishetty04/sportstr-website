import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faq = [
  {
    id: 1,
    title: "1. How does SportStr benefit my academy?",
    description: "Lorem Ipsum",
  },
  {
    id: 2,
    title: "2. Can SportStr handle multiple sports?",
    description:
      "Yes, SportStr is designed to support a wide range of sports, like Badminton, Cricket, Football, Tennis, Swimming, and many more providing tailored features for each discipline to meet specific coaching and management needs.",
  },
  {
    id: 3,
    title: "3. Is SportStr suitable for small academies?",
    description: "Lorem Ipsum",
  },
  {
    id: 4,
    title: "4. How secure is the data on SportStr?",
    description: "Lorem Ipsum",
  },
  {
    id: 5,
    title: "5. Can parents and athletes access SportStr?",
    description: "Lorem Ipsum",
  },
  {
    id: 6,
    title: "6. How do I get started with SportStr?",
    description: "Lorem Ipsum",
  },
];

function FaqSection() {
  return (
    <div className="px-8 md:px-20 xl:px-36 w-full py-24 md:py-36">
      <h1 className=" text-2xl md:text-5xl font-semibold text-center md:pb-10 pb-5">
        Frequently Asked <span className="text-green-500">Questions</span>
      </h1>

      <Accordion type="single" collapsible className="w-full ">
        {faq.map((item) => (
          <AccordionItem
            value={`item-${item.id}`}
            key={item.id}
            className="border-2 border-gray-300 my-5 rounded-xl py-1 px-6 "
          >
            <AccordionTrigger className="text-sm sm:text-xl font-semibold text-left md:text-center">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="text-xs sm:text-base">
              {item.description}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default FaqSection;
