import { Container } from "react-bootstrap";

function Header({ text }) {
  return (
    <header className="mb-5 py-3 bg-secondary">
      <Container>
        <h2 className="text-center">{text}</h2>
      </Container>
    </header>
  );
}
Header.defaultProps = {
  text: "Feedback UI",
};

export default Header;
