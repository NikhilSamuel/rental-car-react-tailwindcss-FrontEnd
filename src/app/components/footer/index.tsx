import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from "../logo";

const FooterContainer = styled.div`
  background-color: #1d2124;
  ${tw`
    flex
    flex-col
    min-w-full
    pt-10 
    md:pt-16 
    pb-1 
    items-center 
    justify-center
  `};
`;

const InnerFooterContainer = styled.div`
  ${tw`
  flex
  flex-wrap
  w-full
  h-full
  max-w-screen-2xl 
  justify-center
  lg:pl-12
  lg:pr-12
  mb-10
`}
`;

const AboutContainer = styled.div`
  ${tw`
  flex
  flex-col
  w-full
  md:w-auto
  mr-2 
  md:mr-16
  pl-10 
  pr-10
  md:pl-3 
  md:pr-3 
`}
`;

const SectionContainer = styled.div`
  ${tw`
  flex
  flex-col
  w-full
  md:w-auto
  mr-2 
  md:mr-16
  pl-10 
  pr-10
  mt-6 
  md:mt-0
  md:pl-3 
  md:pr-3 
`}
`;

const HorizontalContainer = styled.div`
  ${tw`
  flex
  items-center
`}
`;

const AboutText = styled.p`
  ${tw`
  text-white
  text-base
  font-normal
  max-w-xs
  mt-2 
  leading-5
`}
`;

const LinksList = styled.ul`
  ${tw`
  outline-none 
  list-none
  flex
  flex-col
`}
`;

const ListItem = styled.li`
  ${tw`
  mb-3
`}

  & > a {
    ${tw`
     text-base
     text-white
     transition-all
     hover:text-gray-400
    `}
  }
`;

const HeaderTitle = styled.h3`
  ${tw`
  text-2xl 
  font-bold
  text-white
  mb-3 

`}
`;

const SmallText = styled.p`
  ${tw`
  text-sm
  text-white
`}
`;

const RedIcon = styled.span`
  ${tw`
  w-8
  h-8 
  rounded-full
  flex
  items-center
  bg-red-500 
  justify-center
  text-white
  text-base
  mr-2 

`}
`;

const BottomContainer = styled.div`
  ${tw`
  flex
  w-full
  max-w-screen-2xl 
  justify-center
  mt-7
  md:mt-1 
`}
`;

const CopyRightText = styled.small`
  font-size: 14px;
  ${tw`
    text-gray-400
  `}
`;

export function Footer() {
  return (
    <FooterContainer>
      <InnerFooterContainer>
        <AboutContainer>
          <Logo color="white" bgColor="dark" />
          <AboutText>
            JawanCars is a Car renting and selling company located in all the
            seven continents which has high quality cars and Rockets.
          </AboutText>
        </AboutContainer>
        <SectionContainer>
          <HeaderTitle>Our Links</HeaderTitle>
          <LinksList>
            <ListItem>
              <a href="#">Home</a>
            </ListItem>
            <ListItem>
              <a href="#">About Us</a>
            </ListItem>
            <ListItem>
              <a href="#">Models</a>
            </ListItem>
            <ListItem>
              <a href="#">Services</a>
            </ListItem>
            <ListItem>
              <a href="#">Blog</a>
            </ListItem>
          </LinksList>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Other Links</HeaderTitle>
          <LinksList>
            <ListItem>
              <a href="#">FAQ</a>
            </ListItem>
            <ListItem>
              <a href="#">Support</a>
            </ListItem>
            <ListItem>
              <a href="#">Privacy Policy</a>
            </ListItem>
            <ListItem>
              <a href="#">Contact Us</a>
            </ListItem>
            <ListItem>
              <a href="#">Terms &amp; Conditions</a>
            </ListItem>
          </LinksList>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Call Now</HeaderTitle>
          <HorizontalContainer>
            <RedIcon>
              <FontAwesomeIcon icon={faPhoneAlt} />
            </RedIcon>
            <SmallText>+1 416 437 6471</SmallText>
          </HorizontalContainer>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Email</HeaderTitle>
          <HorizontalContainer>
            <RedIcon>
              <FontAwesomeIcon icon={faEnvelope} />
            </RedIcon>
            <SmallText>info@jawanrockets.ca</SmallText>
          </HorizontalContainer>
        </SectionContainer>
      </InnerFooterContainer>
      <BottomContainer>
        <CopyRightText>
          Copyright &copy; {new Date().getFullYear()} JawanCars. All rights
          reserved.
        </CopyRightText>
      </BottomContainer>
    </FooterContainer>
  );
}
