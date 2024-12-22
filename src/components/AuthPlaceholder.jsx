import React from "react";

export default function AuthPlaceholder() {
  const metrics = [
    {
      heading: "30+",
      subheading: "Langauges Support",
    },
    {
      heading: "10K+",
      subheading: "Developers",
    },
    {
      heading: "100K+",
      subheading: "Hours Saved",
    },
  ];
  return (
    <div className="bg-white h-screen w-[50vw] md:flex items-center justify-center relative hidden">
      <img src="/authPlaceholder.svg" className="absolute bottom-0 left-0 min-w-[140px]" />
      <div className="relative min-w-[50%] px-5">
        <section className="shadow py-2 rounded-[24px]">
          <div className="flex gap-3 items-center p-5">
            <img src="/codeantLogo.svg" />
            <h1 className="text-lg font-bold">
              AI to Detect & Autofix the bad code
            </h1>
          </div>
          <hr />
          <div className="flex p-6 justify-between">
            {metrics.map((metric, index) => (
              <div className="flex flex-col items-center" key={index}>
                <h2 className="font-bold">{metric.heading}</h2>
                <p className="text-sm">{metric.subheading}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="shadow p-5 min-w-[55%] absolute right-0 bottom-[-80%] rounded-[24px] self-end bg-white flex justify-between">
          <div>
            <img
              src="/issueFixedIcon.svg"
              className="p-3 rounded-full bg-[#9D90FA40] mb-3"
            />
            <h3 className="text-[12px] font-semibold">
              Issues Fixed <br />{" "}
              <span className="text-3xl font-extrabold mt-3 tracking-wider">
                500K+
              </span>
            </h3>
          </div>
          <div>
            <span className="flex text-[#0049C6] gap-0 text-left">
              <img src="/upArrow.svg" />
              <h4 className="font-semibold">14%</h4>
            </span>
            <p className="text-[12px]">This week</p>
          </div>
        </section>
      </div>
    </div>
  );
}
