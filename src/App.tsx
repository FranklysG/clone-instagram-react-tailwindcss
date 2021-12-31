import { Header } from "./components/header";
import { Storie } from "./components/storie";

export function App() {
  return (
    <>
      <Header />
      <div className="flex py-2 px-3">
        <Storie />
      </div>
    </>
  );
}
