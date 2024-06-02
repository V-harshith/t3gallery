import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/813f4361-cf56-4389-8b9f-4ed66b011df3-6aj4de.jpg",
  "https://utfs.io/f/c4d41add-2992-420b-ba36-a2504f9cbb38-vhwajt.jpg",
  "https://utfs.io/f/93fc3997-8c9f-4b32-b46f-ed34f256c4fe-g26vn6.jpg",
  "https://utfs.io/f/ac599b56-7be6-4dbd-8159-1e0fcbc0b77b-8c46ul.jpg",
];

const mockImages = mockUrls.map((url,index) => ({
  id: index +1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        { mockImages.map((image) => (
          <div key={image.id} className="w-48">
          <img src={image.url} alt="image" />
          </div>
        ))
}</div>
    </main>
  );
}
