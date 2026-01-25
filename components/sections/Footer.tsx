import { footerLinks } from "@/app/constants";

const Footer = () => {
  return (
    <footer className="bg-black mx-auto">
      <div className="info ">
        <p>
          More ways to shop: Find an Apple Store or other retailer near you.
        </p>
        <img src="/new-logo.png" alt="Apple logo" />
      </div>

      <hr />

      <div className="links">
        <p>Copyright © 2024 Apple Inc. All rights reserved.</p>

        <ul>
          {footerLinks.map(({ label, link }) => (
            <li key={label}>
              <a href={link}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
