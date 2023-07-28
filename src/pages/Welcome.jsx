import Logo from "../assets/Logo.png";
import Template from "../assets/Template.png";

const Welcome = () => {
  const containerStyles = {
    backgroundImage: `url(${Template})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const logoContainerStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "2rem", // Adjust the margin as per your requirement
  };

  return (
    <div style={containerStyles}>
      <div style={logoContainerStyles}>
        <img
          src={Logo}
          alt=""
          className="object-cover w-96 md:min-w-fit lg:w-[658px]"
        />
      </div>
      <div className="text-center">
        <span className="text-6xl font-bold leading-tight">Welcome Back!</span>
        <p className="text-gray-400 my-6 text-xl w-96 leading-relaxed">
          To stay connected with us, please{" "}
          <span className="text-teal-400 font-bold">Login</span> with your
          personal information.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
