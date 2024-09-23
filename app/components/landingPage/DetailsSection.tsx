import React from "react";

const features = [
  {
    title: "Job Description Upload",
    desc: "Simply upload or paste the job description, and our tool will extract key skills and requirements to tailor your resume effectively.",
  },
  {
    title: "Tailored Resume Generation",
    desc: "Generate a customized resume designed specifically for the job you’re applying for, all with just a single click.",
  },
  {
    title: "Professional Resume Templates",
    desc: "Choose from a selection of clean and modern templates that cater tovarious industries, allowing you to present your skills and experience effectively.",
  },
  {
    title: "Keyword Optimization",
    desc: " Our platform highlights important keywords from the job description, ensuring your resume is optimized to get past Applicant Tracking Systems (ATS).",
  },
  {
    title: "Download Options",
    desc: "Easily download your tailored resume in PDF or Docs format, ready to be sent with your job application.",
  },
  {
    title: "User-Friendly Interface",
    desc: "Enjoy a seamless user experience with a clean interface designed to help you create and customize your resume without any hassle.",
  },
];

const DetailsSection = () => {
  return (
    <section className=" bg-blue-500 px-10 lg:px-24 py-20 space-y-14">
      <div className="space-y-10 text-center">
        <h1 className="text-white">
          AI-Powered Resume Tailoring for <br /> Your Job Applications
        </h1>
        <p className="text-gray-200 text-left md:text-center text-sm">
          Resume Sculptor streamlines the process of crafting resumes that match
          job descriptions, helping you land your <br /> dream job faster and
          with less effort—all through an easy-to-use platform.
        </p>
      </div>
      <div className="grid gr0d-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
        {features.map((feature, index) => (
          <div key={index} className="space-y-2">
            <h3 className="text-white text-xl font-semibold">
              {feature.title}
            </h3>
            <p className="text-gray-100">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DetailsSection;
