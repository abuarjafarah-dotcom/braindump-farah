export const metadata = {
  title: "Farah's Brain Dump",
  description: "Dashboard for mothering 3 under 5",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        {children}
      </body>
    </html>
  );
}
