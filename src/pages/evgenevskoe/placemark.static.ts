import RIVER from "../../assets/river.jpg";
import BUS from "../../assets/bus.jpg";
import HOSPITAL from "../../assets/hospital.jpg";

export const placemarks = [
  // 2. Река (иконка воды/природы)
  {
    id: 4,
    coordinates: [43.505061, 134.678446],
    options: {
      preset: "islands#blueWaterParkIcon", // Иконка водоема
    },
    name: "Река Маргаритовка",
    description:
      "Небольшая, но живописная река на юго-востоке Приморья, впадающая в Японское море. Течёт через густые смешанные леса, создавая удивительные пейзажи.",
    img: RIVER,
  },
  // 3. Вокзал (иконка транспорта)
  {
    id: 5,
    coordinates: [43.575458, 134.629663],
    options: {
      preset: "islands#blueMassTransitIcon", // Иконка ж/д вокзала
    },
    name: "Автобусная остановка",

    img: BUS,
  },

  // Больница
  {
    id: 6,
    coordinates: [43.576225, 134.653787],
    options: {
      preset: "islands#redMedicalIcon",
    },
    name: "Краевая больница",
    img: HOSPITAL,
    description: `Краевая больница восстановительного лечения "Евгеньевская" расположена в с. Щербаковка, Ольгинский район.`,
  },
];
