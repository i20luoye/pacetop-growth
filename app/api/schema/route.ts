import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PaceTop Growth",
    url: "https://pacetop.com",
    description:
      "AI-powered growth solutions helping Chinese B2B manufacturers acquire more overseas customers.",
    areaServed: "Global",
    knowsAbout: [
      "B2B SEO",
      "AI Search Optimization",
      "Website Conversion Optimization",
      "Manufacturing Marketing",
    ],
  });
}
