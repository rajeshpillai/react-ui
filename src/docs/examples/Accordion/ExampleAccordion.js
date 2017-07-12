import React from 'react';
import Accordion from 'zs-react/Accordion';

/** Custom message */
export default function AccordionExample() {
  var input = [{
    name: 'Title 1',
    content: 'Content belongs to title 1'
    },{
    name: 'Title 2',
    content: 'Content belongs to title 2'
    }]

    return <Accordion data = {input} />
}

