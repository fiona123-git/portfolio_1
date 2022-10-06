import React from 'react';
import { Section,  SectionTitle } from '../../styles/GlobalComponents'; // importing and using sytles from global components
const About = () => {
  return (
    <div>
      
      <Section>
      <SectionTitle>About </SectionTitle>
      <p>
        My main interests are about learning  the lastest technogies in the industry in order to become <br/>
      a better developer
        <p>
          {" "}
          I have experience in creating websites using the ux/ui model to implementing the design in frontend and creating<br/>
          a database for the backend. I also have experience in creating apis, testing using the test tools such as jest, <br/>
          securing the backend,  
        </p>
      </p>
    
      </Section>

      <style jsx>{`
        .about {
          margin: 50px;
        }
        p {
        max-width: 800px;
       font-size: 24px;
        line-height: 40px;
  font-weight: 300;
  padding-bottom: 3.6rem;
  color: rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </div>
  );
};

export default About;
