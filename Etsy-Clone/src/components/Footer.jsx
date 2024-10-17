const footerLinks = [
    {
      title: "Shop",
      links: [
        {
          name: "Gist cards",
          redirect: "https://www.flipkart.com/helpcentre",
        },
        {
          name: "Etsy Registery",
          redirect: "https://www.flipkart.com/about-us",
        },
        {
          name: "Sitemap",
          redirect: "https://www.flipkartcareers.com",
        },
        {
          name: "Flipkart Stories",
          redirect: "https://stories.flipkart.com",
        },
        {
          name: "Press",
          redirect: "https://stories.flipkart.com/category/top-stories/news",
        },
        {
          name: "Flipkart Wholesale",
          redirect: "https://www.flipkartwholesale.com",
        },
        {
          name: "Corporate Information",
          redirect: "https://www.flipkart.com/corporate-information",
        },
      ]
    },
    {
      title: "help",
      links: [
        {
          name: "Payments",
          redirect: "https://www.flipkart.com/pages/payments",
        },
        {
          name: "Shipping",
          redirect: "https://www.flipkart.com/pages/shipping",
        },
        {
          name: "Cancellation & Returns",
          redirect: "https://www.flipkart.com/helpcentre?catalog=55c9c6edb000002e002c1701&view=CATALOG",
        },
        {
          name: "FAQ",
          redirect: "https://www.flipkart.com/helpcentre?catalog=55c9c8e2b0000023002c1702&view=CATALOG",
        }
      ]
    },
    {
      title: "policy",
      links: [
        {
          name: "Return Policy",
          redirect: "https://www.flipkart.com/pages/returnpolicy",
        },
        {
          name: "Terms Of Use",
          redirect: "https://www.flipkart.com/pages/terms",
        },
        {
          name: "Security",
          redirect: "https://www.flipkart.com/pages/paymentsecurity",
        },
        {
          name: "Privacy",
          redirect: "https://www.flipkart.com/pages/privacypolicy",
        },
        {
          name: "Sitemap",
          redirect: "https://www.flipkart.com/sitemap",
        },
        {
          name: "EPR Compliance",
          redirect: "https://www.flipkart.com/pages/ewaste-compliance-tnc",
        },
      ]
    },
    {
      title: "social",
      links: [
        {
          name: "Facebook",
          redirect: "https://www.facebook.com/flipkart",
        },
        {
          name: "Twitter",
          redirect: "https://twitter.com/flipkart",
        },
        {
          name: "YouTube",
          redirect: "https://www.youtube.com/flipkart",
        }
      ]
    }
  ]
  
  const Footer = () => {
    return (
          <>
            <footer className="w-full py-1 sm:py-4 px-4 sm:px-12 bg-[#2638c0] text-white text-xs border-b border-gray-600 flex flex-col sm:flex-row overflow-hidden font-semibold">
              <div className="w-full sm:w-7/12 flex flex-col sm:flex-row">
  
                {footerLinks.map((el, i) => (
                  <div className="w-full sm:w-1/5 flex flex-col gap-2 my-3 sm:my-6 ml-5" key={i}>
                    <h2 className="text-white font-bold mb-2 uppercase">{el.title}</h2>
                    {el.links.map((item, i) => (
                      <a href={item.redirect} target="_blank" rel="noreferrer" className="hover:underline" key={i}>{item.name}</a>
                    ))}
  
                  </div>
                ))}
  
              </div>
  
              {/* <div className="border-gray-600 h-36 w-1 border-l mr-5 mt-6 hidden sm:block"></div> */}
              {/* <div className="w-full sm:w-5/12 my-6 mx-5 sm:mx-0 flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between">
                <div className="w-full sm:w-1/2">
                  <h2 className="text-[#7d8487]">Mail Us:</h2>
                  <p className="mt-2 leading-5">Flipkart Internet Private Limited,<br />
                    Buildings Alyssa, Begonia &<br />
                    Clove Embassy Tech Village,<br />
                    Outer Ring Road, Devarabeesanahalli Village,<br />
                    Bengaluru, 560103,<br />
                    Karnataka, India
                  </p>
                </div>
  
                <div className="w-full sm:w-1/2">
                  <h2 className="text-[#7d8487]">Registered Office Address:</h2>
                  <p className="mt-2 leading-5">Flipkart Internet Private Limited,<br />
                    Buildings Alyssa, Begonia &<br />
                    Clove Embassy Tech Village,<br />
                    Outer Ring Road, Devarabeesanahalli Village,<br />
                    Bengaluru, 560103,<br />
                    Karnataka, India <br />
                    CIN : U51109KA2012PTC066107<br />
                    Telephone: <a className="text-[#2568e0]" href="tel:18002029898">1800 202 9898</a>
                  </p>
                </div>
              </div> */}
  
            </footer>
          </>
    )
  };
  
  export default Footer;