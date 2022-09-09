import React from "react";
import "./Footer.css";
import udmeyLogo from "./../NavBar/logo-udemy.svg";
function Footer() {
  return (
    <footer className="udlite-footer" data-purpose="footer" >
      <div className="footer-section bai-banner--bai-banner--O6PZA">
        <div>
          <div className="udlite-heading-lg">Teach the world online</div>
          <div className="udlite-text-md bai-banner--subtitle--2W2gx">
            Create an online video course, reach students across the globe, and
            earn money
          </div>
        </div>
        <div className="bai-banner--button-container--cygpr">
          <a
            href="/teaching/?ref=bai-sub-footer"
            className="udlite-btn udlite-btn-large udlite-btn-white-outline udlite-heading-md"
          >
            <span>Teach on Udemy</span>
          </a>
        </div>
      </div>
      <div className="footer-section ufb-notice--notice-row--37bdv">
        <div className="udlite-heading-lg ufb-notice--notice--1hN6h">
          <span>
            Top companies choose{" "}
            <a
              data-purpose="ufb-link"
              className="inverted-link"
              href="/udemy-business/?locale=en_US&amp;path=request-demo-mx%2F&amp;ref=footer-ad"
              target="_blank"
              rel="noopener"
              data-allow-referrer="true"
            >
              Udemy Business
            </a>{" "}
            to build in-demand career skills.
          </span>
        </div>
        <div className="ufb-notice--partner-logos--YyqeL">
          <img
            alt="Nasdaq"
            height="44"
            width="115"
            src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg"
          />
          <img
            alt="Volkswagen"
            height="44"
            width="44"
            src="https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg"
          />
          <img
            alt="Box"
            height="44"
            width="67"
            src="https://s.udemycdn.com/partner-logos/v4/box-light.svg"
          />
          <img
            alt="NetApp"
            height="44"
            width="115"
            src="https://s.udemycdn.com/partner-logos/v4/netapp-light.svg"
          />
          <img
            alt="Eventbrite"
            height="44"
            width="115"
            src="https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg"
          />
        </div>
      </div>
      <div className="footer-section footer-section-main">
        <div className="links-and-language-selector">
          <div className="language-selector-container">
            <button
              type="button"
              className="udlite-btn udlite-btn-medium udlite-btn-white-outline udlite-text-md language-selector-button--button--1wgoL"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                className="udlite-icon udlite-icon-small udlite-icon-color-neutral"
              >
                {/* <use xlink:href="#icon-language"></use> */}
              </svg>
              <span>English</span>
            </button>
          </div>
          <ul className="unstyled-list link-column">
            <li>
              <a
                href="/udemy-business/?locale=en_US&amp;mx_pg=home-page&amp;path=%2F&amp;ref=footer"
                target="_blank"
                rel="noopener"
                data-allow-referrer="true"
                className="udlite-btn udlite-btn-large udlite-btn-link udlite-text-sm link white-link"
              >
                <span>Udemy Business</span>
              </a>
            </li>
            <li>
              <a
                href="/teaching/?ref=teach_footer"
                className="udlite-btn udlite-btn-large udlite-btn-link udlite-text-sm link white-link"
              >
                <span>Teach on Udemy</span>
              </a>
            </li>
            <li>
              <a
                href="/mobile/"
                target="_blank"
                rel="noopener noreferrer"
                className="udlite-btn udlite-btn-large udlite-btn-link udlite-text-sm link white-link"
              >
                <span>Get the app</span>
              </a>
            </li>
            <li>
              <a
                href="https://about.udemy.com/?locale=en-us"
                className="udlite-btn udlite-btn-large udlite-btn-link udlite-text-sm link white-link"
              >
                <span>About us</span>
              </a>
            </li>
            <li>
              <a
                href="https://about.udemy.com/company?locale=en-us#offices"
                className="udlite-btn udlite-btn-large udlite-btn-link udlite-text-sm link white-link"
              >
                <span>Contact us</span>
              </a>
            </li>
          </ul>
          <ul className="unstyled-list link-column">
            <li>
              <a
                href="https://about.udemy.com/careers?locale=en-us"
                className="udlite-btn udlite-btn-large udlite-btn-link udlite-text-sm link white-link"
              >
                <span>Careers</span>
              </a>
            </li>
            <li>
              <a
                href="https://blog.udemy.com/?ref=footer"
                className="udlite-btn udlite-btn-large udlite-btn-link udlite-text-sm link white-link"
              >
                <span>Blog</span>
              </a>
            </li>
            <li>
              <a
                href="/support/"
                className="udlite-btn udlite-btn-large udlite-btn-link udlite-text-sm link white-link"
              >
                <span>Help and Support</span>
              </a>
            </li>
            <li>
              <a
                href="/affiliate/"
                className="udlite-btn udlite-btn-large udlite-btn-link udlite-text-sm link white-link"
              >
                <span>Affiliate</span>
              </a>
            </li>
            <li>
              <a
                href="https://investors.udemy.com"
                className="udlite-btn udlite-btn-large udlite-btn-link udlite-text-sm link white-link"
              >
                <span>Investors</span>
              </a>
            </li>
          </ul>
          <ul className="unstyled-list link-column">
            <li>
              <a
                href="/terms/"
                className="udlite-btn udlite-btn-large udlite-btn-link udlite-text-sm link white-link"
              >
                <span>Terms</span>
              </a>
            </li>
            <li>
              <a
                href="/terms/privacy/"
                className="udlite-btn udlite-btn-large udlite-btn-link udlite-text-sm link white-link"
              >
                <span>Privacy policy</span>
              </a>
            </li>
            <li>
              <button
                type="button"
                className="udlite-btn udlite-btn-large udlite-btn-link udlite-text-sm link white-link"
                data-purpose="footer.links.cookie_preferences"
              >
                <span>Cookie settings</span>
              </button>
            </li>
            <li>
              <a
                href="/sitemap/"
                className="udlite-btn udlite-btn-large udlite-btn-link udlite-text-sm link white-link"
              >
                <span>Sitemap</span>
              </a>
            </li>
            <li>
              <a
                href="https://about.udemy.com/accessibility-statement?locale=en-us"
                className="udlite-btn udlite-btn-large udlite-btn-link udlite-text-sm link white-link"
              >
                <span>Accessibility statement</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="logo-and-copyright">
          <div className="logo-container" data-purpose="logo-container">
            <a
              href="/"
              className="udlite-btn udlite-btn-large udlite-btn-link udlite-heading-md"
            >
              <img
                src={udmeyLogo}
                alt="Udemy"
                width="91.07142857142857"
                height="34"
              />
            </a>
          </div>
          <div
            className="copyright-container udlite-text-xs"
            data-purpose="footer-copyright"
          >
            © 2022 Udemy, Inc.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
