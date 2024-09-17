import ListUsers from "@/components/core/ListUsers";
import Search from "@/components/core/Search";

export default function Main({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {

  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  return (
    <div className="container mx-auto p-2 lg:p-0">
      <h1 className="text-2xl font-bold mb-4">Listado de Usuarios</h1>
      <div className="flex justify-between items-center mb-4">
      <Search placeholder="Ingresar un seed" width="sm:w-full w-full"  />
      </div>
      <ListUsers query={query} currentPage={currentPage} />
    </div>
  );
}
