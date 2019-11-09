import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'react-emotion';
import { Flex } from 'grid-emotion';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import GridItem from '../components/GridItem';
import Tools from '../images/tools.svg';
import Work from '../images/work.svg';

const Header = styled.header`
  width: 100%;
  height: 550px;
  position: relative;
  padding: 1.75rem;
  @media (max-width: ${props => props.theme.breakpoint.s}) {
    height: 700px;
  }
`;

const Logo = styled.h2`wrapper
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
  padding: 0 1.75rem;
  margin-top: 50px;
`;

const Hero = styled(Flex)`
  height: 80%;
  text-align: center;
  h1 {
    margin-top: 10%;
    letter-spacing: 0.05rem;
    line-height: 3.2rem;
  }
  h3 {
    font-family: ${props => props.theme.fontFamily.body};
    margin-top: 2rem;
    font-size: 1.5rem;
    font-weight: 700;
  }
  @media (max-width: ${props => props.theme.breakpoint.m}) {
    h1 {
      line-height: 3.5rem;
    }
    h3 {
      font-size: 1.5rem;
    }
  }
  @media (max-width: ${props => props.theme.breakpoint.s}) {
    h1 {
      margin: auto;
      line-height: 2.5rem;
    }
    h3 {
      font-size: 1.3rem;
    }
  }
`;

const Wrapper = styled(Flex)`
  padding: 0 6%;
  max-width: ${props => props.theme.maxWidth};
`;

const PrimaryBG = styled.section`
  background: ${props => props.theme.colors.primaryDark};
  color: ${props => props.theme.colors.textInvert};
  h1,
  h2,
  h3,
  h4 {
    color: ${props => props.theme.colors.textInvert};
  }
`;

const ServiceImage = styled.div`
  flex-basis: calc(99.9% * 4 / 7 - 10rem);
  max-width: calc(99.9% * 4 / 7 - 5rem);
  width: calc(99.9% * 4 / 7 - 5rem);
  text-align: center;
  img {
    width: 90%;
  }
  @media (max-width: ${props => props.theme.breakpoint.l}) {
    flex-basis: 100%;
    max-width: 100%;
    width: 100%;
    img {
      width: 50%;
    }
  }
  @media (max-width: ${props => props.theme.breakpoint.s}) {
    img {
      width: 75%;
    }
  }
`;

const ServiceText = styled.div`
  flex-basis: calc(99.9% * 3 / 7 - -7rem);
  @media (max-width: ${props => props.theme.breakpoint.l}) {
    flex-basis: 100%;
    max-width: 100%;
    width: 100%;
  }
  ol,
  ul {
    list-style: none;
    margin-left: 0;
  }
  li:before {
    content: '✔️';
    padding-right: 8px;
  }
`;

const Contact = styled(Wrapper)`
  margin: 0 auto;
  h1,
  h2,
  h3 {
    color: ${props => props.theme.colors.text};
  }
  h3 {
    font-family: ${props => props.theme.fontFamily.body};
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: 600;
  }
  @media (max-width: ${props => props.theme.breakpoint.l}) {
    font-size: 1.25rem;
    h3 {
      font-family: ${props => props.theme.fontFamily.body};
      margin-top: 0;
      font-size: 1.25rem;
      font-weight: 600;
    }
  }
`;

const IndexPage = ({
  data: {
    caseStudies: { edges },
  },
}) => (
  <Layout>
    <Header>
     {/*  <Logo>Noman Khan</Logo> */}
      <Hero justifyContent="center" alignItems="center" flexDirection="column">
        <h1>
        👋 Hello, I am Noman.  <br /> As a Design Technologist, <br /> 
        I design and develop pixel perfect <br />
        user interfaces and experiences.
        </h1>
        <h3>Here are some of my recent projects 😄</h3>
      </Hero>
    </Header>



    <Wrapper p={4} mb={[4, 4, 5]} mx="auto" justifyContent="space-between" flexWrap="wrap">
      {edges.map(c => (
        <GridItem
          uid={c.node.uid}
          key={c.node.uid}
          image={c.node.data.header_image.localFile.childImageSharp.fluid}
          alt={c.node.data.title.text}
          title={c.node.data.title.text}
          subtitle={c.node.data.subtitle.text}
        />
      ))}
    </Wrapper>

    
    <PrimaryBG>
      <Wrapper flexDirection="column" p={4} mx="auto">


        <Flex w={1} py={3} justifyContent="space-between" flexWrap="wrap">
          
          <ServiceImage>
            <img src={Work} alt="How i work" />
          </ServiceImage>
          <ServiceText>
            <h2>How I work! 💼 </h2>
            <p>
            In my design process, I incorporate principles from Design Thinking and the 
            Design Sprint. My procedure is to go through the phases of research, design, 
            prototyping and testing. I would go through iterations wherever necessary to 
            achieve the best result possible.
            </p>
            <ul>
              <li>Research</li>
              <p>UX Research will most likely be conducted at the beginning (understand) 
                and at the end of the design process (test). Methods I use and have experience
                 with, are (Remote) Interviews, Online Surveys, Contextual Inquiry and 
                 Experience Interviews.</p>

              <li>Design</li>
              <p>Based on the results from the research, I will create multiple concepts for 
                user flows and solutions for information architecture. After consolidating concepts, 
                visual design will be done in Sketch..</p>

              <li>Prototype</li>
              <p>For visualization of user flows and interactive details, 
                the screens will be merged into a prototype with a prototyping tool like InVision or Figma. 
                This way the digital product can be tested with users.</p>

                <li>Test</li>
                <p>It has been found that the number of five testers is ideal to 
                  get the most valuable feedback. Testers would be given a task 
                  to fulfill with the product and they would be asked questions accordingly.</p>
            </ul>
          </ServiceText>
        </Flex>



        <Flex w={1} py={5} justifyContent="space-between" flexDirection="row-reverse" flexWrap="wrap">
          <ServiceImage>
            <img src={Tools} alt="Data Report" />
          </ServiceImage>
          <ServiceText>
            <h2>Tools i use! 🔧</h2>
            <p>
              I like to work on the lastest and some of the most amazing tools currently in the 
              market. 
            </p>
            <ul>
              <li>Adobe Creative Suite</li>
              <li>Adobe XD</li>
              <li>Sketch</li>
              <li>Figma</li>
              <li>inVision</li>
              <li>GatsbyJS</li>
              <li>Trello</li>
            </ul>
          </ServiceText>
        </Flex>

{/* 

        <Flex w={1} py={5} justifyContent="space-between" flexWrap="wrap">
          <ServiceImage>
            <img src={MayTheForce} alt="May the Force" />
          </ServiceImage>
          <ServiceText>
            <h2>May the force be with you</h2>
            <p>
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
              blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language
              ocean.
            </p>
            <ul>
              <li>Service Super</li>
              <li>Great Offer</li>
            </ul>
          </ServiceText>
        </Flex>

 */}



      </Wrapper>
    </PrimaryBG>
    <Contact px={4} py={6} justifyContent="center" alignItems="center" flexDirection="column">
      <h1>Say hi!👋</h1>
      <h3>TheNomanAhmed@gmail.com</h3>
    </Contact>
    <Footer />
  </Layout>
);

export default IndexPage;

IndexPage.propTypes = {
  data: PropTypes.shape({
    caseStudies: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
  }).isRequired,
};

export const pageQuery = graphql`
  query IndexQuery {
    caseStudies: allPrismicCaseStudy(sort: { fields: [last_publication_date], order: DESC }) {
      edges {
        node {
          uid
          data {
            header_image {
              localFile {
                childImageSharp {
                  fluid(
                    maxWidth: 900
                    maxHeight: 900
                    quality: 90
                    traceSVG: { color: "#021212" }
                    cropFocus: ENTROPY
                  ) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
            }
            title {
              text
            }
            subtitle {
              text
            }
          }
        }
      }
    }
  }
`;
