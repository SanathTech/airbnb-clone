import React from "react";

function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-10 px-16 md:px-32 py-14 bg-gray-100 text-gray-600">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Fakebnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Fakebnb Plus</p>
        <p>Fakebnb Luxe</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Accessibility</p>
        <p>This is not a real site</p>
        <p>It&apos;s a pretty awesome clone</p>
        <p>Built using Next JS</p>
        <p>And Tailwind CSS</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">HOST</h5>
        <p>Sanath Punchibandage</p>
        <p>Presents Fakebnb</p>
        <p>The Unofficial</p>
        <p>Airbnb Clone</p>
        <p>Enjoy!</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Help Centre</p>
        <p>Trust & Safety</p>
        <p>Contact Us</p>
        <p>FAQS</p>
        <p>Privacy Policy</p>
      </div>
    </div>
  );
}

export default Footer;
