import faqsData from '../fixtures/faqs';
import { Accordion } from '../components';
import { OptForm } from '../components';

export function FaqsContainer(){
   
    return(

    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      <Accordion.Frame>
        {faqsData.map((item) => (
          <Accordion.Item key={item.id}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion.Frame>
      <OptForm>
        <OptForm.Input placeholder="Email Address"/>
        <OptForm.Button>Try it Now</OptForm.Button>
        <OptForm.Break />
        <OptForm.Text>Ready to Watch? Enter your email to create or restart your memebership</OptForm.Text>
      </OptForm>
      </Accordion>


    );
}


