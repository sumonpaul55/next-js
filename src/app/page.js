import Counter from "@/components/counter/Counter";
import "./globals.css"

const HomePage = () => {
  // console.log(counter)
  // throw new Error()
  return (
    <div>
      <h1>This is Home page</h1>
      <Counter />
    </div>
  );
};

export default HomePage;