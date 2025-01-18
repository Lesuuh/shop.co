import { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";

const Newsletters = () => {
  const [userEmail, setUserEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userEmail);
  };

  return (
    <section className="w-full px-4 md:px-10 lg:px-20 text-white rounded-lg  absolute md:top-10 md:left-0">
      <div className="bg-black p-4 md:px-10 sm:flex justify-between items-center rounded-lg space-y-2 ">
        <h2 className="text-3xl font-black">
          STAY UP TO DATE ABOUT OUR LATEST UPDATES
        </h2>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="email"
                name="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                placeholder="Enter your email..."
                className="text-xs py-2 w-full md:w-[300px] pl-10 font-light rounded-lg"
              />
              <HiOutlineMail
                className="absolute top-1/2 left-3 transform -translate-y-[50%] text-black font-light "
                size={20}
              />
            </div>
            <button
              type="submit"
              className="bg-[#e8e8e8] rounded-lg mt-3 w-full py-2 text-black font-normal text-xs"
            >
              Subscribe to Newsletter
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletters;
