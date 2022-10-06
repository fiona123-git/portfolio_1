
import Landing from '../components/Landing/Landing';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Technologies/Technologies';
import TimeLine from '../components/About/About';
import Image from 'next/image'
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

// this where all the components go
const Home = () => {
  return (
    <Layout>
       <Section grid> 
        <Landing />
      
       </Section> 
       <TimeLine />
      <Projects />
      <Skills/>
      
    </Layout>
  );
};

export default Home;

// reference : https://www.freecodecamp.org/how-to-build-a-portfolio-site-with-nextjs-tailwind/amp/

