import { PreRegisterForm } from "@/components";
import ResponsiveImage from "@/components/common/ResponsiveImage";

import { getCountryList, getGenderList } from "@/utils/server-api";

export const dynamic = "force-dynamic";

export default async function Home() {
  const contries = await getCountryList();
  const genders = await getGenderList();
  return (
    <div className="relative h-screen">
      {/* Mobile Background */}
      <ResponsiveImage />

      {/* Desktop Background */}
      {/* <img
        src="background.webp"
        className="object-cover h-screen w-screen hidden sm:block"
        alt="backgroundImg"
      /> */}
      <div className="absolute top-0">
        <div className="flex min-h-screen w-screen flex-col items-center justify-center">
          <div className="bg-white bg-transparent rounded-lg p-4 max-w-sm mt-10">
            <img className="mx-auto center max-w-28" src="../logo.png" />
            <p className="text-2xl text-black mt-4 text-center mb-3 uppercase font-bold">
              Sign up and Win prizes worth $5.000
            </p>
            <p className="text-sm text-black text-center mb-3">
            Celebrate the launch of our exclusive cashmere sweater brand! <span className="font-bold uppercase">BESPOKE CASHMERES</span> coming soon.
            You now have a chance to win $5,000 worth of premium cashmere sweaters over the next 2 months. <strong>Create</strong> your unique cashmere sweater for both man or women.
            </p>
            <PreRegisterForm countries={contries} genders={genders} />
          </div>
        </div>
      </div>
    </div>
  );
}
