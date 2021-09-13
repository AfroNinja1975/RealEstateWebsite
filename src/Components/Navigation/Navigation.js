import { useContext, useState } from "react";
import LocationContext from "../../store/location-context";
import Modal from "../../UI/Modal/Modal";
import classes from "./Navigation.module.css";
//import NavItems from "./NavigationArray.js";
import NavItem from "./NavItem";

const Navigation = (props) => {
  const locationCtx = useContext(LocationContext);
  const { city } = locationCtx;
  const [login, setLogin] = useState(false);
  const [signUp, setSignUp] = useState(false);

  const handleLogin = (e) => {
    setLogin(true);
    //    e.preventDefault();
    return console.log("Login");
  };

  const handleSignUp = (e) => {
    setSignUp(true);
    //   e.preventDefault();
    return console.log("SignUp");
  };

  const handleManageResults = (e) => {
    //    e.preventDefault();
    return console.log("Manage Results");
  };

  const handleAdvertise = (e) => {
    //   e.preventDefault();
    return console.log("Advertise");
  };

  const handleModalClose = (e) => {
    setLogin(false);
    setSignUp(false);
  };

  const NavItems = [
    {
      section: [
        {
          button: false,
          buttonType: "link",
          name: "Buy",
          subLinks: [
            {
              section: [
                {
                  header: "Homes for Sale",
                  links: [
                    {
                      name: city + " Homes for Sale",
                      action: "/HomesForSale/IHFS",
                    },
                    {
                      name: city + " New Home Communities",
                      action: "/HomesForSale/INHC",
                    },
                    {
                      name: city + " New Construction and Plans",
                      action: "/HomesForSale/INCAP",
                    },
                    {
                      name: city + " Foreclosures",
                      action: "/HomesForSale/IF",
                    },
                    {
                      name: city + " Open Houses",
                      action: "/HomesForSale/IOH",
                    },
                    {
                      name: "Senior Housing",
                      action: "/HomesForSale/SH",
                    },
                  ],
                },
                {
                  header: "Homes Values",
                  links: [
                    {
                      name: city + " Housing Market",
                      action: "/HomesValues/IHFS",
                    },
                    {
                      name: city + " Recently Sold",
                      action: "/HomesValues/IRS",
                    },
                    {
                      name: city + " Property Records",
                      action: "/HomesValues/IPR",
                    },
                    {
                      name: "Home Buying Tips",
                      action: "/HomesValues/HBT",
                    },
                    {
                      name: "Home Selling Tips",
                      action: "/HomesValues/HST",
                    },
                  ],
                },
                {
                  header: "Home Buying Tips",
                  links: [
                    {
                      name: "Home Buying Checklist",
                      action: "/HomesBuyingTips/HBC",
                    },
                    {
                      name:
                        "Home Buyers Reveal: 'What I Wish I Had Known Before Buying'",
                      action: "/HomesBuyingTips/HBR",
                    },
                    {
                      name: "My First Home",
                      action: "/HomesBuyingTips/MFH",
                    },
                    {
                      name: "First-Time Home Buyer Resource Center",
                      action: "/HomesBuyingTips/FTHBRC",
                    },
                    {
                      name: "More Home Buying Insights",
                      action: "/HomesBuyingTips/MHBI",
                    },
                    {
                      name: "Success Stories",
                      action: "/HomesBuyingTips/SS",
                    },
                  ],
                },
              ],
            },
          ],
          action: "/Buy",
        },
        {
          button: false,
          buttonType: "link",
          name: "Sell",
          subLinks: [
            {
              section: [
                {
                  header: "Home Selling",
                  links: [
                    {
                      name: "Seller's Marketplace",
                      action: "/HomeSelling/SM",
                    },
                    {
                      name: "See What Your Home Is Worth",
                      action: "/HomeSelling/SWYHIW",
                    },
                    {
                      name: "Learn How To Sell Your Home",
                      action: "/HomeSelling/LHTSYH",
                    },
                    {
                      name: "How To Select An Agent",
                      action: "/HomeSelling/HTSAA",
                    },
                  ],
                },
                {
                  header: "Home Selling Tips",
                  links: [
                    {
                      name:
                        "Selling Your Home? Don't Neglect These 6 Maintenance Tasks - Or Else",
                      action: "/HomeSellingTips/SYHDNT6MTOE",
                    },
                    {
                      name: "More Home Selling Insights",
                      action: "/HomeSellingTips/MHSI",
                    },
                  ],
                },
              ],
            },
          ],
          action: "/Sell",
        },
        {
          button: false,
          buttonType: "link",
          name: "Rent",
          subLinks: [
            {
              section: [
                {
                  header: "Apartments For Rent",
                  links: [
                    {
                      name: "Apartments for Rent in " + city,
                      action: "/ApartmentsForRent/AFRII",
                    },
                    {
                      name: "Houses for Rent in " + city,
                      action: "/ApartmentsForRent/HFRII",
                    },
                    {
                      name: "Condos for Rent in " + city,
                      action: "/ApartmentsForRent/CFRII",
                    },
                    {
                      name: "Townhomes for Rent in " + city,
                      action: "/ApartmentsForRent/TFRII",
                    },
                    {
                      name: city + "Affordable",
                      action: "/ApartmentsForRent/IA",
                    },
                    {
                      name: city + "Luxury Rentals",
                      action: "/ApartmentsForRent/ILR",
                    },
                    {
                      name: "All " + city + " Rentals",
                      action: "/ApartmentsForRent/AIR",
                    },
                    {
                      name: "Senior Housing",
                      action: "/ApartmentsForRent/SH",
                    },
                  ],
                },
                {
                  header: "Landlord Tools",
                  links: [
                    {
                      name: "Manage Rentals",
                      action: "/LandlordTools/MR",
                    },
                    {
                      name: "List Your Rentals",
                      action: "/LandlordTools/LYR",
                    },
                    {
                      name: "Screen Tenants",
                      action: "/LandlordTools/ST",
                    },
                    {
                      name: "Create A Lease",
                      action: "/LandlordTools/CAL",
                    },
                    {
                      name: "Collect Rent Online",
                      action: "/LandlordTools/CRO",
                    },
                  ],
                },
                {
                  header: "Home Renting Tips",
                  links: [
                    {
                      name: "Should I Rent Or Buy?",
                      action: "/HomeRentingTips/SIROB",
                    },
                    {
                      name:
                        "Debunked! 8 Myths About Renting You Should Stop Believing Immediately",
                      action: "/HomeRentingTips/D8MARYSSBI",
                    },
                    {
                      name: "Renting With Pets Tips",
                      action: "/HomeRentingTips/RWPT",
                    },
                    {
                      name: "More Renting Insights",
                      action: "/HomeRentingTips/MRI",
                    },
                  ],
                },
              ],
            },
          ],
          action: "/Rent",
        },
        {
          button: false,
          buttonType: "link",
          name: "Mortgage",
          subLinks: [
            {
              section: [
                {
                  header: "Mortgage Rates",
                  links: [
                    {
                      name: "Get Pre-Approved",
                      action: "/MortgageRates/GPA",
                    },
                    {
                      name: "Mortgage Rates",
                      action: "/MortgageRates/MR",
                    },
                    {
                      name: "Home Equity Financing Rates",
                      action: "/MortgageRates/HEFR",
                    },
                    {
                      name: "Refinance Rates",
                      action: "/MortgageRates/RR",
                    },
                    {
                      name: "Finance Advice",
                      action: "/MortgageRates/FA",
                    },
                    {
                      name: "For Veterans",
                      action: "/MortgageRates/FV",
                    },
                  ],
                },
                {
                  header: "Calculators",
                  links: [
                    {
                      name: "Mortgage Calculators",
                      action: "/Calculators/MC",
                    },
                    {
                      name: "Refinance Calculator",
                      action: "/Calculators/RC",
                    },
                    {
                      name: "How Much House Can I Afford",
                      action: "/Calculators/HMHCIA",
                    },
                    {
                      name: "Rent vs. Buy",
                      action: "/Calculators/RVB",
                    },
                  ],
                },
                {
                  header: "Financial Advice",
                  links: [
                    {
                      name: "6 Ways Home Buyers Mess Up Getting A Mortgage",
                      action: "/FinancialAdvice/6WJBMUGAM",
                    },
                    {
                      name: "Mortgage Guide",
                      action: "/FinancialAdvice/MG",
                    },
                    {
                      name: "Learn About Home Insurance",
                      action: "/FinancialAdvice/LAHI",
                    },
                    {
                      name: "More Finance Reports",
                      action: "/FinancialAdvice/MFR",
                    },
                  ],
                },
              ],
            },
          ],
          action: "/Mortgage",
        },
        {
          button: false,
          buttonType: "link",
          name: "Find Realtors",
          subLinks: [
            {
              section: [
                {
                  header: "Find REALTORS",
                  links: [
                    {
                      name: "Top Rated " + city + " Realtors",
                      action: "/FindRealtors/TRIR",
                    },
                    {
                      name: "Search For Real Estate Agent",
                      action: "/FindRealtors/SFREA",
                    },
                  ],
                },
                {
                  header: "Why Use A REALTOR",
                  links: [
                    {
                      name:
                        "6 Reasons You Should Never Buy Or Sell A Home Without An Agent",
                      action: "/WhyUseARealtor/6RYSHVOSAHWAA",
                    },
                    {
                      name: "Differences Between Agent, Broker and REALTOR",
                      action: "/WhyUseARealtor/DBABAR",
                    },
                    {
                      name: "Listing vs. Buyer Agent",
                      action: "/WhyUseARealtor/LVBA",
                    },
                    {
                      name: "How To Find A REALTOR",
                      action: "/WhyUseARealtor/HTFAR",
                    },
                  ],
                },
                {
                  header: "News Around REALTORS",
                  links: [
                    {
                      name:
                        "Real Estate Agents Reveal The Toughes Home Buyers They've Ever Met",
                      action: "/NewsAroundRealtors/REARTTHBTEM",
                    },
                    {
                      name: "More News Arount REALTORS",
                      action: "/HomeRentingTips/MNAR",
                    },
                  ],
                },
              ],
            },
          ],
          action: "/FindRealtors",
        },
        {
          button: false,
          buttonType: "link",
          name: "My Home",
          subLinks: [],
          action: "/MyHome",
        },
        {
          button: false,
          buttonType: "link",
          name: "News & Insights",
          subLinks: [
            {
              section: [
                {
                  header: "News",
                  links: [
                    {
                      name: "The Latest News",
                      action: "/News/TLN",
                    },
                    {
                      name: "Housing Trends",
                      action: "/News/HT",
                    },
                    {
                      name: "Real Estate News",
                      action: "/News/REN",
                    },
                    {
                      name: "Celebrity Real Estate",
                      action: "/News/CRE",
                    },
                    {
                      name: "Unique Homes",
                      action: "/News/UH",
                    },
                    {
                      name: "For Pros",
                      action: "/News/FP",
                    },
                    {
                      name: "Corporate Blog",
                      action: "/News/CB",
                    },
                  ],
                },
                {
                  header: "Insights",
                  links: [
                    {
                      name: "Buying",
                      action: "/Insights/B",
                    },
                    {
                      name: "Selling",
                      action: "/Insights/S",
                    },
                    {
                      name: "Renting",
                      action: "/Insights/R",
                    },
                    {
                      name: "Financing",
                      action: "/Insights/F",
                    },
                    {
                      name: "Moving",
                      action: "/Insights/M",
                    },
                    {
                      name: "Home Improvement",
                      action: "/Insights/HI",
                    },
                    {
                      name: "Research",
                      action: "/Insights/Res",
                    },
                    {
                      name: "2021 Housing Market Predictions",
                      action: "/Insights/2HMP",
                    },
                    {
                      name: "2021 Hottest Zip Codes",
                      action: "/Insights/2HZC",
                    },
                  ],
                },
                {
                  header: "Guides & More",
                  links: [
                    {
                      name: "Complete Guide on How to Sell Your Home",
                      action: "/GuidesAndMore/CGOHTSYH",
                    },
                    {
                      name: "First-Time Home Buyer Resource Center",
                      action: "/GuidesAndMore/FTHBRC",
                    },
                    {
                      name: "Mortgage Guide",
                      action: "/GuidesAndMore/MG",
                    },
                    {
                      name: "Veterans Home Buyer Guide",
                      action: "/GuidesAndMore/VHBG",
                    },
                    {
                      name: "Home Insurance Guide",
                      action: "/GuidesAndMore/HIG",
                    },
                    {
                      name: "Real Estate Videos",
                      action: "/GuidesAndMore/REV",
                    },
                    {
                      name: "Housing Resources",
                      action: "/GuidesAndMore/HR",
                    },
                  ],
                },
              ],
            },
          ],
          action: "/Insights",
        },
      ],
    },
    {
      section: [
        {
          button: true,
          buttonType: "secondary",
          name: "Manage Results",
          subLinks: [],
          action: handleManageResults,
        },
        {
          button: true,
          buttonType: "secondary",
          name: "Advertise",
          subLinks: [],
          action: handleAdvertise,
        },
      ],
    },
    {
      section: [
        {
          button: true,
          buttonType: "inline",
          name: "Log In",
          subLinks: [],
          action: handleLogin,
        },
        {
          button: true,
          buttonType: "primary",
          name: "Sign Up",
          subLinks: [],
          action: handleSignUp,
        },
      ],
    },
  ];

  return (
    <nav className={classes.nav}>
      {NavItems.map(({ section }, idx) => {
        return (
          <ul className={classes.navSection} key={idx}>
            {section.map(
              ({ button, buttonType, name, subLinks, action }, idx) => {
                return (
                  <NavItem
                    button={button}
                    buttonType={buttonType}
                    index={idx}
                    key={idx}
                    name={name}
                    subLinks={subLinks}
                    action={action}
                  />
                );
              }
            )}
          </ul>
        );
      })}
      {login && (
        <Modal onHideModal={handleModalClose}>Login Modal</Modal>
      )}
      {signUp && (
        <Modal onHideModal={handleModalClose}>Sign Up Modal</Modal>
      )}
    </nav>
  );
};

export default Navigation;