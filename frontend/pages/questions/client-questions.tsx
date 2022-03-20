import Head from 'next/head';
import Form from 'react-bootstrap/Form';

import questionData from '/utils/clientQuestions.json';

export default function ClientQuestions() {
  const aboutMotherQuestions = questionData?.aboutMother;

  return (
    <>
      <Head>
        <title>Client Questions</title>
      </Head>
      <div>
        <section>
          <h3 style={{ marginTop: '10%' }}>About You</h3>
          {aboutMotherQuestions?.map((question, index) => {
            return (
              <Form>
                <Form.Group className='mb-3' controlId='formGroupEmail'>
                  <Form.Label>{`${index + 1}. ${
                    question?.question
                  }`}</Form.Label>
                  <Form.Control type='text' placeholder='optional...' />
                </Form.Group>
              </Form>
            );
          })}
        </section>
      </div>
    </>
  );
}
