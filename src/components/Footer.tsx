import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  YouTubeIcon,
} from "../assets/icons";

const Footer = () => {
  return (
    <footer
      className="bg-[#0B2341] px-8 pt-12 text-white"
      style={{
        backgroundImage: `url('https://smbf.global/wp-content/uploads/2023/07/footer-1.png'), url('https://smbf.global/wp-content/uploads/2023/07/footer-1.png')`,
        backgroundPosition: "bottom 10% right 30%, bottom 10% left 10%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="mx-auto grid max-w-[1250px] grid-cols-1 pb-[85px] md:grid-cols-2 lg:grid-cols-5">
        {/* Logo and Description */}
        <div className="col-span-2 max-w-[422px] p-[10px]">
          <div className="mb-4 flex items-center space-x-2">
            <img
              width="800"
              height="267"
              src="https://smbf.global/wp-content/uploads/2023/07/SMBF-Logo-white-1024x342.png"
              className="max-w-[150px]"
              alt=""
              decoding="async"
              srcSet="https://smbf.global/wp-content/uploads/2023/07/SMBF-Logo-white-1024x342.png 1024w, https://smbf.global/wp-content/uploads/2023/07/SMBF-Logo-white-300x100.png 300w, https://smbf.global/wp-content/uploads/2023/07/SMBF-Logo-white-768x257.png 768w, https://smbf.global/wp-content/uploads/2023/07/SMBF-Logo-white-600x201.png 600w, https://smbf.global/wp-content/uploads/2023/07/SMBF-Logo-white.png 1071w"
            />
          </div>
          <p className="font-inter text-[16px] text-[#99A2B1] transition duration-300">
            Supporting Muslim businesses, through ethical and meaningful
            collaboration, to positively impact the world.
          </p>
          <div className="mt-6 flex space-x-4">
            <a
              href="https://www.linkedin.com/company/smbf-global/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition hover:text-[#2366CD]"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="h-[18px] w-[18px]" />
            </a>
            <a
              href="https://www.instagram.com/smbf____/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition hover:text-[#2366CD]"
              aria-label="Instagram"
            >
              <InstagramIcon className="h-[18px] w-[18px]" />
            </a>
            <a
              href="https://www.facebook.com/SupportMuslimBusinessForum/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition hover:text-[#2366CD]"
              aria-label="Facebook"
            >
              <FacebookIcon className="h-[18px] w-[18px]" />
            </a>
            <a
              href="https://youtube.com/@supportmuslimbusinessforum"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition hover:text-[#2366CD]"
              aria-label="YouTube"
            >
              <YouTubeIcon className="h-[18px] w-[18px]" />
            </a>
          </div>
        </div>

        {/* Menu */}
        <div className="p-[10px]">
          <h3 className="mb-4 font-[Redtone] text-[20px] font-normal uppercase tracking-[0.1em] text-white">
            MENU
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li>
              <a
                href="#"
                className="font-inter text-[16px] text-[#99A2B1] transition duration-300 hover:text-white"
              >
                Member Login
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-inter text-[16px] text-[#99A2B1] transition duration-300 hover:text-white"
              >
                Our Vision
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-inter text-[16px] text-[#99A2B1] transition duration-300 hover:text-white"
              >
                Member Benefits
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-inter text-[16px] text-[#99A2B1] transition duration-300 hover:text-white"
              >
                Events
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-inter text-[16px] text-[#99A2B1] transition duration-300 hover:text-white"
              >
                Business Delegations
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-inter text-[16px] text-[#99A2B1] transition duration-300 hover:text-white"
              >
                Support Us
              </a>
            </li>
          </ul>
        </div>

        {/* Links */}
        <div className="p-[10px]">
          <h3 className="mb-4 font-[Redtone] text-[20px] font-normal uppercase tracking-[0.1em] text-white">
            LINKS
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li>
              <a
                href="#"
                className="font-inter text-[16px] text-[#99A2B1] transition duration-300 hover:text-white"
              >
                Privacy policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-inter text-[16px] text-[#99A2B1] transition duration-300 hover:text-white"
              >
                Terms & Conditions
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-inter text-[16px] text-[#99A2B1] transition duration-300 hover:text-white"
              >
                Event Registration Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="p-[10px]">
          <h3 className="mb-4 font-[Redtone] text-[20px] font-normal uppercase tracking-[0.1em] text-white">
            GET IN TOUCH
          </h3>
          <p className="mb-2 font-inter text-[16px] text-[#99A2B1] transition duration-300 hover:text-white">
            0121 820 8259
          </p>
          <p className="mb-6 font-inter text-[16px] text-[#99A2B1] transition duration-300 hover:text-white">
            enquiries@smbf.global
          </p>
          <button className="rounded-full bg-gradient-to-r from-[#52B6C5] to-[#2D63D4] px-6 py-2 font-semibold text-white shadow-lg">
            CONTACT US
          </button>
        </div>
      </div>
      <div className="mt-12 pb-[20px] text-end font-inter text-[14px] font-normal tracking-[0.05em] text-white">
        Copyright SMBF © 2025. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
