import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Paiement en ligne | Fitness Park Maroc",
  description: "Réglez votre abonnement Fitness Park Maroc en toute simplicité.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body>{children}</body></html>;
}
