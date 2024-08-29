import styled from "./Footer.module.css";
export const Footer = () => {
  return (
    <footer className={styled.footer}>
      Challenge by{" "}
      <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>.
      Coded by <a href="https://github.com/ephraim-beltran">Ephraim Beltran</a>.
    </footer>
  );
};
