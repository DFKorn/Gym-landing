import { Suspense } from "react";
import { getTariffs } from "./lib/api";
import Skeleton from "./components/Tariffs/Skeleton";
import OfferSection from "./components/Offer/OfferSection";
import { Header } from "./components/Header/Header";
import PricingPage from "./components/All/PricingPage";

export default async function Page() {
  const tariffs = await getTariffs();

  return (
    <>
      <Header />
      <PricingPage tariffs={tariffs} />
      {/* <OfferSection tariffs={tariffs} /> */}
    </>
  );
}
