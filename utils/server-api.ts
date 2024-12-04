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

export const getGenderList = async () => {
  const res: any = await axios.get(`${CONFIG.apiUrl}/gender/active`, {
    headers: { "Accept-Language": "en" },
  });

  const filteredGenderList = res?.data?.data?.map(
    (gender: { _id: string; name: string }) => ({
      value: gender._id,
      label: gender.name,
    })
  ) ?? [];

  return filteredGenderList;
};
