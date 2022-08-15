import React , {useEffect , useRef} from 'react';
import styled from 'styled-components';
import {init} from 'ityped';
import Typewriter from 'typewriter-effect';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection , RightSection } from './HeroStyles';

const Hero = (props) => {

  const textRef = useRef();

  // useEffect(() => {

  //   init(textRef.current , {
  //     showCursor:true,
  //     backDelay:1500,
  //     backSpeed:60,
  //     strings:["Firebase developer" , "React developer" , "MERN Developer" , "Full-stack Developer" , 'Next JS Developer' ,'Sanity JS Developer','Redux Developer' ,'Heroku Developer' , 'Netlify Developer' , 'Styled-Components Developer' , 'antd developer' , 'Material UI developer','Context API developer' , 'Restful API developer', 'Stripe developer' ]
  //   })
  // })

  return (
    <>
      <Section row nopadding>
        <LeftSection>
          <SectionTitle main center>
            Hello and Welcome
          </SectionTitle>
          <SectionText>
          Hi , I am a freelance full-stack developer with experience in python flask, react js library , MERN. I will be your perfect front-end engineer with experience in 
          Material-UI , styled-components , SaaS, CSS.Perfect backend engineer with experiences in Python , node JS.
          </SectionText>
          <Button onClick={props.handleClick} Link to = 'https://github.com/churchillotiende'>Learn More</Button>
        </LeftSection>
        <RightSection>
          <Freelance center>
          Freelance
           <Span>
            <Typewriter 
           
            options={{ 
            strings:["Firebase developer" , "React developer" , "MERN Developer" , "Full-stack Developer" , 'Next JS Developer' ,'Sanity JS Developer','Redux Developer' ,'Heroku Developer' , 'Netlify Developer' , 'Styled-Components Developer' , 'antd developer' , 'Material UI developer','Context API developer' , 'Restful API developer', 'Stripe developer' ],
            autoStart:true,
            delay:75,
            loop:true
            }}
            /> 
          </Span>
          </Freelance>
        </RightSection>
      </Section>
    </>
  )
};

export default Hero;

const Freelance = styled.div`
  color:#b2a8a8 ;
`;

export const Span = styled.span`
  color:#fff;
  font-size:inherit;
`;