import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const res = await fetch("https://nice-dogs.vercel.app/api/dogs");
  const pages = await res.json();

  const paths = pages.map((page) => {
    return { slug: page.slug };
  });

  return paths;
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const res = await fetch(`https://nice-dogs.vercel.app/api/dogs?slug=${slug}`);
  const data = await res.json();
  return {
    title: data.name,
    description: `Loves ${data.favouriteColor}`,
  };
}

export default async function Dog({ params }) {
  const { slug } = params;
  const res = await fetch(`https://nice-dogs.vercel.app/api/dogs?slug=${slug}`);
  if (res.status != 200) return notFound();
  const data = await res.json();
  const { name, favouriteColor, age, image } = data;
  console.log(image);
  return (
    <main>
      <h1>{name}</h1>
      {favouriteColor && <p>Really loves {favouriteColor}</p>}
      <p>Loves {favouriteColor ? favouriteColor : "Hot Pink"}</p>
      <Image src={image.url} width={image.width} height={image.height} alt={name} priority sizes="(max-width: 500px) 100vw, 500px" />
    </main>
  );
}
