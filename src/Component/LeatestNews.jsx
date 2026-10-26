import Marquee from "react-fast-marquee";
import MarqueeModule from "react-fast-marquee";

const LatestNews = () => {
  const Marquee = MarqueeModule.default;
  return (
    <div className="flex items-center gap-3 text-center justify-center bg-base-300 p-[5px] ">
      <p className="rounded bg-red-600 p-1 text-white">Latest</p>
      <Marquee pauseOnHover={true}>
        <p className="mr-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          ratione voluptatem enim itaque ipsum quam fugit? Recusandae, ratione
          voluptatem enim------
        </p>
        <p className="mr-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          ratione voluptatem enim itaque ipsum quam fugit? Recusandae, ratione
          voluptatem enim------
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
