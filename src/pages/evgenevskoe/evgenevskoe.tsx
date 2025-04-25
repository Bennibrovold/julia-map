import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { styled } from "styled-components";
import { PopupWithImages } from "../../popup-with-buttons";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  Container as MuiContainer,
  Paper,
  Box,
  Divider,
  Chip,
} from "@mui/material";
import {
  LocalHospital,
  MedicalServices,
  Spa,
  Healing,
  FitnessCenter,
  ElectricBolt,
  LightMode,
  Waves,
  Air,
  MedicalInformation,
  WaterDrop,
  Vaccines,
  SelfImprovement,
} from "@mui/icons-material";
import React from "react";
import { Description } from "./description";
import { placemarks } from "./placemark.static";

// Фикс для иконок маркеров
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

// Иконки для каждой услуги
const SERVICE_ICONS = {
  Электролечение: <ElectricBolt fontSize="small" />,
  Светолечение: <LightMode fontSize="small" />,
  Ультразвук: <Waves fontSize="small" />,
  Лазеротерапия: <MedicalInformation fontSize="small" />,
  Ингаляции: <Air fontSize="small" />,
  Водолечение: <WaterDrop fontSize="small" />,
  "Медицинский массаж": <SelfImprovement fontSize="small" />,
  "Ультразвуковая диагностика": <MedicalServices fontSize="small" />,
  "Кислородный коктейль": <Healing fontSize="small" />,
  "Лечебная физкультура": <FitnessCenter fontSize="small" />,
  "Суховоздушная ванна": <Spa fontSize="small" />,
};

const SERVICES = [
  {
    title: "Физиолечение",
    icon: <MedicalServices sx={{ fontSize: 30 }} />,
    services: [
      "Электролечение",
      "Светолечение",
      "Ультразвук",
      "Лазеротерапия",
      "Ингаляции",
      "Водолечение (ванны с лечебными составами из Сибири)",
    ],
    color: "linear-gradient(135deg, #1e88e5 0%, #0d47a1 100%)",
  },
  {
    title: "Другие услуги",
    icon: <LocalHospital sx={{ fontSize: 30 }} />,
    services: [
      "Медицинский массаж",
      "Ультразвуковая диагностика",
      "Кислородный коктейль",
      "Кабинет лечебной физкультуры",
      "Суховоздушная ванна в гипертермальном помещении (сауна)",
    ],
    color: "linear-gradient(135deg, #4caf50 0%, #2e7d32 100%)",
  },
];

function Evgenevskoe() {
  const defaultState = {
    center: [43.54579609151811, 134.65430745727997],
    zoom: 13,
    controls: ["zoomControl", "fullscreenControl"],
  };

  return (
    <Container>
      <Helper>
        <Wrapper>
          <MuiContainer maxWidth="lg" sx={{ py: 4 }}>
            {/* Заголовок */}
            <Box sx={{ textAlign: "center", mb: 6 }}>
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  fontWeight: 800,
                  background:
                    "linear-gradient(45deg, #6a11cb 30%, #2575fc 90%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  mb: 2,
                }}
              >
                Краевая больница «Евгеньевская»
              </Typography>
              <Typography variant="h5" color="text.secondary">
                692456, Приморский край, Ольгинский район, село Щербаковка,
                улица Таежная, влд. 4.
              </Typography>
            </Box>
            {/* Карта */}
            <MapWrapper>
              <YMaps query={{ apikey: "d24a41ba-dfc0-435a-acd9-37eb781c1721" }}>
                <Map
                  defaultState={defaultState}
                  modules={["control.ZoomControl", "control.FullscreenControl"]}
                >
                  <PopupWithImages placemarks={placemarks} />
                </Map>
              </YMaps>
            </MapWrapper>
            {/* Описание больницы */}
            <Description />
            {/* Услуги */}
            <Box sx={{ mt: 8 }}>
              <Typography
                variant="h3"
                component="h2"
                sx={{
                  fontWeight: 700,
                  mb: 4,
                  textAlign: "center",
                  color: "#333",
                }}
              >
                Услуги больницы
              </Typography>

              <Grid container spacing={4}>
                {SERVICES.map((category, index) => (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={6}
                    key={index}
                    sx={{ flexGrow: 1 }}
                  >
                    <Card
                      sx={{
                        width: "100%",
                        flexGrow: 1,
                        height: "100%",
                        borderRadius: 3,
                        boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "translateY(-5px)",
                          boxShadow: "0 15px 30px rgba(0,0,0,0.15)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          height: 8,
                          background: category.color,
                          borderTopLeftRadius: 12,
                          borderTopRightRadius: 12,
                        }}
                      />
                      <CardContent sx={{ p: 3 }}>
                        <Box
                          sx={{ display: "flex", alignItems: "center", mb: 2 }}
                        >
                          <Box
                            sx={{
                              width: 50,
                              height: 50,
                              borderRadius: "50%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              background: category.color,
                              mr: 2,
                              color: "#fff",
                            }}
                          >
                            {category.icon}
                          </Box>
                          <Typography
                            variant="h5"
                            component="h3"
                            sx={{ fontWeight: 600 }}
                          >
                            {category.title}
                          </Typography>
                        </Box>
                        <Divider sx={{ my: 2 }} />
                        <List disablePadding>
                          {category.services.map((service, i) => (
                            <ListItem
                              key={i}
                              sx={{
                                py: 1,
                                px: 0,
                                "&:hover": {
                                  backgroundColor: "rgba(0,0,0,0.02)",
                                },
                              }}
                            >
                              <ListItemText
                                primary={
                                  <Box
                                    sx={{
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                  >
                                    <Box
                                      sx={{ mr: 1.5, color: "primary.main" }}
                                    >
                                      {SERVICE_ICONS[
                                        service.split(" (")[0]
                                      ] || <MedicalServices fontSize="small" />}
                                    </Box>
                                    {service}
                                  </Box>
                                }
                              />
                            </ListItem>
                          ))}
                        </List>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
            {/* Как записаться? */}
            <Paper
              elevation={0}
              sx={{
                mt: 8,
                p: 6,
                borderRadius: 3,
                background: "transparent",
                position: "relative",
                overflow: "hidden",
                "&:before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "120px",
                  height: "120px",
                  background:
                    "url(https://cdn-icons-png.flaticon.com/512/206/206853.png) no-repeat",
                  backgroundSize: "contain",
                  opacity: 0.1,
                  transform: "translate(30px, -30px)",
                },
              }}
            >
              <Typography
                variant="h3"
                component="h2"
                sx={{
                  fontWeight: 700,
                  mb: 4,
                  textAlign: "center",
                  color: "#000000",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                Как записаться в больницу?
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 4,
                  flexWrap: "nowrap",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {[
                  {
                    text: "Позвоните в регистратуру",
                    icon: "📞",
                    details: "Телефон: 8 (42376) 9-44-78",
                  },
                  {
                    text: "Подготовьте документы",
                    icon: "📋",
                    details: "(паспорт, полис, направление)",
                  },
                  {
                    text: "Приезжайте на приём",
                    icon: "🏥",
                    details: "В назначенное время",
                  },
                ].map((step, index) => (
                  <Box
                    key={index}
                    sx={{
                      p: 4,
                      borderRadius: 2,
                      backgroundColor: "white",
                      textAlign: "center",
                      boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: "0 15px 30px rgba(0,0,0,0.15)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: "50%",
                        backgroundColor: "#e3f2fd",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "24px",
                        mb: 2,
                        mx: "auto",
                      }}
                    >
                      {step.icon}
                    </Box>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 600,
                        mb: 1.5,
                        color: "#000000",
                      }}
                    >
                      {step.text}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "text.secondary",
                        fontSize: "1.1rem",
                      }}
                    >
                      {step.details}
                    </Typography>
                  </Box>
                ))}
              </Box>

              <Box
                sx={{
                  mt: 4,
                  textAlign: "center",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    display: "inline-block",
                    backgroundColor: "#1976d2",
                    color: "white",
                    px: 3,
                    py: 1.5,
                    borderRadius: 2,
                    fontWeight: 500,
                  }}
                >
                  Телефон регистратуры: 8 (42376) 9-44-78
                </Typography>
              </Box>
            </Paper>
            {/* Лечение заболеваний */}
            <Paper
              elevation={0}
              sx={{
                mt: 8,
                p: 6,
                borderRadius: 3,
                background: "transparent",
                position: "relative",
                overflow: "hidden",
                "&:before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "150px",
                  height: "150px",
                  background:
                    "url(https://cdn-icons-png.flaticon.com/512/2965/2965878.png) no-repeat",
                  backgroundSize: "contain",
                  opacity: 0.1,
                  transform: "translate(30px, -30px)",
                },
              }}
            >
              <Typography
                variant="h3"
                component="h2"
                sx={{
                  fontWeight: 700,
                  mb: 4,
                  textAlign: "center",
                  color: "#000000",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                Лечение заболеваний
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  gap: 4,
                  alignItems: "center",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <Box
                  sx={{
                    flex: 1,
                    p: 4,
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    borderRadius: 2,
                    boxShadow: "0 4px 12px rgba(21, 101, 192, 0.1)",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 600,
                      mb: 2,
                      color: "#000000",
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <MedicalServices sx={{ color: "#ff0707" }} /> Лечебные
                    факторы
                  </Typography>
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{ fontSize: "1.1rem" }}
                  >
                    Основным лечебным фактором является природная углекислая
                    гидрокарбонатная кальциевая вода, содержащая железо и
                    кремниевую кислоту. Применяется для питьевого лечения:
                  </Typography>
                  <List sx={{ listStyleType: "disc", pl: 4 }}>
                    {[
                      "Хронических гастритов с нормальной и повышенной секреторной функцией желудка",
                      "Хронических заболеваний кишечника, печени, желчевыводящих путей",
                      "Мочекаменной болезни и заболеваний мочевыводящих путей",
                      "Хронических панкреатитов",
                      "Язвенной болезни желудка и двенадцатиперстной кишки",
                      "Заболеваний, связанных с нарушением обмена веществ",
                    ].map((item, index) => (
                      <ListItem
                        key={index}
                        sx={{
                          display: "list-item",
                          p: 0,
                          mb: 1,
                          "&::marker": { color: "#1976d2" },
                        }}
                      >
                        <Typography variant="body1" sx={{ fontSize: "1.1rem" }}>
                          {item}
                        </Typography>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Box>
            </Paper>
          </MuiContainer>
        </Wrapper>
      </Helper>
    </Container>
  );
}

export default Evgenevskoe;

// Стили
const Wrapper = styled.div`
  .ymaps-2-1-79-map {
    height: 800px;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
`;

const MapWrapper = styled.div`
  width: 100%;
  height: 800px;
  margin: 40px 0;
  display: flex;
  & > div {
    width: 100%;
    display: flex;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #f9fafc;
`;

const Helper = styled.div`
  width: 100%;
  max-width: 1280px;
`;
