// export const dynamic = "force-static"; // Her kommer det samme billede og det ændre sig ikke
export const dynamic = "force-dynamic"; //Her kommer der et nyt billede hver gang siden loader
export const metadata = {
  title: "Home",
  description: "A description",
};

export default async function Home() {
  // const res = await fetch("https://dog.ceo/api/breeds/image/random");
  // const data = await res.json();
  return (
    <main>
      <h1>We love dogs!</h1>
      {/* <img src={data.message} alt="dog" /> */}
    </main>
  );
}
