import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const session = await getServerSession();

  if (!session || (session.user as any)?.role !== "ADMIN") {
    redirect("/");
  }

  return (
    <div className="min-h-screen brand-container py-12">
      <h1 className="text-3xl font-playfair font-bold mb-8">Admin Panel</h1>
      <p>Admin Panel Coming Soon</p>
    </div>
  );
}
