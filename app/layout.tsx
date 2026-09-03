import type { Metadata } from "next";
import "./globals.css";
import "./duck-mascots.css";

export const metadata: Metadata = {
  title: {
    default: "Уточки судьбы",
    template: "%s — Уточки судьбы",
  },
  description: "Авторская вселенная: персональные разборы, карты, блокноты и немного магии с самоиронией.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>
        {children}
      </body>
    </html>
  );
}
