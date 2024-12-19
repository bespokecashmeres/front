import { PreRegisterForm } from "@/components";
import ResponsiveImage from "@/components/common/ResponsiveImage";
import { getCountryList, getGenderList } from "@/utils/server-api";

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
          {/* Website Name */}
          <header className="mb-6">
            <h1 className="text-3xl font-bold text-gray-400 drop-shadow-[0_0_2px_black]">
              Bespoke Cashmeres
            </h1>
          </header>

          <div className="bg-transparent shadow-2xl rounded-lg p-8 max-w-md w-full">
            <h1 className="text-2xl font-bold text-center mb-6 text-gray-400 drop-shadow-[0_0_2px_black]">
              Website Coming Soon!
            </h1>
            <p className="text-gray-300 text-center mb-6 drop-shadow-[0_0_2px_black]">
              Be the first to know when we launch. Sign up now!
            </p>

            <PreRegisterForm countries={contries} genders={genders} />
          </div>
        </div>
      </div>
    </div>
  );
}
