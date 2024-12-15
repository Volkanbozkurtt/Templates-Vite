import { resourcesLinks, platformLinks, communityLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <h3 className=" bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text text-md font-semibold mb-4">
            Yüksek Firmalar
          </h3>
          <ul className="space-y-2">
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <a
                  className="text-neutral-300 hover:text-white"
                  href={link.href}
                >
                  {" "}
                  {link.text}{" "}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className=" bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text text-md font-semibold mb-4">
            Sosyal Hesaplarım
          </h3>
          <ul className="space-y-2">
            {platformLinks.map((link, index) => (
              <li key={index}>
                <a
                  className="text-neutral-300 hover:text-white"
                  href={link.href}
                >
                  {" "}
                  {link.text}{" "}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className=" bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text text-md font-semibold mb-4">
            Projeler
          </h3>
          <ul className="space-y-2">
            {communityLinks.map((link, index) => (
              <li key={index}>
                <a
                  className="text-neutral-300 hover:text-white"
                  href={link.href}
                >
                  {" "}
                  {link.text}{" "}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex mt-20 justify-center items-center text-center border-t border-neutral-700">
        <p className=" flex text-neutral-700 font-bold text-center pt-5">
          Volkan BOZKURT
        </p>
      </div>
    </footer>
  );
};

export default Footer;
