import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Twitter,
} from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>JET.</Logo>
        <Desc>FUEL</Desc>
      </Left>
      <Center>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Catalog</ListItem>
          <ListItem>Cost Estimator</ListItem>
          <ListItem>Quote Request Form</ListItem>
          <ListItem>Empty Leg Flights</ListItem>
          <ListItem>Contact Us</ListItem>
        </List>
      </Center>
      <Center>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Center>
      <Right>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +1 (321) 123-4567
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> contact@jets.prototype
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
