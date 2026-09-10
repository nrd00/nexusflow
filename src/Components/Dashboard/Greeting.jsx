import { GoDotFill } from "react-icons/go";

const Greeting = () => {
  const profileName = "John";
  return (
    <div>
      <div className="greetings flex justify-between items-center">
        <div className="greet">
          <h2 className="text-xl">Dashboard</h2>
          <p className="font-sm text-[#90919C]">Welcome back, {profileName}</p>
        </div>
        <div className="market-status">
          <p className="flex items-center text-sm font-bold">
            Market status:{" "}
            <span className="text-[#15A15F] flex gap-x-2 items-center font-normal">
              <GoDotFill /> Market Open
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Greeting;
