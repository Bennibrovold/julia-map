import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";

export const Layout = () => {
  return (
    <LayoutContainer>
      <Header>
        <Nav>
          <StyledLink to="/svetloyarovka">Светлояровка</StyledLink>
          <StyledLink to="/evgenevskoe">Евгеньевское</StyledLink>
        </Nav>
      </Header>

      <MainContent>
        <Outlet />
      </MainContent>

      <Footer>
        <FooterText>© {new Date().getFullYear()} Медицинский центр</FooterText>
      </Footer>
    </LayoutContainer>
  );
};

// Стилизованные компоненты
const LayoutContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
});

const Header = styled("header")({
  padding: "32px 0 16px",
});

const Nav = styled("nav")({
  display: "flex",
  justifyContent: "center",
  gap: "40px",
});

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.text.primary,
  fontSize: "18px",
  fontWeight: 500,
  transition: "color 0.2s ease",
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));

const MainContent = styled("main")({
  flex: 1,
  padding: "40px 0",
  maxWidth: "1280px",
  width: "100%",
  margin: "0 auto",
});

const Footer = styled("footer")({
  padding: "24px 0",
  textAlign: "center",
});

const FooterText = styled("p")({
  margin: 0,
  fontSize: "14px",
  color: "#666",
});
