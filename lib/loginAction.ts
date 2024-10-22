"use server";

import { LoginActionResult } from "@/types/index";
import { cookies } from "next/headers";

const LoginAction = async (value: {
  email: string;
  password: string;
}): Promise<LoginActionResult> => {
  try {
    const response = await fetch(`${process.env.API}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: value.email, password: value.password }),
    });

    console.log(response);

    if (!response.ok) {
      const { message } = await response.json();
      return { isError: true, message };
    }

    const { url } = await response.json();

    return { isError: false, message: url };
  } catch (err) {
    return { isError: true, message: "Faild To Fetch" };
  }
};

export default LoginAction;
