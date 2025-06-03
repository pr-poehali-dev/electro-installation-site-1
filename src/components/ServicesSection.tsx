import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const ServicesSection = () => {
  const services = [
    {
      icon: "Cable",
      title: "Монтаж проводки",
      description:
        "Полная замена и прокладка электропроводки в квартирах, домах и офисах",
      price: "от 800 ₽/м²",
      features: [
        "Скрытая проводка",
        "Медные кабели",
        "Автоматические выключатели",
      ],
    },
    {
      icon: "Lightbulb",
      title: "Освещение",
      description:
        "Установка люстр, светильников, LED-подсветки и умных систем освещения",
      price: "от 500 ₽/точка",
      features: ["Дизайнерское освещение", "LED технологии", "Диммеры"],
    },
    {
      icon: "Plug",
      title: "Розетки и выключатели",
      description: "Установка и перенос розеток, выключателей, USB-розеток",
      price: "от 300 ₽/шт",
      features: ["Скрытая установка", "Премиум бренды", "USB разъемы"],
    },
    {
      icon: "Cpu",
      title: "Электрощитовые",
      description: "Сборка и монтаж электрощитов, подключение автоматики",
      price: "от 5000 ₽",
      features: ["ABB оборудование", "УЗО защита", "Маркировка"],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Предлагаем полный спектр электромонтажных работ с гарантией качества
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow border-0 shadow-sm"
            >
              <CardHeader className="text-center pb-4">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={service.icon as any}
                    className="text-blue-600"
                    size={28}
                  />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
                <Badge
                  variant="secondary"
                  className="mx-auto bg-blue-50 text-blue-700"
                >
                  {service.price}
                </Badge>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-center mb-4 text-sm leading-relaxed">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <Icon
                        name="Check"
                        size={14}
                        className="text-green-500 mr-2 flex-shrink-0"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
