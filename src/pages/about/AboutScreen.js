import React from "react";
import PageTitle from "../../components/Common/PageTitle";

function AboutScreen() {
  return (
    <div>
      <div className="p-4">
        <div className="bg-white rounded-xl p-3 font-title">
          <PageTitle title="About Me" />
          <div className="mt-4 mb-5 flex flex-row items-center">
            <img
              src="https://jatinvaishnav.netlify.app/assets/logo-ab84afa9.svg/"
              className="h-12 mr-3"
              alt="Git"
            />
            <div>
              <a
                href="https://github.com/JatinVaish"
                target={"_blank"}
                className="underline cursor-pointer"
                rel="noreferrer"
              >
                Hi, I'm Jatin Vaishnav
              </a>
              <h1> Free Invoicer for your business.</h1>
            </div>
          </div>

          <PageTitle title="Invoicer" />
          <div className="mt-2 pl-4 text-sm">
            <ul class="list-disc">
              <li> Can Easily Pre-Manage Your Products</li>
              <li> Can Easily Pre-Manage Your Clients</li>
              <li> Can Export PDF </li>
              <li> Can Export Image </li>
            </ul>
          </div>
          <div className="font-title mt-3 mb-5">
            <div>
              🤝 only access 1 with 1 id (you can use single company in one chrome id)
            </div>
            <div>
              📫 How to reach me{" "}
              <a
                href="mailto:1195jatinvaishnav@gmail.com"
                className="underline cursor-pointer"
              >
                1195jatinvaishnav@gmail.com
              </a>{" "}
              (or){" "}
              <a
                href="https://www.instagram.com/jatin_vaishnav__2003"
                target={"_blank"}
                className="underline cursor-pointer"
                rel="noreferrer"
              >
                Instagram
              </a>
            </div>
            <div>
              <span>🎁 </span>
              <a
                href="https://github.com/JatinVaish"
                className="underline cursor-pointer"
                target={"_blank"}
                rel="noreferrer"
              >
                {" "}
                Repo Link Here
              </a>
            </div>
          </div>

          <PageTitle title="Build By" />
          <div className="mt-2 mb-5 pl-4 text-sm">
            <ul class="list-disc">
              <li> Framer Motion For each component Animation</li>
              <li> Lottiefiles For Dashboard Widgets Icons</li>
              <li> IndexedDB for Local Storage(localforage) </li>
              <li> ReactJS </li>
            </ul>
          </div>

          <PageTitle title="Contact" />
          <div className="mt-2 pl-1 text-sm">
            <a
              href="tel:+919664977979"
              className="underline cursor-pointer"
              target={"_blank"}
              rel="noreferrer"
            >
              {" "}
              +919664977979
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutScreen;
