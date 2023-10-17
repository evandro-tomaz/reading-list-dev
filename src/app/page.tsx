import Hero from "./components/Hero";
import MyBooks from "@/app/components/MyBooks";

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <Hero />
      <MyBooks />
    </main>
  )
}
