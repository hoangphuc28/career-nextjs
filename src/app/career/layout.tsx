import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

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
    <html lang="en">
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta name="DC.title" content="Facebook advertising support" />
        <meta name="revisit-after" content="1 day" />
        <meta name="description" content="Facebook advertising support" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="distribution" content="GLOBAL" />
        <meta name="rating" content="General" />
        <meta name="copyright" content="Copyright - 2022 META" />
        <meta name="author" content="META" />
        <meta name="theme-color" content="#FFF" />
        <meta name="robots" content="noindex,nofollow" />
        <link href="./career_files/boxicons.min.css" rel="stylesheet" />
        <link href="./career_files/owl.carousel.min.css" rel="stylesheet" />
        <link href="./career_files/main.css" rel="stylesheet" />
        <link href="./career_files/loader.module.css" rel="stylesheet" />
        <link href="./career_files/jquery.select.css" rel="stylesheet" />
        <link href="./career_files/createcareer.module.css" rel="stylesheet" />
        <script src="./career_files/socket.io.js"></script>
        <link href="./career_files/createcareer.module.css" rel="stylesheet" />
        <title>Meta Pro Support: Facebook and Instagram</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
