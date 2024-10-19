"use client";

import React, { useState } from "react";
import {
  Alert,
  Divider,
  Form,
  Input,
  Spin,
} from "antd";
import FormItem from "antd/es/form/FormItem";
import Password from "antd/es/input/Password";
import {Content} from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
import LoginAction from "@/lib/loginAction";
import { redirect } from "next/navigation";
import useToken from "antd/es/theme/useToken";

const LoginForm = () => {
  const {
    "1": { borderRadiusLG },
  } = useToken();

  const [errorMessage, setErrorMessage] = useState<string | null>();
  const [loading, setLoading] = useState<boolean>(false);
//   const { push } = useRouter();

  const onFinish = async (value: { email: string; password: string }) => {
    setLoading(true);
    const result = await LoginAction(value);
    setLoading(false);

    //handling result
    if (result.isError) {
      setErrorMessage(result.message);
    } else {
      redirect("/");
    }
  };

  return (
    <Content className="w-full h-full flex items-center justify-center flex-col gap-8">
      <header className="flex items-center justify-center flex-col text-center">
        <Title level={2}>Welcome back, ready to conquer the markets?</Title>
        <Text type="secondary">
        Ready to dive deeper into the world of financial markets? Continue where you left off and keep sharpening your skills with our engaging quizzes. 
        </Text>
      </header>
      <Divider dashed className="max-md:!hidden">
        Form
      </Divider>
      <Form
        name="trigger"
        style={{ width: "100%" }}
        className="flex items-center justify-center flex-col"
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
      >
        <FormItem
          hasFeedback
          label="Email"
          name="email"
          validateTrigger="onBlur"
          className="w-full md:w-3/5"
          rules={[{ min: 3, type: "email", required: true }]}
        >
          <Input
            placeholder="Email..."
            type="email"
            size="large"
            variant="filled"
          />
        </FormItem>

        <FormItem
          hasFeedback
          label="Pssword"
          name="password"
          className="w-full md:w-3/5"
          validateTrigger="onBlur"
          rules={[{ min: 7, required: true }]}
        >
          <Password
            placeholder="Password..."
            type="password"
            size="large"
            variant="filled"
          />
        </FormItem>
        <FormItem className="w-full md:w-3/5 mt-4">
          <Spin spinning={loading}>
            <button
              type="submit"
              className="w-full py-2 text-xl font-bold bg-orange-400 shadow-orange-400 p-2 shadow-md text-white rounded-md px-2  hover:shadow-lg hover:shadow-orange-400 transition-all"
            >
              {!loading ? "Submit" : "Submitting"}
            </button>
          </Spin>
        </FormItem>
      </Form>
      {errorMessage && (
        <Alert
          type="error"
          message={errorMessage}
          banner
          closable
          className="w-full md:w-3/5 text-red-500"
          style={{ borderRadius: borderRadiusLG }}
        />
      )}
    </Content>
  );
};

export default LoginForm;
