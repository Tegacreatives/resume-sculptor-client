import React from "react";
import Button from "../common/Button";

const ContactPage = () => {
  return (
    <div className="flex flex-col flex-1 items-center min-h-screen space-y-12 lg:pt-16">
      <div className="p-2 bg-white text-black rounded-lg">Contact Us</div>
      <h1 className="text-4xl">Get in touch</h1>
      <p className="lg:max-w-[40vw] mx-auto text-center">
        Fill out the form below to set up a call, or keep reading to get in
        touch with us for customer support, partnerships, or media enquiries.
      </p>
      <form action="" className="space-y-4 w-[70vw] lg:w-[40vw]">
        <input
          type="text"
          placeholder="Enter your name"
          className="p-2 rounded-lg w-full pr-24"
        />

        <input
          type="email"
          placeholder="Enter your email"
          className="p-2 rounded-lg w-full pr-24"
        />

        <textarea
          placeholder="Your message..."
          className="p-2 rounded-lg w-full h-24 resize-none"
        />

        <div className="text-center">
          <Button text="Submit" address="/" />
        </div>
      </form>
    </div>
  );
};

export default ContactPage;
