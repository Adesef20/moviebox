import MovieSection from "@/components/MovieSection";

export default function TopratedMovies() {
  return (
    <main className="bg-black min-h-screen text-white p-10">
      <MovieSection title="Toprated Movies" endpoint="toprated/movie/week" />
    </main>
  );
}
