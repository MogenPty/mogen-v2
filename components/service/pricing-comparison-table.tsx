"use client";

import { CheckIcon, MinusIcon, StarIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { useMemo } from "react";

import ButtonColored from "@/components/shared/button-colored";
import type { Package, PackageFeature, PackageFeatureValue } from "@/data/pricing";
import { createPageUrl } from "@/lib/utils";

interface Props {
  packages: Package[];
  title?: string;
  caption?: string;
}

function isPackageFeature(
  f: string | PackageFeature,
): f is PackageFeature {
  return typeof f === "object" && f !== null && "label" in f;
}

function normalizeKey(label: string): string {
  return label.trim().toLowerCase();
}

function getLabelAndValue(
  f: string | PackageFeature,
): { label: string; value: PackageFeatureValue } {
  if (isPackageFeature(f)) return { label: f.label, value: f.value };
  return { label: f, value: true };
}

export function buildPricingMatrix(packages: Package[]) {
  const featureOrder: string[] = [];
  const keyToLabel = new Map<string, string>();
  const matrix = new Map<string, Map<string, PackageFeatureValue>>();
  const packageOrder: Package[] = [];

  for (const pkg of packages) {
    if (!packageOrder.find((p) => p.name === pkg.name)) {
      packageOrder.push(pkg);
    }
    for (const f of pkg.features) {
      const { label, value } = getLabelAndValue(f);
      const key = normalizeKey(label);
      if (!keyToLabel.has(key)) {
        keyToLabel.set(key, label);
        featureOrder.push(key);
        matrix.set(key, new Map());
      }
      // set value for this package/feature intersection
      const col = matrix.get(key);
      if (col) col.set(pkg.name, value);
    }
  }

  return { featureOrder, keyToLabel, matrix, packageOrder };
}

function RenderValue({ value }: { value: PackageFeatureValue | undefined }) {
  if (value === undefined || value === false) {
    return <MinusIcon className="w-5 h-5 text-gray-300 mx-auto" weight="bold" aria-label="Not included" />;
  }
  if (value === true) {
    return <CheckIcon className="w-6 h-6 text-lime-500 mx-auto" weight="bold" aria-label="Included" />;
  }
  return <span className="font-bold text-sm text-gray-800">{String(value)}</span>;
}

export default function PricingComparisonTable({
  packages,
  title = "COMPARE PACKAGES",
  caption = "Pricing comparison table",
}: Readonly<Props>) {
  const { featureOrder, keyToLabel, matrix, packageOrder } = useMemo(
    () => buildPricingMatrix(packages),
    [packages],
  );

  if (!packages || packages.length === 0 || featureOrder.length === 0) return null;

  return (
    <div className="bg-white p-4 md:p-6 neo-brutalist-border neo-brutalist-shadow transform rotate-1">
      <h2 className="text-2xl md:text-3xl font-black mb-4 uppercase">{title}</h2>
      <p className="sr-only">{caption}</p>

      <div className="overflow-x-auto -mx-4 md:mx-0 px-4 md:px-0">
        <table className="w-full border-collapse min-w-[560px] neo-brutalist-border">
          <caption className="sr-only">{caption}</caption>
          <thead>
            <tr className="bg-black text-white">
              <th
                scope="col"
                className="text-left p-4 font-black uppercase text-sm sticky left-0 bg-black z-20 min-w-[180px] border-r-2 border-white/20"
              >
                Feature
              </th>
              {packageOrder.map((pkg) => (
                <th
                  key={pkg.name}
                  scope="col"
                  className="text-center p-3 md:p-4 min-w-[150px] border-l-2 border-white/20 align-top"
                >
                  <div className="flex flex-col items-center gap-2">
                    <span className="font-black text-base md:text-lg leading-none">{pkg.name}</span>
                    <span
                      className={`${pkg.backgroundColor ?? "bg-white"} ${pkg.foreColor ?? "text-white"} px-3 py-1 font-black text-sm neo-brutalist-border neo-brutalist-shadow-sm whitespace-nowrap`}
                    >
                      {pkg.price}
                    </span>
                    {pkg.popular && (
                      <span className="bg-orange-500 text-white px-2 py-1 font-black text-[10px] flex items-center gap-1 neo-brutalist-border">
                        <StarIcon className="w-3 h-3" weight="fill" />
                        POPULAR
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {featureOrder.map((key, idx) => {
              const label = keyToLabel.get(key) ?? key;
              const isEven = idx % 2 === 1;
              const rowBg = isEven ? "bg-gray-50" : "bg-white";
              const stickyBg = isEven ? "bg-gray-50" : "bg-white";
              return (
                <tr key={key} className={`${rowBg} border-t-2 border-black`}>
                  <th
                    scope="row"
                    className={`text-left p-3 md:p-4 font-bold text-sm sticky left-0 z-10 border-r-2 border-black ${stickyBg} min-w-[180px]`}
                  >
                    {label}
                  </th>
                  {packageOrder.map((pkg) => {
                    const value = matrix.get(key)?.get(pkg.name);
                    return (
                      <td
                        key={`${key}-${pkg.name}`}
                        className="p-3 md:p-4 text-center border-l-2 border-black/10 align-middle"
                      >
                        <RenderValue value={value} />
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr className="bg-white border-t-2 border-black">
              <th scope="row" className="p-4 sticky left-0 bg-white z-10 border-r-2 border-black" aria-hidden>
                <span className="sr-only">Actions</span>
              </th>
              {packageOrder.map((pkg) => (
                <td key={`cta-${pkg.name}`} className="p-3 md:p-4 text-center border-l-2 border-black/10">
                  <Link href={createPageUrl("Contact")}>
                    <ButtonColored
                      foreColor={pkg.foreColor}
                      backgroundColor={pkg.backgroundColor}
                      className="w-full text-xs md:text-sm px-2 py-2"
                    >
                      CHOOSE {pkg.name}
                    </ButtonColored>
                  </Link>
                </td>
              ))}
            </tr>
          </tfoot>
        </table>
      </div>

      <p className="mt-3 text-xs font-bold text-gray-500 md:hidden">← Scroll horizontally to compare →</p>
    </div>
  );
}
