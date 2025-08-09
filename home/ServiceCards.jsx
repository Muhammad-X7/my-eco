import "../home/ServiceCards.css";

const Pargh = () => {
  const cards = [
    {
      id: 1,
      title: '#1 Hacus Habitasse',
      description: 'Neque egestas odio nisi congue quisque.',
    },
    {
      id: 2,
      title: '#2 Natoque Penatibus',
      description: 'Ultrices tincidunt arcu non sodales vestibulum.',
    },
    {
      id: 3,
      title: '#3 Tincidunt Ornare',
      description: 'Dignissim diam quis enim lobortis scelerisque.',
    },
    {
      id: 4,
      title: '#4 Aliquam Sagittis',
      description: 'Venenatis cras sed felis eget aliquet commodo.',
    },
  ];

  return (
    <div className="pargh bg-gray-50 pt-16 pb-48 lg:-top-48 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white px-8 py-14 rounded-2xl shadow-sm border group border-gray-100 transition duration-400"
            >
              <h2 className="text-2xl font-bold text-gray-950 mb-5">
                {card.title}
              </h2>
              <p className="text-gray-600 text-lg">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pargh;