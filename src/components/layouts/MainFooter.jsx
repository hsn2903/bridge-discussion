import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoYoutube,
} from "react-icons/io5";

const MainFooter = () => {
  return (
    <footer class=" py-12 bg-sky-950 text-gray-300 text-base">
      <div className="w-[95%] md:w-[90%] mx-auto">
        <div class="flex flex-col md:flex-row gap-8">
          <div class="w-full md:w-2/5 flex flex-col gap-4">
            <Link href="/">
              <Logo />
            </Link>

            <ul class="flex items-center gap-4">
              <li>
                <Link href="#">
                  <IoLogoTwitter size={20} />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <IoLogoFacebook size={20} />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <IoLogoInstagram size={20} />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <IoLogoYoutube size={20} />
                </Link>
              </li>
            </ul>

            <p class="copyright">
              Copyright &copy;
              <span class="year">{new Date().getFullYear()}</span> All rights
              reserved.
            </p>
          </div>

          {/* Contact us */}
          <div class="w-full md:w-1/5">
            <p class="text-lg font-medium">Contact us</p>
            <hr className="mt-2 mb-4 border border-gray-500" />
            <address class="flex flex-col gap-2">
              <p class="address">
                623 Harrison St., 2nd Floor, San Francisco, CA 94107
              </p>
              <p>
                <a class="footer-link" href="tel:415-201-6370">
                  415-201-6370
                </a>
                <br />
                <a class="footer-link" href="mailto:hello@bdiscussion.com">
                  hello@bdiscussion.com
                </a>
              </p>
            </address>
          </div>

          {/* Account */}
          <nav class="w-full md:w-1/5">
            <p class="text-lg font-medium">Account</p>
            <hr className="mt-2 mb-4 border border-gray-500" />

            <ul class="flex flex-col gap-2">
              <li>
                <a class="footer-link" href="#">
                  Create account
                </a>
              </li>
              <li>
                <a class="footer-link" href="#">
                  Sign in
                </a>
              </li>
              <li>
                <a class="footer-link" href="#">
                  iOS app
                </a>
              </li>
              <li>
                <a class="footer-link" href="#">
                  Android app
                </a>
              </li>
            </ul>
          </nav>

          {/* Company */}
          <nav class="w-full md:w-1/5">
            <p class="text-lg font-medium">Company</p>
            <hr className="mt-2 mb-4 border border-gray-500" />

            <ul class="flex flex-col gap-2">
              <li>
                <a class="footer-link" href="#">
                  About Us
                </a>
              </li>
              <li>
                <a class="footer-link" href="#">
                  For Business
                </a>
              </li>
              <li>
                <a class="footer-link" href="#">
                  Partners
                </a>
              </li>
              <li>
                <a class="footer-link" href="#">
                  Careers
                </a>
              </li>
            </ul>
          </nav>

          <nav class="w-full md:w-1/5">
            <p class="text-lg font-medium">Resources</p>
            <hr className="mt-2 mb-4 border border-gray-500" />

            <ul class="flex flex-col gap-2">
              <li>
                <a class="footer-link" href="#">
                  Help center
                </a>
              </li>
              <li>
                <a class="footer-link" href="#">
                  Privacy & terms
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
