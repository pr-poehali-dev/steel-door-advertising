import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState<string>("home");

  const smartDoors = [
    { id: "Smt-01", name: "Smart-01", image: "https://cdn.poehali.dev/projects/85a24fd7-6e6d-4003-85b1-df17724c632c/files/8a68308b-1ad5-43d4-8cf1-b30fd525a900.jpg" },
    { id: "Smt-02", name: "Smart-02", image: "https://cdn.poehali.dev/projects/85a24fd7-6e6d-4003-85b1-df17724c632c/files/8a68308b-1ad5-43d4-8cf1-b30fd525a900.jpg" },
    { id: "Smt-03", name: "Smart-03", image: "https://cdn.poehali.dev/projects/85a24fd7-6e6d-4003-85b1-df17724c632c/files/8a68308b-1ad5-43d4-8cf1-b30fd525a900.jpg" },
    { id: "Smt-04", name: "Smart-04", image: "https://cdn.poehali.dev/projects/85a24fd7-6e6d-4003-85b1-df17724c632c/files/8a68308b-1ad5-43d4-8cf1-b30fd525a900.jpg" },
    { id: "Smt-05", name: "Smart-05", image: "https://cdn.poehali.dev/projects/85a24fd7-6e6d-4003-85b1-df17724c632c/files/8a68308b-1ad5-43d4-8cf1-b30fd525a900.jpg" },
    { id: "Smt-06", name: "Smart-06", image: "https://cdn.poehali.dev/projects/85a24fd7-6e6d-4003-85b1-df17724c632c/files/8a68308b-1ad5-43d4-8cf1-b30fd525a900.jpg" },
    { id: "Smt-07", name: "Smart-07", image: "https://cdn.poehali.dev/projects/85a24fd7-6e6d-4003-85b1-df17724c632c/files/8a68308b-1ad5-43d4-8cf1-b30fd525a900.jpg" },
  ];

  const artDoorsA = [
    { id: "ART-A-01", name: "Art Aluminio 01", image: "https://cdn.poehali.dev/projects/85a24fd7-6e6d-4003-85b1-df17724c632c/files/127a249f-ec47-4525-b5eb-86d369e85f73.jpg" },
    { id: "ART-A-02", name: "Art Aluminio 02", image: "https://cdn.poehali.dev/projects/85a24fd7-6e6d-4003-85b1-df17724c632c/files/127a249f-ec47-4525-b5eb-86d369e85f73.jpg" },
    { id: "ART-A-03", name: "Art Aluminio 03", image: "https://cdn.poehali.dev/projects/85a24fd7-6e6d-4003-85b1-df17724c632c/files/127a249f-ec47-4525-b5eb-86d369e85f73.jpg" },
  ];

  const artDoorsD = [
    { id: "ART-D-01", name: "Art Design 01", image: "https://cdn.poehali.dev/projects/85a24fd7-6e6d-4003-85b1-df17724c632c/files/127a249f-ec47-4525-b5eb-86d369e85f73.jpg" },
    { id: "ART-D-02", name: "Art Design 02", image: "https://cdn.poehali.dev/projects/85a24fd7-6e6d-4003-85b1-df17724c632c/files/127a249f-ec47-4525-b5eb-86d369e85f73.jpg" },
    { id: "ART-D-03", name: "Art Design 03", image: "https://cdn.poehali.dev/projects/85a24fd7-6e6d-4003-85b1-df17724c632c/files/127a249f-ec47-4525-b5eb-86d369e85f73.jpg" },
  ];

  const artDoorsT = [
    { id: "ART-T-01", name: "Art Texture 01", image: "https://cdn.poehali.dev/projects/85a24fd7-6e6d-4003-85b1-df17724c632c/files/127a249f-ec47-4525-b5eb-86d369e85f73.jpg" },
    { id: "ART-T-02", name: "Art Texture 02", image: "https://cdn.poehali.dev/projects/85a24fd7-6e6d-4003-85b1-df17724c632c/files/127a249f-ec47-4525-b5eb-86d369e85f73.jpg" },
    { id: "ART-T-03", name: "Art Texture 03", image: "https://cdn.poehali.dev/projects/85a24fd7-6e6d-4003-85b1-df17724c632c/files/127a249f-ec47-4525-b5eb-86d369e85f73.jpg" },
  ];

  const smartFeatures = [
    { icon: "Fingerprint", text: "Отпечаток пальца" },
    { icon: "CreditCard", text: "Пластиковая карта" },
    { icon: "Lock", text: "Ввод пароля" },
    { icon: "Key", text: "Механический ключ" },
    { icon: "Bluetooth", text: "Bluetooth + смартфон" },
    { icon: "Activity", text: "Датчик движения" },
  ];

  const navigation = [
    { id: "home", label: "Главная", icon: "Home" },
    { id: "catalog", label: "Каталог", icon: "Grid3x3" },
    { id: "about", label: "О продукции", icon: "Info" },
    { id: "installation", label: "Установка", icon: "Wrench" },
    { id: "warranty", label: "Гарантии", icon: "ShieldCheck" },
    { id: "contacts", label: "Контакты", icon: "Phone" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Icon name="Shield" size={28} className="text-secondary" />
            <span className="text-xl font-bold">SteelDoors</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`text-sm font-medium transition-colors hover:text-secondary ${
                  activeSection === item.id ? "text-secondary" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <Button className="hidden md:inline-flex">Заказать звонок</Button>
        </div>
      </header>

      {activeSection === "home" && (
        <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground">
          <div className="container mx-auto px-4 py-24 md:py-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <Badge className="mb-4 bg-secondary text-secondary-foreground">Премиум качество</Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Входные металлические двери
                </h1>
                <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                  Современные технологии безопасности с биометрическими замками Samsung и элегантный дизайн коллекции Art
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" variant="secondary" onClick={() => setActiveSection("catalog")}>
                    <Icon name="Grid3x3" size={20} className="mr-2" />
                    Смотреть каталог
                  </Button>
                  <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                    <Icon name="Phone" size={20} className="mr-2" />
                    Консультация
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px] lg:h-[500px] animate-scale-in">
                <img
                  src="https://cdn.poehali.dev/projects/85a24fd7-6e6d-4003-85b1-df17724c632c/files/8a68308b-1ad5-43d4-8cf1-b30fd525a900.jpg"
                  alt="Металлическая дверь"
                  className="w-full h-full object-cover rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {activeSection === "catalog" && (
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Каталог дверей</h2>
              <p className="text-muted-foreground text-lg">Выберите идеальную дверь для вашего дома</p>
            </div>

            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <Icon name="Smartphone" size={32} className="text-secondary" />
                <h3 className="text-2xl md:text-3xl font-bold">Коллекция SMART</h3>
                <Badge variant="secondary" className="ml-2">Биометрия</Badge>
              </div>
              
              <Card className="p-6 mb-8 bg-muted/50">
                <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Icon name="Lock" size={20} className="text-secondary" />
                  Биометрический замок Samsung
                </h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {smartFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-background rounded-lg">
                      <Icon name={feature.icon} size={20} className="text-secondary" />
                      <span className="text-sm">{feature.text}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t text-sm text-muted-foreground space-y-2">
                  <p>• Механизм ручки PUSH AND PULL</p>
                  <p>• Рабочая температура: -20°C ... +60°C</p>
                  <p>• Функции: ночная блокировка, защита пароля, автозакрытие</p>
                </div>
              </Card>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {smartDoors.map((door) => (
                  <Card key={door.id} className="overflow-hidden group cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1">
                    <div className="aspect-[3/4] overflow-hidden bg-muted">
                      <img
                        src={door.image}
                        alt={door.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-lg mb-1">{door.name}</h4>
                      <p className="text-sm text-muted-foreground">Модель {door.id}</p>
                      <Button className="w-full mt-3" variant="secondary" size="sm">
                        Подробнее
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <Icon name="Palette" size={32} className="text-secondary" />
                <h3 className="text-2xl md:text-3xl font-bold">Коллекция ART</h3>
                <Badge variant="secondary" className="ml-2">Дизайн</Badge>
              </div>

              <Card className="p-6 mb-8 bg-muted/50">
                <h4 className="font-semibold text-lg mb-4">Характеристики коллекции</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-start gap-2">
                    <Icon name="CheckCircle2" size={18} className="text-secondary mt-0.5" />
                    <span>Отделка: МДФ-панель с покраской по RAL</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="CheckCircle2" size={18} className="text-secondary mt-0.5" />
                    <span>Рисунок: фрезированный и наборный</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="CheckCircle2" size={18} className="text-secondary mt-0.5" />
                    <span>Замки и фурнитура: на выбор по каталогу</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="CheckCircle2" size={18} className="text-secondary mt-0.5" />
                    <span>Индивидуальная цветовая палитра</span>
                  </div>
                </div>
              </Card>

              <div className="space-y-12">
                <div>
                  <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Icon name="Sparkles" size={24} className="text-secondary" />
                    Серия Aluminio (фрезировка)
                  </h4>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {artDoorsA.map((door) => (
                      <Card key={door.id} className="overflow-hidden group cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1">
                        <div className="aspect-[3/4] overflow-hidden bg-muted">
                          <img
                            src={door.image}
                            alt={door.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-4">
                          <h5 className="font-semibold text-lg mb-1">{door.name}</h5>
                          <p className="text-sm text-muted-foreground">Модель {door.id}</p>
                          <Button className="w-full mt-3" variant="secondary" size="sm">
                            Подробнее
                          </Button>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Icon name="Sparkles" size={24} className="text-secondary" />
                    Серия Design (наборный рисунок)
                  </h4>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {artDoorsD.map((door) => (
                      <Card key={door.id} className="overflow-hidden group cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1">
                        <div className="aspect-[3/4] overflow-hidden bg-muted">
                          <img
                            src={door.image}
                            alt={door.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-4">
                          <h5 className="font-semibold text-lg mb-1">{door.name}</h5>
                          <p className="text-sm text-muted-foreground">Модель {door.id}</p>
                          <Button className="w-full mt-3" variant="secondary" size="sm">
                            Подробнее
                          </Button>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Icon name="Sparkles" size={24} className="text-secondary" />
                    Серия Texture (наборный рисунок)
                  </h4>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {artDoorsT.map((door) => (
                      <Card key={door.id} className="overflow-hidden group cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1">
                        <div className="aspect-[3/4] overflow-hidden bg-muted">
                          <img
                            src={door.image}
                            alt={door.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-4">
                          <h5 className="font-semibold text-lg mb-1">{door.name}</h5>
                          <p className="text-sm text-muted-foreground">Модель {door.id}</p>
                          <Button className="w-full mt-3" variant="secondary" size="sm">
                            Подробнее
                          </Button>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeSection === "about" && (
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">О продукции</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Наши двери сочетают передовые технологии безопасности и безупречный дизайн
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="p-6 text-center">
                <Icon name="Shield" size={40} className="text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Безопасность</h3>
                <p className="text-muted-foreground">Биометрические замки Samsung с многоступенчатой защитой</p>
              </Card>
              <Card className="p-6 text-center">
                <Icon name="Palette" size={40} className="text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Дизайн</h3>
                <p className="text-muted-foreground">Индивидуальная покраска по RAL и эксклюзивные рисунки</p>
              </Card>
              <Card className="p-6 text-center">
                <Icon name="Award" size={40} className="text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Качество</h3>
                <p className="text-muted-foreground">Премиальные материалы и сертифицированное производство</p>
              </Card>
            </div>
          </div>
        </div>
      )}

      {activeSection === "installation" && (
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Установка дверей</h2>
              <p className="text-muted-foreground text-lg">Профессиональный монтаж с гарантией качества</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { step: "1", icon: "ClipboardList", title: "Замер", text: "Бесплатный выезд специалиста" },
                { step: "2", icon: "Package", title: "Производство", text: "Изготовление 5-7 дней" },
                { step: "3", icon: "Truck", title: "Доставка", text: "Доставка до двери" },
                { step: "4", icon: "Wrench", title: "Монтаж", text: "Установка за 3-4 часа" },
              ].map((item) => (
                <Card key={item.step} className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-bold text-xl mx-auto mb-4">
                    {item.step}
                  </div>
                  <Icon name={item.icon} size={32} className="text-secondary mx-auto mb-3" />
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.text}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeSection === "warranty" && (
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Гарантии</h2>
              <p className="text-muted-foreground text-lg">Мы уверены в качестве нашей продукции</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="p-8">
                <Icon name="ShieldCheck" size={48} className="text-secondary mb-4" />
                <h3 className="text-2xl font-semibold mb-3">5 лет гарантии</h3>
                <p className="text-muted-foreground mb-4">На конструкцию двери и замковые механизмы</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-secondary" />
                    Бесплатное сервисное обслуживание
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-secondary" />
                    Замена комплектующих
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-secondary" />
                    Техническая поддержка 24/7
                  </li>
                </ul>
              </Card>
              <Card className="p-8">
                <Icon name="Award" size={48} className="text-secondary mb-4" />
                <h3 className="text-2xl font-semibold mb-3">Сертификаты</h3>
                <p className="text-muted-foreground mb-4">Вся продукция сертифицирована</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-secondary" />
                    Сертификат соответствия ГОСТ
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-secondary" />
                    Пожарная безопасность
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-secondary" />
                    Экологические стандарты
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      )}

      {activeSection === "contacts" && (
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Контакты</h2>
              <p className="text-muted-foreground text-lg">Свяжитесь с нами удобным способом</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="p-6 text-center">
                <Icon name="Phone" size={40} className="text-secondary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Телефон</h3>
                <p className="text-muted-foreground mb-2">+7 (999) 123-45-67</p>
                <p className="text-sm text-muted-foreground">Ежедневно 9:00 - 21:00</p>
              </Card>
              <Card className="p-6 text-center">
                <Icon name="Mail" size={40} className="text-secondary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground mb-2">info@steeldoors.ru</p>
                <p className="text-sm text-muted-foreground">Ответим в течение часа</p>
              </Card>
              <Card className="p-6 text-center">
                <Icon name="MapPin" size={40} className="text-secondary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Адрес</h3>
                <p className="text-muted-foreground mb-2">Москва, ул. Примерная, 123</p>
                <p className="text-sm text-muted-foreground">Шоурум и офис продаж</p>
              </Card>
            </div>
            <div className="mt-12 text-center">
              <Button size="lg" className="gap-2">
                <Icon name="MessageCircle" size={20} />
                Написать в WhatsApp
              </Button>
            </div>
          </div>
        </div>
      )}

      <footer className="border-t mt-16 py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Shield" size={24} className="text-secondary" />
              <span className="font-semibold">SteelDoors</span>
            </div>
            <p className="text-sm text-muted-foreground text-center">
              © 2024 SteelDoors. Входные металлические двери премиум-класса
            </p>
            <div className="flex gap-4">
              <Icon name="Instagram" size={20} className="text-muted-foreground hover:text-secondary cursor-pointer transition-colors" />
              <Icon name="Facebook" size={20} className="text-muted-foreground hover:text-secondary cursor-pointer transition-colors" />
              <Icon name="Youtube" size={20} className="text-muted-foreground hover:text-secondary cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
