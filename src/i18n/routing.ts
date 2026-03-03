import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "ru", "hy", "pt"],
  defaultLocale: "en",
});
