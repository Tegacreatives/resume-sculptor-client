import Button from "./components/Button";

import { SiReaddotcv } from "react-icons/si";

export default function Home() {
  return (
    <div>
      <section className="text-center space-y-10 pt-14 min-h-[100vh] lg:min-h-[80vh]">
        <div className="flex items-center justify-center space-x-2">
          <p className="text-gray-400 text-sm">Tailored Resume</p>
          <SiReaddotcv color="#9ca3af" />
        </div>
        <h1 className="text-4xl font-semibold text-gray-800 capitalize">
          Easily Create tailored resumes for each <br /> job application based
          on the job description
        </h1>
        <p className="text-gray-600 text-base">
          Our innovative platform offers a robust solution to help you stay
          organized, focused and on <br />
          track to achieve your strategic objectives
        </p>
        <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-5 space-y-5 lg:space-y-0 items-center justify-center">
          <Button
            text="Join the waitlist"
            address="https://app.resumesculptor.com/signup"
          />
          <Button text="Coming Soon" address="" light />
        </div>
      </section>
    </div>
  );
}
