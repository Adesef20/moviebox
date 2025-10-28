import MovieSection from "@/components/MovieSection";

export default function AmericanMovies() {
  return (
    <main className="bg-black min-h-screen text-white p-10">
      <MovieSection title="American Movies" endpoint="american/movie/week" />
    </main>
  );
}
