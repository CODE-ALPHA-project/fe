import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FrequentQuestionTitleProp {
  title: string;
  content: string;
}

const FrequentQuestionItem = ({
  title,
  content,
}: FrequentQuestionTitleProp) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="question">
        <AccordionTrigger className="font-semibold">{title}</AccordionTrigger>
        <AccordionContent className="font-normal">{content}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FrequentQuestionItem;
