import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide ">
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          <strong> Web && Mobil </strong> <br />
        </span>
        Yazılım Geliştirme
      </h1>
      <p className="text-center mt-10 text-lg text-neutral-400 max-w-4xl">
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          {" "}
          Web sitenizi{" "}
        </span>{" "}
        yenileyebilir,{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          {" "}
          SEO Optimizasyonu{" "}
        </span>{" "}
        yapabilir,{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          {" "}
          Mobil Uygulamanızı
        </span>{" "}
        yazabilir ya da{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          {" "}
          Reklamlarınızı
        </span>{" "}
        Tüm Dünya'ya Ulaştırabilirim!
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          Referanslarım
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border">
          {" "}
          Yapabildiklerim{" "}
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2"
        >
          <source src={video1} type="video/mp4" />
          UI-UX Tasarım
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2"
        >
          <source src={video2} type="video/mp4" />
          UI-UX Tasarım
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
