"use server";
import fetchData from "@/lib/fetchData";
export async function loginActions(data) {
  console.log(data);

  const res = await fetchData({
    url: "/user/login",
    method: "post",
    data,
  });
  console.log(res);
}
