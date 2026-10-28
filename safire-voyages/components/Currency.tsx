"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { site } from "@/content/site";

type Currency = "PKR" | "USD";

const CurrencyContext = createContext<{ currency: Currency; setCurrency: (c: Currency) => void }>({
  currency: "PKR",
  setCurrency: () => {},
});

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState<Currency>("PKR");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("safire-currency");
      if (saved === "USD" || saved === "PKR") setCurrencyState(saved);
    } catch {}
  }, []);

  const setCurrency = (c: Currency) => {
    setCurrencyState(c);
    try {
      localStorage.setItem("safire-currency", c);
    } catch {}
  };

  return <CurrencyContext.Provider value={{ currency, setCurrency }}>{children}</CurrencyContext.Provider>;
}

export function Price({ pkr }: { pkr: number }) {
  const { currency } = useContext(CurrencyContext);
  if (currency === "USD") {
    const usd = Math.round(pkr / site.pkrPerUsd / 10) * 10;
    return <>USD {usd.toLocaleString("en-US")}</>;
  }
  return <>PKR {pkr.toLocaleString("en-PK")}</>;
}

export function CurrencyToggle() {
  const { currency, setCurrency } = useContext(CurrencyContext);
  return (
    <div className="currency" role="group" aria-label="Currency">
      {(["PKR", "USD"] as const).map((c) => (
        <button key={c} aria-pressed={currency === c} onClick={() => setCurrency(c)}>
          {c}
        </button>
      ))}
    </div>
  );
}
