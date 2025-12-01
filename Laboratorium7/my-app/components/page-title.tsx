export default function PageTitle({ children }: { children: React.ReactNode }) {
  return (
    <h1 style={{ fontSize: "32px", marginBottom: "20px", color: "#8b0000" }}>
      {children}
    </h1>
  );
}
