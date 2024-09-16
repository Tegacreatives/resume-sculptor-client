import Button from "./components/Button";

export default function Home() {
  return (
    <div>
      <section className="text-center space-y-10 pt-14">
        <p className="text-gray-400 text-sm">Tailored Resume</p>
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
          <Button
            text="Coming Soon"
            address="https://app.resumesculptor.com"
            light
          />
        </div>
      </section>
    </div>
  );
}
