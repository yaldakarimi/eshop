import { APP_DESCRIPTION, APP_NAME, SERVER_URL } from "@/lib/constants";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import "../assets/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: {
		template: `${APP_NAME} | %s`,
		default: APP_NAME,
	},
	description: APP_DESCRIPTION,
	metadataBase: new URL(SERVER_URL),
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${inter.className} antialiased`}>
				<ThemeProvider
					attribute="class"
					disableTransitionOnChange
					defaultTheme="light"
					enableSystem
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
