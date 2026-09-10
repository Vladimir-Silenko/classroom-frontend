import { ISubject } from "@/types";
import { BaseRecord, DataProvider, GetListParams, GetListResponse } from "@refinedev/core";

const subjects: ISubject[] = [
  {
    id: 1,
    name: "Математический анализ",
    code: "MATH-101",
    description: "Пределы, производные, интегралы и их применение.",
    createdAt: "2026-01-10T09:00:00.000Z",
    department: "Math",
  },
  {
    id: 2,
    name: "Линейная алгебра",
    code: "MATH-102",
    description: "Матрицы, определители и векторные пространства.",
    createdAt: "2026-01-11T09:00:00.000Z",
    department: "Math",
  },
  {
    id: 3,
    name: "Дискретная математика",
    code: "MATH-103",
    description: "Математическая логика, комбинаторика и теория графов.",
    createdAt: "2026-01-12T09:00:00.000Z",
    department: "Math",
  },
  {
    id: 4,
    name: "Теория вероятностей",
    code: "MATH-104",
    description: "Случайные события, величины и распределения.",
    createdAt: "2026-01-13T09:00:00.000Z",
    department: "Math",
  },
  {
    id: 5,
    name: "Математическая статистика",
    code: "MATH-105",
    description: "Анализ выборок, оценка параметров и проверка гипотез.",
    createdAt: "2026-01-14T09:00:00.000Z",
    department: "Math",
  },
  {
    id: 6,
    name: "Основы программирования",
    code: "CS-101",
    description: "Переменные, условия, циклы и функции.",
    createdAt: "2026-01-15T09:00:00.000Z",
    department: "CS",
  },
  {
    id: 7,
    name: "Алгоритмы и структуры данных",
    code: "CS-102",
    description: "Списки, деревья, сортировка и оценка сложности алгоритмов.",
    createdAt: "2026-01-16T09:00:00.000Z",
    department: "CS",
  },
  {
    id: 8,
    name: "Объектно-ориентированное программирование",
    code: "CS-103",
    description: "Классы, наследование, инкапсуляция и полиморфизм.",
    createdAt: "2026-01-17T09:00:00.000Z",
    department: "CS",
  },
  {
    id: 9,
    name: "Базы данных",
    code: "CS-104",
    description: "Проектирование реляционных баз данных и язык SQL.",
    createdAt: "2026-01-18T09:00:00.000Z",
    department: "CS",
  },
  {
    id: 10,
    name: "Операционные системы",
    code: "CS-105",
    description: "Процессы, потоки, управление памятью и файловые системы.",
    createdAt: "2026-01-19T09:00:00.000Z",
    department: "CS",
  },
  {
    id: 11,
    name: "Веб-разработка",
    code: "WEB-101",
    description: "Создание веб-страниц с помощью HTML, CSS и JavaScript.",
    createdAt: "2026-01-20T09:00:00.000Z",
    department: "CS",
  },
  {
    id: 12,
    name: "Разработка на TypeScript",
    code: "WEB-102",
    description: "Типизация, интерфейсы и обобщённые типы.",
    createdAt: "2026-01-21T09:00:00.000Z",
    department: "CS",
  },
  {
    id: 13,
    name: "Разработка на React",
    code: "WEB-103",
    description: "Компоненты, хуки и управление состоянием интерфейса.",
    createdAt: "2026-01-22T09:00:00.000Z",
    department: "CS",
  },
  {
    id: 14,
    name: "Серверная разработка на Node.js",
    code: "WEB-104",
    description: "Создание серверных приложений и REST API.",
    createdAt: "2026-01-23T09:00:00.000Z",
    department: "CS",
  },
  {
    id: 15,
    name: "Тестирование программного обеспечения",
    code: "SE-101",
    description: "Модульное, интеграционное и сквозное тестирование.",
    createdAt: "2026-01-24T09:00:00.000Z",
    department: "CS",
  },
  {
    id: 16,
    name: "Архитектура программного обеспечения",
    code: "SE-102",
    description: "Архитектурные подходы и шаблоны проектирования.",
    createdAt: "2026-01-25T09:00:00.000Z",
    department: "CS",
  },
  {
    id: 17,
    name: "Компьютерные сети",
    code: "NET-101",
    description: "Сетевые протоколы, адресация и маршрутизация.",
    createdAt: "2026-01-26T09:00:00.000Z",
    department: "CS",
  },
  {
    id: 18,
    name: "Информационная безопасность",
    code: "SEC-101",
    description: "Защита информации, анализ угроз и управление доступом.",
    createdAt: "2026-01-27T09:00:00.000Z",
    department: "CS",
  },
  {
    id: 19,
    name: "Криптография",
    code: "SEC-102",
    description: "Шифрование, хеширование и цифровые подписи.",
    createdAt: "2026-01-28T09:00:00.000Z",
    department: "CS",
  },
  {
    id: 20,
    name: "Искусственный интеллект",
    code: "AI-101",
    description: "Методы поиска, представление знаний и принятие решений.",
    createdAt: "2026-01-29T09:00:00.000Z",
    department: "CS",
  },
  {
    id: 21,
    name: "Машинное обучение",
    code: "AI-102",
    description: "Регрессия, классификация и кластеризация данных.",
    createdAt: "2026-01-30T09:00:00.000Z",
    department: "CS",
  },
  {
    id: 22,
    name: "Нейронные сети",
    code: "AI-103",
    description: "Построение, обучение и оценка нейросетевых моделей.",
    createdAt: "2026-01-31T09:00:00.000Z",
    department: "CS",
  },
  {
    id: 23,
    name: "Анализ данных",
    code: "DATA-101",
    description: "Подготовка, исследование и визуализация данных.",
    createdAt: "2026-02-01T09:00:00.000Z",
    department: "CS",
  },
  {
    id: 24,
    name: "Большие данные",
    code: "DATA-102",
    description: "Хранение и распределённая обработка больших объёмов данных.",
    createdAt: "2026-02-02T09:00:00.000Z",
    department: "CS",
  },
  {
    id: 25,
    name: "Общая физика",
    code: "PHYS-101",
    description: "Основы механики, термодинамики и электромагнетизма.",
    createdAt: "2026-02-03T09:00:00.000Z",
    department: "Math",
  },
  {
    id: 26,
    name: "Электроника",
    code: "PHYS-102",
    description: "Электронные компоненты, аналоговые и цифровые схемы.",
    createdAt: "2026-02-04T09:00:00.000Z",
    department: "Math",
  },
  {
    id: 27,
    name: "Английский язык",
    code: "LANG-101",
    description: "Развитие навыков устной и письменной коммуникации.",
    createdAt: "2026-02-05T09:00:00.000Z",
    department: "English",
  },
  {
    id: 28,
    name: "Технический английский",
    code: "LANG-102",
    description: "Изучение технической терминологии и чтение документации.",
    createdAt: "2026-02-06T09:00:00.000Z",
    department: "English",
  },
  {
    id: 29,
    name: "Основы экономики",
    code: "ECON-101",
    description: "Спрос, предложение, рыночные механизмы и макроэкономика.",
    createdAt: "2026-02-07T09:00:00.000Z",
    department: "Math",
  },
  {
    id: 30,
    name: "Управление проектами",
    code: "MGMT-101",
    description: "Планирование проектов, управление ресурсами и рисками.",
    createdAt: "2026-02-08T09:00:00.000Z",
    department: "CS",
  },
];

export const dataProvider: DataProvider = {
  getList: async <TData extends BaseRecord = BaseRecord>({ resource }: GetListParams): Promise<GetListResponse<TData>> => {
    if (resource !== 'subjects') {
      return {
        data: [] as TData[],
        total: 0,
      };
    }

    return {
      data: subjects as unknown as TData[],
      total: subjects.length,
    };
  },
  getOne: async () => {
    throw new Error('this function does not present in mock')
  },
  create: async () => {
    throw new Error('this function does not present in mock')
  },
  update: async () => {
    throw new Error('this function does not present in mock')
  },
  deleteOne: async () => {
    throw new Error('this function does not present in mock')
  },

  getApiUrl: () => '',
}
