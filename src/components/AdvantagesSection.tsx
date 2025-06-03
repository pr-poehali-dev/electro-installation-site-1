import Icon from "@/components/ui/icon";

const AdvantagesSection = () => {
  const advantages = [
    {
      icon: "Award",
      title: "Лицензия и сертификаты",
      description: "Работаем официально, все документы и разрешения в порядке",
    },
    {
      icon: "Shield",
      title: "Гарантия 1 год",
      description: "Даем гарантию на все виды электромонтажных работ",
    },
    {
      icon: "Clock",
      title: "Точно в срок",
      description: "Соблюдаем сроки выполнения работ, составляем четкий план",
    },
    {
      icon: "DollarSign",
      title: "Фиксированные цены",
      description: "Никаких доплат и скрытых расходов, все оговариваем заранее",
    },
    {
      icon: "Phone",
      title: "Поддержка 24/7",
      description:
        "Всегда на связи для решения любых вопросов и экстренных случаев",
    },
    {
      icon: "Wrench",
      title: "Качественные материалы",
      description:
        "Используем только проверенные бренды: ABB, Schneider Electric",
    },
  ];

  return (
    <section id="advantages" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-gray-600">
            Профессиональный подход к каждому проекту
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Icon
                  name={advantage.icon as any}
                  className="text-blue-600"
                  size={32}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {advantage.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
