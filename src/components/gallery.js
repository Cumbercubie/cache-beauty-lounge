export default function Gallery(props) {
  const baseImageUrl = "/images/gallery";
  const galleryList = [
    {
      imagePath: `${baseImageUrl}/3-3.png`,
    },
    {
      imagePath: `${baseImageUrl}/doing-nail-painting.jpg`,
    },
    {
      imagePath: `${baseImageUrl}/foot-massage.jpg`,
    },
    {
      imagePath: `${baseImageUrl}/3-3.png`,
    },
    {
      imagePath: `${baseImageUrl}/doing-nail-painting.jpg`,
    },
    {
      imagePath: `${baseImageUrl}/foot-massage.jpg`,
    },
  ];
  return (
    <section className="overflow-hidden text-gray-700">
      <div className="grid mx-auto">
        <div className="grid grid-cols-3 w-full lg:w-2/3 justify-self-center justify-items-center">
          {galleryList.map((g) => (
            <div className="p-1 lg:p-2">
              <img
                className="object-fit object-center w-full h-full rounded-lg"
                alt="gallery"
                src={g.imagePath}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
