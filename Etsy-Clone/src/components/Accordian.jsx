import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export default function Accordian() {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <div className="bg-[#fffbd8] pb-14">
        <p className="flex justify-center text-4xl pt-6">What is Etsy India?</p>
        <p className="flex justify-center pt-3 underline">
          Read our wonderfully weird story
        </p>

        <Accordion open={open === 1}>
          <AccordionHeader
            className="flex justify-center text-[#2638c0] pt-10"
            onClick={() => handleOpen(1)}
          >
            Why choose Etsy?
          </AccordionHeader>
          <AccordionBody className="text-xl">
            A community doing good Etsy is where people come together to make,
            sell, buy, and collect unique items. We’re also a community pushing
            for positive change for small businesses, people, and the planet.
            Here are some of the ways we’re making a positive impact, together:
            <br />
            Your purchases on Etsy in 2021 generated nearly $4 billion in income
            for small businesses.
            <br />
            We advocate for policy—at the global and local level—that benefits
            creative entrepreneurs and helps small businesses grow and thrive.
            <br />
            <br />
            We are deepening our commitment to a sustainable future and are
            working towards a new goal to reach net zero emissions by 2030.
            <br />
            Support independent creators There’s no Etsy warehouse—just millions
            of people selling the things they love. We make the whole process
            easy, helping you connect directly with talented artisans from
            across the world (including India) to find something extraordinary.
            <br />
            Peace of mind With Etsy Purchase Protection, you can shop
            confidently, knowing if something goes wrong with your order, we’ve
            got your back for all eligible purchases. If you ever need
            assistance, we are always ready to step in for support.
          </AccordionBody>
        </Accordion>
        <Accordion className="bg-[#fffbd8]" open={open === 2}>
          <AccordionHeader
            className="flex justify-center text-[#2638c0]"
            onClick={() => handleOpen(2)}
          >
            What can you shop on Etsy?
          </AccordionHeader>
          <AccordionBody className="text-xl">
            The imagination of Etsy sellers can run far and wide, which makes
            our platform a home to more than 100 million active listings across
            home, style, and gifts. Some of our popular categories include:
            <bg />
            <br />
            Home & Living: Whether you’re setting up a new apartment or making
            small upgrades for a home refresh, you’ll find everything you need
            to make your home a reflection of your personality on Etsy. From
            traditional elements like Jaipuri bedding, masala boxes, and
            Madhubani paintings to modern essentials like sleek table lamps,
            vibrant indoor planters, and decorative platters, Etsy sellers have
            much to offer.
            <br />
            <br />
            Clothing: Your unique fashion style deserves outfits that can match
            it. Discover tie-dye kaftans, linen shirts, hand-painted sarees,
            chikankari kurtis, ajrakh scarves and so much more—from small
            sellers who understand your aesthetic just as much as your comfort.
            <br />
            Accessories: The gajra for your friend’s haldi ceremony or the
            gemstone ring that represents your zodiac—sometimes, the little
            things can make the biggest impact. Etsy has it all and more!
            Explore a range of beautiful fashion accessories and jewellery for
            all the occasions you have planned.
            <br />
            <br />
            Gifts: From birthdays and anniversaries to festivals and weddings,
            we’ve got all the special moments in life covered. You’ll easily
            find the perfect presents that not only match the unique
            personalities of your loved ones perfectly but also make them feel
            seen and cherished.
          </AccordionBody>
        </Accordion>
        <Accordion className="bg-[#fffbd8]" open={open === 3}>
          <AccordionHeader
            className="flex justify-center text-[#2638c0]"
            onClick={() => handleOpen(3)}
          >
            How to buy on Etsy?
          </AccordionHeader>
          <AccordionBody className="text-xl">
            If you’re looking for something specific, start by putting in the
            keywords in our search and then using filters to narrow down the
            results. You can even message the sellers with any questions or
            requests you may have before placing an order with them.
            <br />
            <br />
            If you’re looking for inspiration, head on over to our Editor’s
            Picks or look out for the latest updates on our Journal to discover
            extraordinary items.
          </AccordionBody>
        </Accordion>
        <Accordion className="bg-[#fffbd8]" open={open === 4}>
          <AccordionHeader
            className="flex justify-center text-[#2638c0]"
            onClick={() => handleOpen(4)}
          >
            How to sell on Etsy?
          </AccordionHeader>
          <AccordionBody className="text-xl">
            You can sell handmade goods, vintage items, and craft supplies on
            Etsy. With low fees, powerful tools, and support and education, we
            help creative entrepreneurs start, manage, and scale their
            businesses. Want to open a shop? All it takes is Rs. 16* to start
            selling on Etsy.
            <br />
            <br />
            *Listing fees are billed for 0.20 USD, so if your bank's currency is
            not USD, the amount in your currency may vary based on changes in
            the exchange rate.
          </AccordionBody>
        </Accordion>
        <p className="text-xl font-semibold flex justify-center pt-6">
          Have a question? Well, we’ve got some answers.
        </p>
        <div className="mt-3">
          <button className="flex m-auto border-2 border-black p-3 rounded-3xl">
            Go to help center
          </button>
        </div>
      </div>

      <div className="bg-[#ccebff] pt-5 pb-6">
        <p className="flex flex-wrap items-center justify-center text-center text-base font-semibold pb-4">
          Yes! Send me exclusive offers, unique gift ideas, and personalised
          tips for shopping and selling on Etsy.
        </p>
        <div className="flex justify-center items-center">
        <input placeholder="Enter your email" className="h-11 w-96 rounded-l-3xl focus:outline-blue-gray-400" type="text" />
        <p className="bg-white h-11 flex items-center pl-3 pr-3 rounded-r-3xl shadow-lg hover:bg-black hover:text-white cursor-pointer">Subscribe</p>
        </div>
      </div>
      <div className="bg-[#3b67d9] h-20 flex justify-center items-center underline decoration-dashed decoration-white underline-offset-4">
            <p className="text-white">Etsy is powered by 100% renewable electricity.</p>
        </div>
    </>
  );
}
