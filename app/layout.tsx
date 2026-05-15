import "@/app/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#f8faf9] text-[#0f172a] antialiased">{children}</body>
    </html>
  );
}
