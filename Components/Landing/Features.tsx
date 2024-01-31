import React from "react";

const Features = () => {
  return (
    <div className="bg-yellow-400 mt-auto py-16 relative ">
      <h1 className="lg:text-yellow-400 text-white max-w-[85rem] px-8  mx-auto py-8 relative text-6xl z-20 font-extralight font-['Oswald']">
        FEATURES
      </h1>
      <div className=" bg-white flex justify-around flex-wrap z-20 relative items-center p-4 shadow-lg max-w-[75rem] w-full mx-auto">
        <div className="flex flex-col gap-4 w-full max-w-lg">
          <div className="flex gap-4 p-2">
            <div className="w-[0] h-[182px] border-4 border-yellow-400"></div>
            <div>
              <h1 className="text-neutral-600 text-lg sm:text-[32px]  font-bold font-['Oswald']">
                PERSONALISED <br />
                RECOMMENDATIONS
              </h1>
              <p className="max-w-[450px] w-full text-neutral-600 text-base font-light font-['Open Sans']">
                DEATOX uses AI to analyze user data such as age, gender, weight,
                height, dietary preferences, and fitness goals to generate
                personalized meal and fitness plans.
              </p>
            </div>
          </div>
          <div className="flex gap-4 p-2">
            <div className="w-[0] h-[182px] border-4 border-yellow-400"></div>
            <div>
              <h1 className="text-neutral-600 text-lg sm:text-[32px] font-bold font-['Oswald']">
                MEAL PLANNING
              </h1>
              <p className="max-w-[450px] w-full text-neutral-600 text-base font-light font-['Open Sans']">
                DEATOX generates weekly meal plans based on your dietary
                preferences, calorie requirements, and nutrient needs.
              </p>
            </div>
          </div>
          <div className="flex gap-4 p-2">
            <div className="w-[0] h-[182px] border-4 border-yellow-400"></div>
            <div>
              <h1 className="text-neutral-600 text-lg sm:text-[32px] font-bold font-['Oswald']">
                FITNESS PLANNING
              </h1>
              <p className="max-w-[450px] w-full text-neutral-600 text-base font-light font-['Open Sans']">
                DEATOX generates weekly fitness plans based on your fitness
                goals, workout preferences, and fitness level.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full max-w-lg">
          <div className="flex gap-4 p-2">
            <div className="w-[0] h-[182px] border-4 border-yellow-400"></div>
            <div>
              <h1 className="text-neutral-600 text-lg sm:text-[32px] font-bold font-['Oswald']">
                PROGRESS TRACKING
              </h1>
              <p className="max-w-[450px] w-full text-neutral-600 text-base font-light font-['Open Sans']">
                DEATOX allows you to track their progress towards their fitness
                goals by tracking metrics such as weight, body fat percentage,
                and workout intensity.
              </p>
            </div>
          </div>
          <div className="flex gap-4 p-2">
            <div className="w-[0] h-[182px] border-4 border-yellow-400"></div>
            <div>
              <h1 className="text-neutral-600 text-lg sm:text-[32px] font-bold font-['Oswald']">
                ML BASED RECOMMENDATIONS
              </h1>
              <p className="max-w-[450px] w-full text-neutral-600 text-base font-light font-['Open Sans']">
                DEATOX uses machine learning algorithms to learn from your data
                and improve the accuracy and relevance of its meal and fitness
                recommendations over time.
              </p>
            </div>
          </div>
          <div className="flex gap-3 flex-col justify-start">
            <div className="text-yellow-400 text-lg sm:text-[32px] font-bold font-['Oswald']">
              Get your fitness plan for free!
            </div>
            <div className="max-w-[473px] w-full text-neutral-600 text-xl font-normal font-['Open Sans']">
              Join the Deatox community today and start your journey towards a
              healthier and happier you.{" "}
            </div>
            <button className="w-max px-[15px] py-2.5 bg-yellow-400 justify-start items-start gap-2.5 inline-flex">
              <span className="text-neutral-600 text-base font-normal font-['Open Sans']">
                TRY NOW
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
