import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@careerstyle/boxicons.css";
import "@careerstyle/owl.carousel.css";
import "@careerstyle/main.css";
import "@careerstyle/jquery.css";
import "@careerstyle/loader.css";
import "@careerstyle/createcareer.css";
import "@careerstyle/custom-create-career.css"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meta Pro Support: Facebook and Instagram",
  icons: ["https://recruit.waemployment.com//assets/images/favicon.png"],
};

export default function CareerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

      <div>{children}</div>
  );
}
