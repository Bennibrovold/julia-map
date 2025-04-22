import LAKE from "../../assets/lake.jpeg";
import TRAIN from "../../assets/train.jpeg";
import MED_SVETL from "../../assets/med-svetl.webp";
import A2 from "../../assets/a-2-svetl.webp";
import A1 from "../../assets/a-1-svetl.webp";
import A3 from "../../assets/a-3-svetl.webp";

export const placemarks = [
  // 1. Аптеки (медицинские иконки)
  {
    id: 1,
    coordinates: [44.203335, 132.447695], // Москва, Кремль (пример)
    options: {
      preset: "islands#redMedicalIcon", // Красная медицинская иконка
    },
    name: "Аптека №1",
    img: A1,
  },
  {
    id: 2,
    coordinates: [44.205917, 132.449339], // Рядом с Кремлем
    options: {
      preset: "islands#blueMedicalIcon", // Синяя медицинская иконка
    },
    name: "Аптека №2",
    img: A2,
  },
  {
    id: 3,
    coordinates: [44.205314, 132.442142], // Еще одна точка
    options: {
      preset: "islands#greenMedicalIcon", // Зеленая медицинская иконка
    },
    name: "Аптека №3",
    img: A3,
  },

  // 2. Озеро (иконка воды/природы)
  {
    id: 4,
    coordinates: [44.1798, 132.523726],
    options: {
      preset: "islands#blueWaterParkIcon", // Иконка водоема
    },
    name: "Озеро в Сибирцево",
    description:
      "Живописное озеро, расположенное в посёлке Сибирцево (Приморский край), — идеальное место для отдыха на природе. Водоём окружён смешанным лесом, что создаёт уютную атмосферу и защищает от ветра.",
    img: LAKE,
  },
  // 3. Вокзал (иконка транспорта)
  {
    id: 5,
    coordinates: [44.206333, 132.439567],
    options: {
      preset: "islands#blueRailwayIcon", // Иконка ж/д вокзала
    },
    name: "Станция Сибирцево",
    description:
      "Станция Сибирцево — важный транспортный узел на Транссибирской магистрали, соединяющий Приморский край с другими регионами России. Небольшое, но оживлённое место, где останавливаются пригородные поезда и дальние составы.",
    img: TRAIN,
  },

  // Больница
  {
    id: 6,
    coordinates: [44.169335, 132.538051],
    options: {
      preset: "islands#redMedicalIcon",
    },
    name: "Краевая больница",
    img: MED_SVETL,
    description:
      "Краевая больница восстановительного лечения «Светлояровка»– современное медучреждение, объединяющее функции стационара и санатория. Расположенная в живописной местности, она предлагает пациентам комплексную реабилитацию при различных заболеваниях, сочетая эффективное лечение с отдыхом на природе.",
  },
];
