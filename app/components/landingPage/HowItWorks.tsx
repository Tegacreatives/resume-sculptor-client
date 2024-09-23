import React, { ReactNode } from "react";
import { GoUpload } from "react-icons/go";
import { TfiWrite } from "react-icons/tfi";
import { MdDownloading } from "react-icons/md";

const HowItWorks = () => {
  return (
    <section className="py-24 space-y-14 px-10 lg:px-24">
      <div className="text-center lg:max-w-[40vw] m-auto space-y-8">
        <h1>How It Works</h1>
        <p>
          See How Resume Sculptor Streamlines Your Job Application Process in
          Just a Few Simple Steps
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-14">
        {/* Step 1  */}
        <StepsCard
          title="Upload Your Resume"
          description="Start by uploading your existing resume in just a few clicks or enter in your skills and expereince to create one."
          icon={<GoUpload size={20} />}
        />
        <StepsCard
          title="Input Job Description"
          description="Provide the job description for the role you're applying to, so our AI can analyze the requirements."
          icon={<TfiWrite size={20} />}
        />
        <StepsCard
          title="Download Tailored Resume"
          description="In seconds, receive a customized resume perfectly aligned with the job you're targeting."
          icon={<MdDownloading size={20} />}
        />
      </div>
    </section>
  );
};

export default HowItWorks;

const StepsCard = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: ReactNode;
}) => {
  return (
    <div className="flex items-start space-x-4">
      <div className="p-4 bg-blue-100 rounded-tl-3xl rounded-tr-3xl rounded-br-3xl">
        {icon}
      </div>
      <div className="space-y-2">
        <div className="font-bold text-lg">{title}</div>
        <p>{description}</p>
      </div>
    </div>
  );
};
