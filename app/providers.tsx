"use client";

import type { ThemeProviderProps } from "next-themes";
import * as React from "react";
import { HeroUIProvider } from "@heroui/system";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ToastProvider } from "@heroui/toast";
import { CartProvider } from "@/components/cart/CartProvider";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NonNullable<
      Parameters<ReturnType<typeof useRouter>["push"]>[1]
    >;
  }
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  return (
    <HeroUIProvider navigate={router.push}>
      {/*<ToastProvider>*/}
      <NextThemesProvider {...themeProps}>
        <CartProvider>{children}</CartProvider>
      </NextThemesProvider>
      {/*</ToastProvider>*/}
    </HeroUIProvider>
  );
}

{
  /*<ToastProvider*/
}
{
  /*  placement="top-right"*/
}
{
  /*  disableAnimation={false}*/
}
{
  /*  maxVisibleToasts={5}*/
}
{
  /*  toastOffset={10}*/
}
{
  /*  toastProps={{}}*/
}
{
  /*  regionProps={{}}*/
}
{
  /*>*/
}
