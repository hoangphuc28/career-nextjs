import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@style/boxicons.css';
import '@style/owl.carousel.css';
import '@style/main.css';
import '@style/loader.css';
import '@style/jquery.css';
import '@style/header.css';
import '@style/footer.css';
import '@style/jobs.css';
import '@style/jquery.css'
import '@style/home.css'
import '@style/custom.css'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meta Pro Support: Facebook and Instagram",
  icons: ["https://recruit.waemployment.com//assets/images/favicon.png"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {children}
    </div>
  );
}
