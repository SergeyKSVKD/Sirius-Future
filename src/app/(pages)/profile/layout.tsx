import type { Metadata, Viewport } from "next";
import styles from './page.module.scss'
import StoreLayout from "@/app/store/StoreLayout";
import Navigation from "./components/navigation/Navigation";

export const metadata: Metadata = {
    title: "Личный кабинет | Sirius Future.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <StoreLayout>
            {children}
        </StoreLayout>
    );
}