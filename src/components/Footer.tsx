import NavbarDesktop from "./Navbar_desktop";

export default function Footer() {
  return (
    <section className="w-full pl-7 py-5 bg-[#f8f8f8] relative h-fit bottom-0 tab:pb-28">
      <div className="flex w-full justify-between">
        <h1 className="logo text-center">
          Scoops N<br />
          <span>Smiles</span>
        </h1>
        <div className="w-fit hidden mr:flex">
          <NavbarDesktop />
        </div>
        <div className="flex my-auto mr-5 mt-2">
          <img
            alt=""
            src="./assets/fb.png"
            className="w-10 cursor-pointer h-10 mr-5"
          />
          <img
            alt=""
            src="./assets/instagram.png"
            className="w-10 cursor-pointer h-10 mr-5"
          />
          <img
            alt=""
            src="./assets/twitter.png"
            className="w-10 h-10 cursor-pointer"
          />
        </div>
      </div>

      <div className="block mt-5">
        <div className="flex">
          <h3 className="text-[#6F6F6F] font-medium text-sm mr-5">
            Terms of service
          </h3>
          <h3 className="text-[#6F6F6F] font-medium text-sm">Privacy Policy</h3>
        </div>
        <h3 className="text-[#6f6f6f] font-semibold text-sm mt-5">
          All Rights Reserved © 2022 Scoops N Smiles
        </h3>
      </div>
    </section>
  );
}
