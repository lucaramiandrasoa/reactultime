import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface HelloProps {
    name: string;

    //tu peux ajouter d'autres variable ici par exemple id: int et ajouter au paramètre en dessous { name, id }: HelloProps
  }

const HelloPages = ({ name }: HelloProps) => {
  return (
    <>
      <div>Hello you</div>

      <div className='bg-red-600 rounded'>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent >
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  )
}


export default HelloPages


