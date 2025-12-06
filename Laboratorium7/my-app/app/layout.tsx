import "./globals.css";
import MainHeader from "@/components/main-header";

export const metadata = {
  title: "Hindu Gods Blog",
  description: "A blog about Hindu gods and mythology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        <main>{children}</main>
      </body>
    </html>
  );
}
