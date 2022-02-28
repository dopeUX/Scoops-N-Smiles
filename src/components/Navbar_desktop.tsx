export default function NavbarDesktop() {
  return (
    <nav className="hidden w-fit h-fit my-auto ml-5 md:flex">
      <ul className="flex w-fit h-fit">
        <a href="/">
          <li className="mr-10 text-sm font-semibold cursor-pointer">Home</li>
        </a>
        <a href="/menu">
          <li className="mr-10 text-sm font-semibold cursor-pointer">Menu</li>
        </a>
        <a href="/">
          <li className="mr-10 text-sm font-semibold cursor-pointer">Stores</li>
        </a>
        <a href="/">
          <li className="mr-10 text-sm font-semibold cursor-pointer">About</li>
        </a>
      </ul>
    </nav>
  );
}
