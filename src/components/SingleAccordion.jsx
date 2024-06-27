// Import Chakra
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box
} from "@chakra-ui/react";
// Import Icons
import Icon from "@mdi/react";
import { mdiPlus, mdiMinus } from "@mdi/js";
// Import React
import { useState } from "react";

const SingleAccordion = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <Accordion
      allowToggle
      className=" text-white border border-white border-opacity-25 "
    >
      <AccordionItem className="p-2">
        {({ isExpanded }) => (
          <>
            <h2 className="pr-2">
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  className="uppercase font-medium text-lg"
                >
                  {title}
                </Box>
                {isExpanded ? (
                  <Icon path={mdiMinus} size={1} />
                ) : (
                  <Icon path={mdiPlus} size={1} />
                )}
              </AccordionButton>
            </h2>
            <AccordionPanel>{children}</AccordionPanel>
          </>
        )}
      </AccordionItem>
    </Accordion>
  );
};
export default SingleAccordion;
