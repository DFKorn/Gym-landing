import { Suspense } from "react";
import { getTariffs } from "./lib/api";
import Skeleton from "./components/Tariffs/Skeleton";
import { Header } from "./components/Header/Header";
import PricingPage from "./components/Prices/PricingPage";
import { Main } from "next/document";
import MainInfo from "./components/MainInfo/MainInfo";

export default function Page() {
  return (
    <>
      <MainInfo />
      {/* <PricingPage tariffs={tariffs} /> */}
    </>
  );
}
