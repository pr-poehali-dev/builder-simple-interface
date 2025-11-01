import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const codeExamples = {
  javascript: `function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));`,
  python: `def quicksort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quicksort(left) + middle + quicksort(right)

print(quicksort([3,6,8,10,1,2,1]))`,
  typescript: `interface User {
  id: number;
  name: string;
  email: string;
}

const users: User[] = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' }
];

function findUser(id: number): User | undefined {
  return users.find(user => user.id === id);
}`
};

const projectTemplates = [
  {
    title: 'React Todo App',
    description: 'Приложение для управления задачами с React Hooks',
    language: 'JavaScript',
    icon: 'ListTodo'
  },
  {
    title: 'REST API',
    description: 'Бэкенд API с Express и MongoDB',
    language: 'Node.js',
    icon: 'Server'
  },
  {
    title: 'Data Analysis',
    description: 'Анализ данных с pandas и matplotlib',
    language: 'Python',
    icon: 'BarChart'
  },
  {
    title: 'E-commerce Store',
    description: 'Интернет-магазин на TypeScript и Next.js',
    language: 'TypeScript',
    icon: 'ShoppingCart'
  }
];

export default function Index() {
  const [activeLanguage, setActiveLanguage] = useState<keyof typeof codeExamples>('javascript');
  const [code, setCode] = useState(codeExamples.javascript);

  const handleLanguageChange = (lang: keyof typeof codeExamples) => {
    setActiveLanguage(lang);
    setCode(codeExamples[lang]);
  };

  const handleExport = () => {
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `code.${activeLanguage === 'python' ? 'py' : activeLanguage === 'typescript' ? 'ts' : 'js'}`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center glow">
                <Icon name="Code2" size={24} className="text-background" />
              </div>
              <h1 className="text-2xl font-bold">CodeBuilder</h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#editor" className="text-muted-foreground hover:text-foreground transition-colors">Редактор</a>
              <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">Проекты</a>
              <a href="#docs" className="text-muted-foreground hover:text-foreground transition-colors">Документация</a>
              <Button size="sm" className="glow">
                <Icon name="Download" size={16} className="mr-2" />
                Экспорт
              </Button>
            </nav>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </header>

      <main>
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-block mb-4">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
                  🚀 Конструктор кода нового поколения
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Создавай код визуально
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Простой и понятный интерфейс для программирования с подсветкой синтаксиса, 
                примерами проектов и мгновенным экспортом
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button size="lg" className="glow">
                  <Icon name="Play" size={20} className="mr-2" />
                  Начать программировать
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="BookOpen" size={20} className="mr-2" />
                  Документация
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Sparkles" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Подсветка синтаксиса</h3>
                <p className="text-muted-foreground">
                  Поддержка JavaScript, Python, TypeScript и других языков
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Boxes" size={24} className="text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Готовые шаблоны</h3>
                <p className="text-muted-foreground">
                  Библиотека проектов для быстрого старта разработки
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="FileDown" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Экспорт проектов</h3>
                <p className="text-muted-foreground">
                  Скачивайте код в нужном формате одним кликом
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section id="editor" className="py-16 px-4 bg-muted/20">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Редактор кода</h2>
              <p className="text-muted-foreground text-lg">
                Пишите и редактируйте код с удобной подсветкой синтаксиса
              </p>
            </div>

            <Card className="overflow-hidden border-border/50 glow-purple">
              <div className="bg-card/80 backdrop-blur border-b border-border p-3 flex items-center justify-between">
                <Tabs value={activeLanguage} onValueChange={(val) => handleLanguageChange(val as keyof typeof codeExamples)}>
                  <TabsList>
                    <TabsTrigger value="javascript" className="gap-2">
                      <Icon name="FileCode" size={16} />
                      JavaScript
                    </TabsTrigger>
                    <TabsTrigger value="python" className="gap-2">
                      <Icon name="Code" size={16} />
                      Python
                    </TabsTrigger>
                    <TabsTrigger value="typescript" className="gap-2">
                      <Icon name="FileType" size={16} />
                      TypeScript
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
                <Button size="sm" onClick={handleExport}>
                  <Icon name="Download" size={16} className="mr-2" />
                  Экспорт
                </Button>
              </div>
              
              <div className="relative">
                <div className="absolute top-4 left-4 flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                
                <textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="w-full h-96 bg-background/50 p-8 pt-12 font-mono text-sm resize-none focus:outline-none text-foreground"
                  spellCheck={false}
                />
                
                <div className="absolute bottom-4 right-4 flex gap-2 text-xs text-muted-foreground">
                  <span>Строк: {code.split('\n').length}</span>
                  <span>•</span>
                  <span>Символов: {code.length}</span>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section id="projects" className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Примеры проектов</h2>
              <p className="text-muted-foreground text-lg">
                Выберите шаблон и начните разработку прямо сейчас
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {projectTemplates.map((template, index) => (
                <Card 
                  key={index}
                  className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-border/50 bg-card/50 backdrop-blur group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform glow">
                    <Icon name={template.icon as any} size={28} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{template.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{template.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20">
                      {template.language}
                    </span>
                    <Icon name="ArrowRight" size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="docs" className="py-16 px-4 bg-muted/20">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Помощь и FAQ</h2>
              <p className="text-muted-foreground text-lg">
                Ответы на частые вопросы
              </p>
            </div>

            <div className="space-y-4">
              <Card className="p-6 border-border/50 bg-card/50 backdrop-blur">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="HelpCircle" size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Как экспортировать проект?</h3>
                    <p className="text-muted-foreground text-sm">
                      Нажмите кнопку "Экспорт" в редакторе кода или в верхнем меню. Проект автоматически скачается в нужном формате.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-border/50 bg-card/50 backdrop-blur">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="HelpCircle" size={20} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Какие языки поддерживаются?</h3>
                    <p className="text-muted-foreground text-sm">
                      В данный момент доступны JavaScript, Python и TypeScript. Скоро добавим поддержку Java, C++ и других языков.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-border/50 bg-card/50 backdrop-blur">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="HelpCircle" size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Можно ли сохранять проекты?</h3>
                    <p className="text-muted-foreground text-sm">
                      Да, все проекты автоматически сохраняются в вашем браузере. Скоро добавим облачную синхронизацию.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-card/50 backdrop-blur py-8 px-4 mt-16">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Code2" size={20} className="text-background" />
              </div>
              <span className="font-semibold">CodeBuilder</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 CodeBuilder. Создавай код визуально
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Icon name="Github" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Icon name="Linkedin" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
