import { getDictionary } from "@/lib/get-dictionaries";
import { Locale } from "@/lib/i18n-config";
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <div className="flex flex-col h-[100dvh]">
      <div className="flex grow">
        <Sidebar />
        <div className=" grow">
          <Navbar />
          <main className="grow">
            <p>Current locale: {lang}</p>
            <p>
              This text is rendered on the server:
              {dictionary["server-component"].welcome}
            </p>
          </main>
        </div>
      </div>
    </div>
  );
}
