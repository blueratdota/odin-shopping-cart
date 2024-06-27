// Import Responsive
import { useMediaQuery } from "react-responsive";
import SingleAccordion from "./SingleAccordion";
// Import Icons
import Icon from "@mdi/react";
import { mdiEmailOutline } from "@mdi/js";

const Footer = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 720px)" });
  return (
    <>
      {isTabletOrMobile ? (
        <div className="mx-4 pt-10 pb-4 flex flex-col gap-3">
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
            <div className="my-2 text-gray-400">x</div>
          </SingleAccordion>
          <SingleAccordion title={"Shipping Methods"}>
            <div className="my-2 text-gray-400">x</div>
          </SingleAccordion>
          <SingleAccordion title={"About Us"}>
            <div className="my-2 text-gray-400">x</div>
          </SingleAccordion>
        </div>
      ) : (
        <footer className="bg-gray-800">
          <div>Newsletter</div>
          <div>Shop Service</div>
          <div>Information</div>
          <div>
            <div>Payment Methods</div>
            <div></div>
          </div>
          <div></div>
        </footer>
      )}
    </>
  );
};
export default Footer;
