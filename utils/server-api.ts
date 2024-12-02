import CONFIG from "@/config";
import axios from "axios";

export const getCountryList = async () => {
  const res = await axios.get(`${CONFIG.apiUrl}/country/list`, {
    headers: { "Accept-Language": "en" },
  });

  const filteredRes = res?.data?.data?.map((country: any) => ({
    value: country?._id,
    label: `${country?.phoneCode}`,
    image: `${country?.flag}`,
  }));

  return filteredRes;
};

const BIND_LANGUAGE_FULL_NAME: Record<string, string> = {
  men: "Men",
  women: "Women",
} as const;

export const getGenderList = async () => {
  const res: any = await axios.get(`${CONFIG.apiUrl}/gender/list`, {
    headers: { "Accept-Language": "en" },
  });

  const filteredGenderList = res?.data?.data?.map(
    (gender: { _id: string; name: string }) => ({
      value: gender._id,
      label: `${BIND_LANGUAGE_FULL_NAME[gender.name]}`,
    })
  );

  return filteredGenderList;
};
