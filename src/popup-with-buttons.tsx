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

export const PopupWithImages = ({ marker }) => {
  const [activeMarker, setActiveMarker] = useState<boolean | null>(null);
  const [popupPosition, setPopupPosition] = useState<[number, number] | null>(
    null
  );

  return (
    <>
      <Placemark
        key={marker.id}
        geometry={marker.coordinates}
        properties={{
          balloonContent: renderToString(<PopupContent />),
        }}
        options={{
          preset: "islands#redMedicalIcon",
          hideIconOnBalloonOpen: false,
        }}
      />
    </>
  );
};
