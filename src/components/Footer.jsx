// Import Responsive
import { useMediaQuery } from "react-responsive";
import SingleAccordion from "./SingleAccordion";
// Import Icons
import Icon from "@mdi/react";
import { mdiEmailOutline } from "@mdi/js";
import fanatecShortLogo from "../assets/images/svg/fanatec-f_white.svg";
import instagramLogo from "../assets/images/svg/footer_instagram.svg";
import facebookLogo from "../assets/images/svg/footer_facebook.svg";
import twitterLogo from "../assets/images/svg/footer_twitter.svg";
import youtubeLogo from "../assets/images/svg/footer_youtube.svg";
// Import Payment Imgs
import gcashLogo from "../assets/images/svg/payment_gcash-2.svg";
import mastercardLogo from "../assets/images/svg/payment_mastercard.svg";
import visaLogo from "../assets/images/svg/payment_visa.svg";
import paypalLogo from "../assets/images/svg/payment_paypal.svg";
// Import Shipping Imgs
import upsLogo from "../assets/images/svg/shipping_spx.svg";
import spxLogo from "../assets/images/svg/shipping_ups.svg";

const Footer = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 900px)" });
  return (
    <>
      {isTabletOrMobile ? (
        <footer className="px-4 pt-10 pb-4 flex flex-col gap-3 text-gray-400">
          <SingleAccordion title={"Newsletter"}>
            <div className="my-2 text-gray-400">
              <p>
                Subscribe to our free Newsletter and don't miss any special
                offer
              </p>
              <div className="flex pt-2">
                <input
                  type="email"
                  className="grow bg-transparent border border-gray-600 outline-0 focus:border-green-500 py-1 pl-4"
                />
                <div className=" bg-gray-600 border border-gray-600 flex items-center px-2">
                  <Icon path={mdiEmailOutline} size={1} />
                </div>
              </div>
            </div>
          </SingleAccordion>
          <SingleAccordion title={"Shop Service"}>
            <div className="my-2 text-gray-400">
              <ul className="flex flex-col gap-2">
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Forum</a>
                </li>
                <li>
                  <a href="#">Newsletter</a>
                </li>
                <li>
                  <a href="#">Media/ Downloads</a>
                </li>
                <li>
                  <a href="#">Fanatec Affiliate Program (FAP)</a>
                </li>
                <li>
                  <a href="#">Merchandising</a>
                </li>
              </ul>
            </div>
          </SingleAccordion>
          <SingleAccordion title={"Information"}>
            <div className="my-2 text-gray-400">
              <ul className="flex flex-col gap-2">
                <li>
                  <a href="#">Battery Regulations</a>
                </li>
                <li>
                  <a href="#">Cookie Settings</a>
                </li>
                <li>
                  <a href="#">Fanatec Consumer Guarantee</a>
                </li>
                <li>
                  <a href="#">Return Policy</a>
                </li>
                <li>
                  <a href="#">Social Media Competition: Terms and Conditions</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#">Shipping/ Delivery</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Jobs</a>
                </li>
                <li>
                  <a href="#">Trademark & Copyright</a>
                </li>
                <li>
                  <a href="#">Package Regulations</a>
                </li>
                <li>
                  <a href="#">
                    Settlement for Specified Commercial Transactions
                  </a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Imprint</a>
                </li>
              </ul>
            </div>
          </SingleAccordion>
          <SingleAccordion title={"Payment Methods"}>
            <div className="my-2 text-gray-400 flex gap-2 ">
              <div className="w-16 h-10 border border-white border-opacity-25 overflow-hidden p-1">
                <img
                  src={gcashLogo}
                  alt="gcash"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-16 h-10 border border-white border-opacity-25 overflow-hidden">
                <img
                  src={mastercardLogo}
                  alt="master card"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-16 h-10 border border-white border-opacity-25 overflow-hidden">
                <img
                  src={visaLogo}
                  alt="visa"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-16 h-10 border border-white border-opacity-25 overflow-hidden">
                <img
                  src={paypalLogo}
                  alt="paypal"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </SingleAccordion>
          <SingleAccordion title={"Shipping Methods"}>
            <div className="my-2 text-gray-400 flex gap-2 ">
              <div className="w-16 h-10 border border-white border-opacity-25 overflow-hidden">
                <img
                  src={upsLogo}
                  alt="gcash"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-16 h-10 border border-white border-opacity-25 overflow-hidden">
                <img
                  src={spxLogo}
                  alt="gcash"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </SingleAccordion>
          <SingleAccordion title={"About Us"}>
            <div className="my-2 text-gray-400">
              <p>
                Fanatec is the leading brand for dedicated sim racing hardware,
                including force feedback steering wheels, pedals, and complete
                cockpits for PlayStation, Xbox, and PC-based racing simulators.
              </p>
              <div className="overflow-hidden w-[40%] mt-4">
                <img
                  src="https://fanatec.com/themes/Frontend/Fanatec/frontend/_public/src/img/endor-logo_white.svg"
                  alt="gcash"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </SingleAccordion>
        </footer>
      ) : (
        <footer className="bg-gray-800 w-full text-gray-400">
          <div className="max-w-[1270px] mx-auto py-10 flex gap-8 [&>div]:basis-1/5 justify-center [&>div>h2]:text-white [&>div>h2]:text-lg [&>div>h2]:font-semibold [&>div>h2]:uppercase">
            <div className="mb-2">
              <h2 className="">Newsletter</h2>
              <p className="mt-2">
                Subscribe to our free Newsletter and don't miss any special
                offer
              </p>
              <div className="flex pt-2">
                <input
                  type="email"
                  className="grow bg-transparent border border-gray-600 outline-0 focus:border-green-500 py-1 pl-4"
                />
                <div className=" bg-gray-600 border border-gray-600 flex items-center px-2">
                  <Icon path={mdiEmailOutline} size={1} />
                </div>
              </div>
            </div>
            <div>
              <h2 className="">Shop Service</h2>
              <div className="my-2 text-gray-400">
                <ul className="flex flex-col gap-2">
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Forum</a>
                  </li>
                  <li>
                    <a href="#">Newsletter</a>
                  </li>
                  <li>
                    <a href="#">Media/ Downloads</a>
                  </li>
                  <li>
                    <a href="#">Fanatec Affiliate Program (FAP)</a>
                  </li>
                  <li>
                    <a href="#">Merchandising</a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h2 className="">Information</h2>
              <div className="my-2 text-gray-400">
                <ul className="flex flex-col gap-2">
                  <li>
                    <a href="#">Battery Regulations</a>
                  </li>
                  <li>
                    <a href="#">Cookie Settings</a>
                  </li>
                  <li>
                    <a href="#">Fanatec Consumer Guarantee</a>
                  </li>
                  <li>
                    <a href="#">Return Policy</a>
                  </li>
                  <li>
                    <a href="#">
                      Social Media Competition: Terms and Conditions
                    </a>
                  </li>
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="#">Shipping/ Delivery</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">Jobs</a>
                  </li>
                  <li>
                    <a href="#">Trademark & Copyright</a>
                  </li>
                  <li>
                    <a href="#">Package Regulations</a>
                  </li>
                  <li>
                    <a href="#">
                      Settlement for Specified Commercial Transactions
                    </a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Imprint</a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="">
                <h2 className="text-white text-lg font-semibold uppercase">
                  Payment Methods
                </h2>
                <div className="my-2 text-gray-400 flex flex-wrap gap-2 ">
                  <div className="w-16 h-10 border border-white border-opacity-25 overflow-hidden p-1">
                    <img
                      src={gcashLogo}
                      alt="gcash"
                      className="payment-grayscale"
                    />
                  </div>
                  <div className="w-16 h-10 border border-white border-opacity-25 overflow-hidden">
                    <img
                      src={mastercardLogo}
                      alt="master card"
                      className="payment-grayscale"
                    />
                  </div>
                  <div className="w-16 h-10 border border-white border-opacity-25 overflow-hidden">
                    <img
                      src={visaLogo}
                      alt="visa"
                      className="payment-grayscale"
                    />
                  </div>
                  <div className="w-16 h-10 border border-white border-opacity-25 overflow-hidden">
                    <img
                      src={paypalLogo}
                      alt="paypal"
                      className="payment-grayscale"
                    />
                  </div>
                </div>
                <div>
                  <h2 className="text-white text-lg font-semibold uppercase">
                    Shipping methods
                  </h2>
                  <div className="my-2 text-gray-400 flex gap-2 ">
                    <div className="w-16 h-10 border border-white border-opacity-25 overflow-hidden">
                      <img
                        src={upsLogo}
                        alt="gcash"
                        className="payment-grayscale"
                      />
                    </div>
                    <div className="w-16 h-10 border border-white border-opacity-25 overflow-hidden">
                      <img
                        src={spxLogo}
                        alt="gcash"
                        className="payment-grayscale"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-2">
              <h2 className="">About us</h2>
              <p className="mt-2">
                Fanatec is the leading brand for dedicated sim racing hardware,
                including force feedback steering wheels, pedals, and complete
                cockpits for PlayStation, Xbox, and PC-based racing simulators.
              </p>
              <div className="overflow-hidden w-[60%] mt-4">
                <img
                  src="https://fanatec.com/themes/Frontend/Fanatec/frontend/_public/src/img/endor-logo_white.svg"
                  alt="gcash"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </footer>
      )}
      <div className="w-full mt-10 border-b border-gray-400 border-opacity-25 text-gray-400 px-4 md:max-w-[1270px] md:mx-auto">
        <div className="h-12">
          <img
            src={fanatecShortLogo}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <p className="text-center pt-5">*All prices incl. value added tax</p>
        <p className="text-center py-5">
          This site is just a copycat hehe pls don't take this site seriously.
          This site is protected by reCAPTCHA and the Google{" "}
          <span className="text-red-700">Privacy Policy</span> and{" "}
          <span className="text-red-700">Terms of Service</span> apply.
        </p>
      </div>
      <div className="flex gap-4 mt-5 justify-center text-gray-400">
        <div className="circle-icon">
          <div className="mx-auto">
            <img
              src={facebookLogo}
              alt="facebook"
              className="w-full h-full object-contain svg-filter"
            />
          </div>
        </div>
        <div className="circle-icon">
          <div className="mx-auto">
            <img
              src={instagramLogo}
              alt="instagram"
              className="w-full h-full object-contain svg-filter"
            />
          </div>
        </div>
        <div className="circle-icon">
          <div className="mx-auto">
            <img
              src={twitterLogo}
              alt="twitter"
              className="w-full h-full object-contain svg-filter"
            />
          </div>
        </div>
        <div className="circle-icon">
          <div className="mx-auto">
            <img
              src={youtubeLogo}
              alt="youtube"
              className="w-full h-full object-contain svg-filter"
            />
          </div>
        </div>
      </div>
      <div className="py-5 px-4 text-gray-400">
        <p className="text-center">
          © 2024 Endor AG. Trademarks belong to their respective owners. All
          rights reserved. Fanatec is a brand of ® Endor AG
        </p>
      </div>
    </>
  );
};
export default Footer;
