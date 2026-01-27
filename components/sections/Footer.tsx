const Footer = () => {
  return (
    <footer className="site-footer">
      {/* Top divider */}
      {/*<div className="footer-divider" />*/}

      {/* Link columns */}
      <div className="footer-grid">
        <div>
          <h4 className="text-dark-200 dark:text-dark-100">Products</h4>
          <ul>
            <li>iPhone</li>
            <li>AirPods</li>
            <li>iPad</li>
            <li>Mac</li>
            <li>Apple Watch</li>
            <li>Apple TV</li>
            <li>Accessories</li>
            <li>HomePod Mini</li>
          </ul>
        </div>

        <div>
          <h4 className="text-dark-200 dark:text-dark-100">Service</h4>
          <ul>
            <li>Shop</li>
            <li>Repairs</li>
            <li>Apple Warranty</li>
            <li>Trade-ins</li>
            <li>Buy on credit</li>
            <li>Mac Software</li>
            <li>FAQs</li>
          </ul>
        </div>

        <div>
          <h4 className="text-dark-200 dark:text-dark-100">Top Sellers</h4>
          <ul>
            <li>iPhone 16 Pro Max</li>
            <li>iPad Air M3</li>
            <li>13-inch MacBook Air M4</li>
            <li>Mac Mini M4</li>
            <li>iPhone 16</li>
            <li>iPhone 15</li>
            <li>Apple Watch Series 10</li>
          </ul>
        </div>

        <div>
          <h4 className="text-dark-200 dark:text-dark-100">Company</h4>
          <ul>
            <li>About us</li>
            <li>Policies</li>
            <li>Terms & Conditions</li>
            <li>Newsletter</li>
            <li>Review us</li>
          </ul>
        </div>

        <div>
          <h4 className="text-dark-200 dark:text-dark-100">Useful Links</h4>
          <ul>
            <li>iPhone Photography</li>
            <li>iPhone Battery Health</li>
            <li>Manage Apple ID</li>
            <li>iCloud.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="footer-divider mt-14" />

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="footer-contact">
          <p>Call Us: +254 722 986 457</p>
          <p>Email Us: info@applecenter.co.ke</p>
        </div>

        <div className="footer-payments">
          <img src="/visa.png" alt="Visa and Mastercard accepted" />
        </div>

        <div className="footer-socials">
          <span>f</span>
          <span>◎</span>
          <span>𝕏</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// import { footerLinks } from "@/app/constants";
//
// const Footer = () => {
//   return (
//     <footer className="bg-black mx-auto">
//       <div className="info ">
//         <p>
//           More ways to shop: Find an Apple Store or other retailer near you.
//         </p>
//         <img src="/new-logo.png" alt="Apple logo" />
//       </div>
//
//       <hr />
//
//       <div className="links">
//         <p>Copyright © 2024 Apple Inc. All rights reserved.</p>
//
//         <ul>
//           {footerLinks.map(({ label, link }) => (
//             <li key={label}>
//               <a href={link}>{label}</a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </footer>
//   );
// };
// export default Footer;
