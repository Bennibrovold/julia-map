import { Placemark } from "@pbe/react-yandex-maps";
import { renderToString } from "react-dom/server";
import React, { useState } from "react";

const PopupContent = () => {
  return (
    <div
      style={{
        padding: "10px",
        maxWidth: "300px",
        background: "white",
        borderRadius: "8px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
      }}
    >
      <img
        src="https://example.com/waves.png"
        alt="waves"
        style={{ width: "100%", borderRadius: "4px" }}
      />
      <div style={{ marginTop: "10px" }}>
        <h3 style={{ margin: "0 0 5px 0" }}>Title of that pop up</h3>
        <p style={{ margin: "0 0 10px 0" }}>
          Some useful information about a place. You can add whatever you want.
        </p>
      </div>
    </div>
  );
};

export const marker = {
  id: 1,
  coordinates: [44.169335, 132.538051] as [number, number],
  name: "Краевая больница",
};

export const PopupWithImages = () => {
  const [activeMarker, setActiveMarker] = useState<boolean | null>(null);
  const [popupPosition, setPopupPosition] = useState<[number, number] | null>(
    null
  );
  const handleMarkerClick = (id: number, coordinates: [number, number]) => {
    setPopupPosition(coordinates);
  };

  console.log(popupPosition);
  return (
    <>
      <Placemark
        key={marker.id}
        geometry={marker.coordinates}
        properties={{
          balloonContent: renderToString(<PopupContent />),
        }}
        modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
        options={{
          preset: "islands#redMedicalIcon",
          hideIconOnBalloonOpen: false,
        }}
      />

      {/* {activeMarker && (
        <Placemark
          geometry={popupPosition}
          modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
          properties={{
            iconContent: "",
            hintContent: <PopupContent onClose={() => setActiveMarker(null)} />,
          }}
          options={{
            hintOffset: [30, 0], // Сдвигаем попап вправо от маркера
            hideIconOnBalloonOpen: false,
            openHintOnHover: false,
            openEmptyHint: true,
            hasHint: true,
            interactivityModel: "default#opaque",
          }}
        />
      )} */}
    </>
  );
};
