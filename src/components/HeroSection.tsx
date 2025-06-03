import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Профессиональные
              <span className="text-blue-400 block">
                электромонтажные работы
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Качественный монтаж проводки, освещения и электрических систем.
              Гарантия 3 года на все виды работ.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Icon name="Calculator" size={18} className="mr-2" />
                Рассчитать стоимость
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-slate-900"
              >
                <Icon name="Phone" size={18} className="mr-2" />
                +7 (999) 123-45-67
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-blue-600/20 rounded-2xl p-8 backdrop-blur-sm border border-blue-400/30">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <Icon
                    name="Award"
                    size={32}
                    className="mx-auto mb-2 text-blue-400"
                  />
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm text-gray-300">Объектов</div>
                </div>
                <div className="text-center">
                  <Icon
                    name="Clock"
                    size={32}
                    className="mx-auto mb-2 text-blue-400"
                  />
                  <div className="text-2xl font-bold">5</div>
                  <div className="text-sm text-gray-300">Лет опыта</div>
                </div>
                <div className="text-center">
                  <Icon
                    name="Shield"
                    size={32}
                    className="mx-auto mb-2 text-blue-400"
                  />
                  <div className="text-2xl font-bold">3</div>
                  <div className="text-sm text-gray-300">Года гарантии</div>
                </div>
                <div className="text-center">
                  <Icon
                    name="Users"
                    size={32}
                    className="mx-auto mb-2 text-blue-400"
                  />
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm text-gray-300">Поддержка</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
