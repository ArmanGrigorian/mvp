import { FloatingCallButton, Footer, Header } from "@/components";

export default async function WebLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <>
      <Header />
      <main className="grow">{children}</main>
      {locale !== "hy" && <FloatingCallButton phoneNumber="+374 10 00 00 00" />}
      <Footer />
    </>
  );
}
