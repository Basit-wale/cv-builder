export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      <main className="p-4 overflow-y-auto text-center">{children}</main>
    </div>
  );
}
