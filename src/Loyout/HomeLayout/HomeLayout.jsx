import { Outlet } from "react-router";
import Navbar from "../../Component/Navbar";
import LeftLayout from "../../Component/HomeLayout/LeftLayout";
import RightLayout from "../../Component/HomeLayout/RightLayout";
import LatestNews from "../../Component/LeatestNews";
import Header from "../../Component/Header";

const HomeLayout = () => {
  return (
    <div className="w-[1440px] mx-auto ">
      <Header></Header>
      <section className="my-3 ">
        <LatestNews></LatestNews>
      </section>
      {/* nav section */}
      <section className="sticky top-0 z-50 h-fit">
        <Navbar></Navbar>
      </section>
      {/* this is main section */}
      <main className="w-11/12 mx-auto my-3 *:border grid grid-cols-12 gap-4">
        <aside className="col-span-3 sticky h-fit top-20">
          <LeftLayout></LeftLayout>
        </aside>
        {/* children section */}
        <section className="col-span-6 ">
          <Outlet></Outlet>
        </section>
        {/* right section */}
        <aside className="col-span-3 sticky h-fit top-20 max-h-[calc(100vh-5rem)] overflow-y-auto ">
          <RightLayout></RightLayout>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
