import "../styles/Footer.css";
function Footer() {
  return (
    <>
      <div className="blueRec"></div>
      <div
        className="bg-white text-center justify-center w-full absolute flex items-center bottom-0 h-16 footer"
      >
        <p>
          Got questions? Take a look at our <span className="text-blue-500">FAQs</span> , talk to us on
          Twitter <span className="text-blue-500">@icloudready</span> or send an email to{" "}
          <span className="text-blue-500">team@icloud-ready.com</span>
        </p>
      </div>
    </>
  );
}

export default Footer;
