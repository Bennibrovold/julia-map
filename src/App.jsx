import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { styled } from "styled-components";
import { PopupWithImages } from "./popup-with-buttons";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
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

// Фикс для иконок маркеров
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

// Иконки для каждой услуги
const serviceIcons = {
  Электролечение: <ElectricBolt fontSize="small" />,
  Светолечение: <LightMode fontSize="small" />,
  Ультразвук: <Waves fontSize="small" />,
  Лазеротерапия: <MedicalInformation fontSize="small" />,
  Ингаляции: <Air fontSize="small" />,
  Водолечение: <WaterDrop fontSize="small" />,
  Грязелечение: <Spa fontSize="small" />,
  "Парафиновые аппликации": <Vaccines fontSize="small" />,
  "Медицинский массаж": <SelfImprovement fontSize="small" />,
  "Кислородный коктейль": <Healing fontSize="small" />,
  Баротерапия: <LocalHospital fontSize="small" />,
  "Лечебная физкультура": <FitnessCenter fontSize="small" />,
  Фитотерапия: <MedicalServices fontSize="small" />,
};

const servicesCategories = [
  {
    title: "Физиолечение",
    icon: <MedicalServices sx={{ fontSize: 30 }} />,
    services: [
      "Электролечение",
      "Светолечение",
      "Ультразвук",
      "Лазеротерапия",
      "Ингаляции",
      "Водолечение (душ Шарко, подводный душ-массаж, циркулярный душ, ванны)",
    ],
    color: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
  },
  {
    title: "Грязелечение",
    icon: <Spa sx={{ fontSize: 30 }} />,
    services: ["Аппликации грязи", "Гальваногрязь", "Парафиновые аппликации"],
    color: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
  },
  {
    title: "Массаж и терапия",
    icon: <Healing sx={{ fontSize: 30 }} />,
    services: ["Медицинский массаж", "Кислородный коктейль"],
    color: "linear-gradient(135deg, #f12711 0%, #f5af19 100%)",
  },
  {
    title: "Специальные процедуры",
    icon: <LocalHospital sx={{ fontSize: 30 }} />,
    services: [
      "Баротерапия (гипербарическая оксигенация)",
      "Лечебная физкультура",
      "Фитотерапия",
    ],
    color: "linear-gradient(135deg, #8e2de2 0%, #4a00e0 100%)",
  },
];

function App() {
  const defaultState = {
    center: [44.182364, 132.498276],
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
                Медицинский туризм в Светлояровке
              </Typography>
              <Typography variant="h5" color="text.secondary">
                Современные методы лечения и восстановления
              </Typography>
            </Box>

            {/* Карта */}
            <MapWrapper>
              <YMaps query={{ apikey: "d24a41ba-dfc0-435a-acd9-37eb781c1721" }}>
                <Map
                  defaultState={defaultState}
                  modules={["control.ZoomControl", "control.FullscreenControl"]}
                >
                  <PopupWithImages />
                </Map>
              </YMaps>
            </MapWrapper>

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
                Наши медицинские услуги
              </Typography>

              <Grid container spacing={4}>
                {servicesCategories.map((category, index) => (
                  <Grid item xs={12} sm={6} md={6} key={index}>
                    <Card
                      sx={{
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
                                      {serviceIcons[service.split(" (")[0]] || (
                                        <MedicalServices fontSize="small" />
                                      )}
                                    </Box>
                                    {service}
                                  </Box>
                                }
                              />
                            </ListItem>
                          ))}
                        </List>
                      </CardContent>
                      <Box sx={{ p: 2, textAlign: "center" }}>
                        <Button
                          variant="contained"
                          size="medium"
                          sx={{
                            fontWeight: 600,
                            borderRadius: 2,
                            px: 4,
                            background: category.color,
                            "&:hover": {
                              opacity: 0.9,
                            },
                          }}
                        >
                          Записаться
                        </Button>
                      </Box>
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
                p: 4,
                borderRadius: 3,
                background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
              }}
            >
              <Typography
                variant="h3"
                component="h2"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  textAlign: "center",
                }}
              >
                Как записаться?
              </Typography>
              <Grid container spacing={3}>
                {[
                  "Позвоните в санаторий",
                  "Подготовьте документы (паспорт, полис)",
                  "Приезжайте на лечение",
                ].map((step, index) => (
                  <Grid item xs={12} md={4} key={index}>
                    <Box
                      sx={{
                        p: 3,
                        height: "100%",
                        borderRadius: 2,
                        backgroundColor: "white",
                        boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
                        textAlign: "center",
                      }}
                    >
                      <Chip
                        label={index + 1}
                        color="primary"
                        sx={{
                          mb: 2,
                          width: 40,
                          height: 40,
                          fontSize: "1.2rem",
                          fontWeight: 700,
                        }}
                      />
                      <Typography variant="h6" sx={{ fontWeight: 500 }}>
                        {step}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
              <Box sx={{ textAlign: "center", mt: 4 }}>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<LocalHospital />}
                  sx={{
                    fontWeight: 700,
                    px: 5,
                    py: 1.5,
                    fontSize: "1.1rem",
                    borderRadius: 2,
                    background:
                      "linear-gradient(45deg, #6a11cb 30%, #2575fc 90%)",
                  }}
                >
                  Контакты для записи
                </Button>
              </Box>
            </Paper>
          </MuiContainer>
        </Wrapper>
      </Helper>
    </Container>
  );
}

export default App;

// Стили
const Wrapper = styled.div`
  .ymaps-2-1-79-map {
    height: 800px;
    border-radius: 16px;
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
