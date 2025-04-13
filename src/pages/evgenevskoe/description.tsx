import {
  Spa,
  MedicalServices,
  Healing,
  WaterDrop,
  Opacity,
  Science,
  BubbleChart,
} from "@mui/icons-material";
import {
  Box,
  Typography,
  Paper,
  Grid,
  Chip,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import React from "react";

export const Description = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        mt: 8,
        p: 0,
        borderRadius: 3,
        background: "transparent",
        position: "relative",
        overflow: "hidden",
        "&:before": {
          content: '""',
          position: "absolute",
          top: 0,
          right: 0,
          width: "180px",
          height: "180px",
          background:
            "url(https://cdn-icons-png.flaticon.com/512/2781/2781812.png) no-repeat",
          backgroundSize: "contain",
          opacity: 0.1,
          transform: "translate(30px, -30px)",
        },
      }}
    >
      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Typography
          variant="h3"
          component="h2"
          sx={{
            fontWeight: 700,
            mb: 4,
            textAlign: "center",
            color: "#000000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
          }}
        >
          Отделение "Евгеньевское"
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                p: 4,
                backgroundColor: "rgba(255, 255, 255, 0.85)",
                borderRadius: 2,
                boxShadow: "0 4px 12px rgba(0, 121, 107, 0.1)",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  color: "#00796b",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Spa color="inherit" /> Уникальное расположение
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: "1.1rem" }}>
                Чистейший таежный воздух, живописные ландшафты с петляющей между
                долин и сопок дорогой, горные ручьи, широкие речные перекаты
                реки Маргаритовки, поляны кораллового шиповника осенью,
                превращающиеся зимой в снежно-голубые дали, создают идеальные
                условия для лечения круглый год.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 2,
                  mt: 3,
                }}
              >
                {[
                  "Чистый горный воздух",
                  "Обилие солнечного света",
                  "Удаленность от городского шума",
                  "Живописные ландшафты",
                  "Экологически чистая территория",
                ].map((item, index) => (
                  <Chip
                    key={index}
                    label={item}
                    sx={{
                      backgroundColor: "#e0f2f1",
                      color: "#00796b",
                      fontWeight: 500,
                      fontSize: "0.95rem",
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6} sx={{ width: "100%" }}>
            <Box
              sx={{
                p: 4,
                backgroundColor: "rgba(255, 255, 255, 0.85)",
                borderRadius: 2,
                boxShadow: "0 4px 12px rgba(0, 121, 107, 0.1)",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  color: "#00796b",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <MedicalServices color="inherit" /> Целебные свойства
                минеральной воды
              </Typography>

              <Typography variant="body1" paragraph sx={{ fontSize: "1.1rem" }}>
                Минеральная вода Евгеньевского источника отличается уникальным
                составом:
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <WaterDrop color="primary" sx={{ mr: 1 }} />
                <Typography variant="body1" sx={{ fontSize: "1.1rem" }}>
                  <strong>Гидрокарбонатно-кальциевая</strong> - нормализует
                  кислотность
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Opacity color="secondary" sx={{ mr: 1 }} />
                <Typography variant="body1" sx={{ fontSize: "1.1rem" }}>
                  <strong>Содержит железо</strong> - улучшает кроветворение
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Science color="action" sx={{ mr: 1 }} />
                <Typography variant="body1" sx={{ fontSize: "1.1rem" }}>
                  <strong>Кремниевая кислота</strong> - укрепляет соединительную
                  ткань
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <BubbleChart color="primary" sx={{ mr: 1 }} />
                <Typography variant="body1" sx={{ fontSize: "1.1rem" }}>
                  <strong>Углекислая</strong> - улучшает усвоение микроэлементов
                </Typography>
              </Box>

              <Typography
                variant="body1"
                paragraph
                sx={{ fontSize: "1.1rem", mt: 3 }}
              >
                Вода добывается из скважины глубиной 250 метров, сохраняя
                природную чистоту и насыщенность минералами.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: 4,
            p: 4,
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            borderRadius: 2,
            boxShadow: "0 4px 12px rgba(0, 121, 107, 0.1)",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              mb: 2,
              color: "#00796b",
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Healing color="inherit" /> Медицинская реабилитация
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: "1.1rem" }}>
            В отделении используется самая современная физиотерапевтическая
            аппаратура. Осуществляются процедуры: орошение желудка, дуаденальный
            дренаж, беззондовый тюбаж, ректальный душ, микроклизмы с лечебными
            составами.
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 3,
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            {[
              "Современные палаты с комфортом",
              "50 мест для пациентов",
              "Комплексный подход к реабилитации",
            ].map((item, index) => (
              <Chip
                key={index}
                label={item}
                sx={{
                  backgroundColor: "#b2dfdb",
                  color: "#00796b",
                  fontWeight: 600,
                  fontSize: "1rem",
                  p: 2,
                  height: "auto",
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};
