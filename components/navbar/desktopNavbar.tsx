"use client";

import { navLinks } from "@/consepts";
import { Button, Flex, Typography } from "antd";
import useToken from "antd/es/theme/useToken";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const DesktopNavbar = () => {
  const {
    "1": { colorPrimary },
  } = useToken();
  const pathname = usePathname();

  const { Title, Text } = Typography;
  return (
    <nav className="w-full h-full flex justify-between px-5 max-md:hidden">
      <Flex className="w-fit" gap={15}>
        <Flex id="logo" align="center" gap={5}>
          <Image
            src={"/logo.svg"}
            alt="trading_quiz_logo"
            width={35}
            height={35}
          />
          <Title level={4} className="!m-0">
            TradingQuiz
          </Title>
        </Flex>
        <ul className="flex items-center justify-center gap-2">
          {navLinks.map(({ name, path, icon }) => (
            <li
              className={`hover:text-${colorPrimary} cursor-pointer`}
              key={path}
            >
              <Link href={path}>
                <Text
                  type="secondary"
                  className={clsx(
                    "h-3/4 hover:!text-primary transition-all capitalize hover:bg-primary/20 p-3 rounded-lg",
                    { "!text-primary bg-primary/20": path === pathname }
                  )}
                >
                  {name}
                </Text>
              </Link>
            </li>
          ))}
        </ul>{" "}
      </Flex>

      <Flex align="center" className="h-full" gap={3}>
        {" "}
        <Button type="link">
          <Link href={'/login'}>Login</Link>
        </Button>
        <Button type="primary" variant="filled">
          <Link href={'/register'}>Register</Link>
        </Button>
      </Flex>
    </nav>
  );
};

export default DesktopNavbar;
