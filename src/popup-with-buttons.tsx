import { Placemark } from "@pbe/react-yandex-maps";
import { renderToString } from "react-dom/server";
import React from "react";

const PopupContent = ({ img, name, description }) => {
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
        src={img}
        alt={name}
        style={{ width: "100%", borderRadius: "4px" }}
      />
      <div style={{ marginTop: "10px" }}>
        <h3 style={{ margin: "0 0 5px 0" }}>{name}</h3>
        <p style={{ margin: "0 0 10px 0" }}>{description}</p>
      </div>
    </div>
  );
};

export const PopupWithImages = ({ marker, placemarks }: any) => {
  return (
    <>
      {marker && (
        <Placemark
          key={marker.id}
          geometry={marker.coordinates}
          options={{
            preset: "islands#redMedicalIcon",
            hideIconOnBalloonOpen: false,
          }}
        />
      )}
      {placemarks?.map((x) => {
        return (
          <Placemark
            key={x.id}
            geometry={x.coordinates}
            options={x.options}
            modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
            properties={{
              balloonContent: renderToString(<PopupContent {...x} />),
            }}
          />
        );
      })}
    </>
  );
};
