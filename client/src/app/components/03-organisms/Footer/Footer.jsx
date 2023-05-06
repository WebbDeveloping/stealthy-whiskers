import FooterBottom from "../../01-atoms/FooterBottom/FooterBottom";
import FooterLink from "../../01-atoms/FooterLink/FooterLink";

function Footer() {
  return (
    <footer className="bg-[#080808] py-16 text-white">
      <div className="w-full mx-auto px-4">
        <div className="flex flex-col gap-y-16">
          <div className="flex flex-col md:flex-row justify-start md:justify-between gap-y-8">
            <div className="flex flex-col">
              <h3 className="text-md uppercase mb-5 font-medium">Navigation</h3>
              <ul className="flex flex-col">
                <FooterLink slug="/" text="Home" current={true} />
                <FooterLink slug="/about" text="About" />
                <FooterLink slug="/contact" text="Contact" />
                <FooterLink slug="/" text="FAQ" />
              </ul>
            </div>
            <div className="flex flex-col">
              <h3 className="text-md uppercase mb-5 font-medium">Products</h3>
              <ul className="flex flex-col">
                <FooterLink
                  slug="/products"
                  text="Tactical Gear"
                  current={true}
                />
                <FooterLink slug="/products" text="Camouflage Gear" />
                <FooterLink slug="/products" text="Shop All" />
              </ul>
            </div>
          </div>
          <FooterBottom />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
