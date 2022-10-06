import React from 'react';
import Link from 'next/link'


import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './LandingStyles';

// welcome page 
// using styles from  landing styleds
const Landing = (props) => (
  <div>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          Fiona's Portfolio
        </SectionTitle>
        
        <SectionText>
      I am a Fullstack  Web Developer and I have a passion for coding
        </SectionText>
        
          <Button onClick={props.handleClick}><Link href="#projects">Learn more</Link></Button>
    
        
      </LeftSection>
    </Section>
  
  </div>
);

export default Landing;
