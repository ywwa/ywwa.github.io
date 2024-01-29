import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import ghImg from "./assets/img/ywwa.png";
import { CLink } from "./components/CLink";
function App() {
  const e = Math.floor(
    ((new Date()).getTime() - new Date("2003-07-15").getTime()) /
      (1000 * 3600 * 24 * 365.25),
  );

  return (
    <div className="h-screen-safe bg-zinc-900 text-neutral-300 flex items-center justify-center font-poppins">
      <div className="flex flex-col gap-3 font-lexend">
        <img
          src={ghImg}
          className="rounded-full w-56 -scale-x-[100%]"
          alt="ywwa"
        />
        <div className="text-center font-lexend">
          <p className="text-2xl font-medium">
            Gabriels Kukutis
            <sup className="text-neutral-500">
              (
              <span className="text-purple-200">{e}</span>
              )
            </sup>
          </p>
          <p>
            aka <span className="text-purple-400 font-medium">ywwa</span>
          </p>
        </div>
        <div className="p-2 gap-4 flex items-center justify-center">
          <CLink to={"https://github.com/ywwa"}>
            <FaGithub size={26} />
          </CLink>
          <CLink to={"https://linkedin.com/in/gabriels-kukutis"}>
            <FaLinkedin size={26} />
          </CLink>
          <CLink to={"https://t.me/y0wwa"}>
            <FaTelegram size={26} />
          </CLink>
          <CLink to={"https://t.me/y0wwa"}>
            <MdEmail size={26} />
          </CLink>
        </div>
      </div>
    </div>
  );
}

export default App;
