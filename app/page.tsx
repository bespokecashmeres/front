import { PreRegisterForm } from "@/components";
import { getCountryList, getGenderList } from "@/utils/server-api";

export default async function Home() {
  const contries = await getCountryList();
  const genders = await getGenderList();
  return (
    <div className="relative h-screen">
      <img
        src="background-3.webp"
        className="object-cover h-screen w-screen"
        alt="backgroundImg"
      />
      <div className="absolute top-0">
        <div className="flex min-h-screen w-screen flex-col items-center justify-center">
          {/* Website Name */}
          <header className="mb-6">
            <h1 className="text-3xl font-bold text-gray-800">
              Bespoke Cashmeres
            </h1>
          </header>

          <div className="bg-transparent shadow-2xl rounded-lg p-8 max-w-md w-full">
            <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
              Website Coming Soon!
            </h1>
            <p className="text-gray-600 text-center mb-6">
              Be the first to know when we launch. Sign up now!
            </p>

            <PreRegisterForm countries={contries} genders={genders} />
          </div>
        </div>
      </div>
    </div>
  );
}
