import React from "react";
interface LogoProps {
  width?: string;
  height?: string;
}

export const Logo = ({ width = "256", height = "256" }: LogoProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 100 100"
    className="fill-current"
  >
    <path d="M6.60 64.45L6.60 64.45Q6.88 62.76 7.25 61.05Q7.63 59.33 8.17 57.19Q8.71 55.05 9.56 52.30Q10.40 49.55 11.58 45.84L11.58 45.84Q10.87 45.89 10.07 45.98Q9.27 46.08 8.52 46.17L8.52 46.17Q8.52 44.76 9.63 44.01Q10.73 43.26 12.56 42.88L12.56 42.88Q12.80 42.13 13.01 41.52Q13.22 40.91 13.46 40.15Q13.69 39.40 14.09 38.32Q14.49 37.24 15.06 35.55Q15.62 33.86 16.47 31.36L16.47 31.36Q16.61 31.04 16.84 30.31Q17.08 29.58 17.08 28.92L17.08 28.92Q17.08 28.54 16.96 28.40Q16.84 28.26 16.47 28.26L16.47 28.26Q15.43 28.26 14.44 29.13Q13.46 30.00 12.66 31.34Q11.86 32.68 11.39 34.11Q10.92 35.55 10.92 36.63L10.92 36.63Q10.92 37.05 10.99 37.50Q11.06 37.94 11.30 38.60L11.30 38.60Q9.46 38.60 8.66 37.76Q7.86 36.91 7.86 35.64L7.86 35.64Q7.86 34.04 8.83 32.45Q9.79 30.85 11.30 29.51Q12.80 28.17 14.49 27.35Q16.18 26.52 17.59 26.52L17.59 26.52Q19.00 26.52 19.54 27.30Q20.08 28.07 20.08 29.01L20.08 29.01Q20.08 29.53 19.97 30.05Q19.85 30.57 19.71 31.04L19.71 31.04L16.18 42.50Q16.79 42.46 17.41 42.46Q18.02 42.46 18.67 42.46L18.67 42.46Q20.93 42.46 22.95 42.55Q24.97 42.64 26.81 42.83L26.81 42.83Q27.89 39.21 28.76 36.56Q29.63 33.90 30.31 32.05Q30.99 30.19 31.46 29.06L31.46 29.06Q31.65 28.69 32.00 28.07Q32.35 27.46 32.99 26.97Q33.62 26.48 34.56 26.48L34.56 26.48Q33.95 28.17 33.08 30.87Q32.21 33.57 31.34 36.75Q30.47 39.92 29.63 43.07L29.63 43.07Q30.38 43.07 31.48 43.14Q32.59 43.21 33.53 43.21L33.53 43.21Q32.21 44.57 31.13 44.88Q30.05 45.18 29.11 45.18L29.11 45.18Q28.64 47.20 28.24 49.06Q27.84 50.92 27.56 52.51L27.56 52.51Q26.90 55.85 26.59 58.27Q26.29 60.69 26.29 62.24L26.29 62.24Q26.29 62.90 26.36 63.44Q26.43 63.98 26.48 64.45L26.48 64.45Q24.27 64.22 23.47 63.32Q22.67 62.43 22.67 60.32L22.67 60.32Q22.67 59.19 22.86 57.68Q23.05 56.18 23.52 54.30L23.52 54.30Q23.89 52.66 24.55 50.38Q25.21 48.10 26.10 45.23L26.10 45.23Q23.23 45.23 21.35 45.28Q19.47 45.32 18.06 45.37Q16.65 45.42 15.24 45.56L15.24 45.56Q14.91 46.59 14.51 47.89Q14.12 49.18 13.55 50.96Q12.99 52.75 12.21 55.26Q11.44 57.78 10.31 61.30L10.31 61.30Q9.84 63.00 8.64 63.72Q7.44 64.45 6.60 64.45ZM36.30 60.83L36.30 60.83Q35.36 60.83 34.89 60.34Q34.42 59.85 34.42 59.24L34.42 59.24Q34.42 58.72 34.89 58.18Q35.36 57.64 36.04 57.29Q36.72 56.93 37.33 56.93L37.33 56.93Q37.85 56.93 38.30 57.21Q38.74 57.50 38.74 58.25L38.74 58.25Q38.74 58.67 38.44 59.28Q38.13 59.89 37.59 60.36Q37.05 60.83 36.30 60.83ZM48.10 61.77L48.10 61.77Q45.93 61.77 45.06 60.32Q44.20 58.86 44.20 56.84L44.20 56.84Q44.20 54.54 45.04 51.43Q45.89 48.33 47.27 44.92Q48.66 41.52 50.33 38.25Q52.00 34.98 53.67 32.33Q55.33 29.67 56.77 28.10Q58.20 26.52 59.05 26.52L59.05 26.52Q59.61 26.52 60.01 27.13Q60.41 27.75 60.65 28.62Q60.88 29.48 60.88 30.19L60.88 30.19Q60.88 31.46 60.25 33.50Q59.61 35.55 58.46 38.02Q57.31 40.48 55.73 43.04Q54.16 45.61 52.28 47.93Q50.40 50.26 48.24 51.95L48.24 51.95Q48.05 53.13 47.88 54.30Q47.72 55.48 47.72 56.46L47.72 56.46Q47.72 58.20 48.26 59.02Q48.80 59.85 49.74 59.85L49.74 59.85Q50.96 59.85 52.21 58.72Q53.45 57.59 54.58 55.88Q55.71 54.16 56.56 52.33L56.56 52.33L57.54 52.89Q55.57 56.98 53.17 59.38Q50.78 61.77 48.10 61.77ZM48.94 49.46L48.94 49.46Q50.59 47.77 52.04 45.68Q53.50 43.58 54.75 41.42Q55.99 39.26 56.93 37.22Q57.87 35.17 58.39 33.55Q58.91 31.93 58.95 30.99L58.95 30.99Q58.95 30.80 58.91 30.73Q58.86 30.66 58.86 30.66L58.86 30.66Q58.48 30.66 57.61 31.76Q56.74 32.87 55.59 34.75Q54.44 36.63 53.22 39.07Q52.00 41.52 50.87 44.20Q49.74 46.87 48.94 49.46ZM58.62 61.87L58.62 61.87Q56.56 61.87 55.76 60.53Q54.96 59.19 54.96 57.50L54.96 57.50Q54.96 55.99 55.43 54.44Q55.90 52.89 56.70 51.53Q57.50 50.16 58.48 49.32Q59.47 48.47 60.50 48.47L60.50 48.47Q60.79 48.47 61.19 48.59Q61.59 48.71 61.77 48.90L61.77 48.90Q61.26 49.46 60.67 50.49Q60.08 51.53 59.59 52.73Q59.09 53.92 58.79 55.12Q58.48 56.32 58.48 57.31L58.48 57.31Q58.48 58.39 58.86 59.00Q59.24 59.61 60.08 59.61L60.08 59.61Q61.02 59.61 62.31 58.60Q63.61 57.59 64.78 56.13L64.78 56.13Q63.32 54.86 62.64 53.20Q61.96 51.53 61.96 49.41L61.96 49.41Q61.96 48.24 62.48 46.92Q63.00 45.61 64.08 44.71Q65.16 43.82 66.90 43.82L66.90 43.82Q68.87 43.82 69.65 44.92Q70.42 46.03 70.42 47.58L70.42 47.58Q70.42 49.32 69.50 51.50Q68.59 53.69 67.32 55.66L67.32 55.66Q67.98 56.04 68.78 56.04L68.78 56.04Q69.48 56.04 70.47 55.71Q71.46 55.38 72.37 54.61Q73.29 53.83 73.85 52.56L73.85 52.56L74.60 53.13Q73.62 55.43 71.90 56.49Q70.19 57.54 68.59 57.54L68.59 57.54Q67.98 57.54 67.37 57.43Q66.76 57.31 66.24 57.07L66.24 57.07Q64.64 59.05 62.64 60.46Q60.65 61.87 58.62 61.87ZM65.86 54.72L65.86 54.72Q67.04 53.08 67.81 51.18Q68.59 49.27 68.59 47.67L68.59 47.67Q68.59 46.50 68.24 45.96Q67.88 45.42 67.27 45.42L67.27 45.42Q66.33 45.42 65.39 46.71Q64.45 48.00 64.45 49.98L64.45 49.98Q64.45 51.10 64.80 52.49Q65.16 53.88 65.86 54.72ZM75.03 73.52L75.03 73.52Q73.90 73.52 72.94 72.84Q71.97 72.16 71.97 70.61L71.97 70.61Q71.97 69.15 72.84 67.95Q73.71 66.76 75.12 65.75Q76.53 64.73 78.18 63.89Q79.82 63.04 81.33 62.29L81.33 62.29Q81.89 60.88 82.41 59.28Q82.92 57.68 83.39 55.76L83.39 55.76Q81.70 58.01 79.84 59.49Q77.99 60.97 76.06 60.97L76.06 60.97Q74.28 60.97 73.22 59.68Q72.16 58.39 72.16 56.27L72.16 56.27Q72.16 53.78 73.41 51.60Q74.65 49.41 76.60 47.70Q78.55 45.98 80.78 45.02Q83.02 44.05 84.99 44.05L84.99 44.05Q86.45 44.05 87.15 44.57Q87.86 45.09 87.86 45.75L87.86 45.75Q87.86 46.26 87.55 46.57Q87.25 46.87 87.15 46.92L87.15 46.92Q86.78 46.45 86.28 46.29Q85.79 46.12 85.13 46.12L85.13 46.12Q83.30 46.12 81.61 47.16Q79.92 48.19 78.60 49.84Q77.28 51.48 76.53 53.24Q75.78 55.01 75.78 56.46L75.78 56.46Q75.78 57.45 76.20 57.99Q76.63 58.53 77.28 58.53L77.28 58.53Q78.65 58.53 80.53 56.77Q82.41 55.01 84.15 52.51L84.15 52.51Q84.29 52.04 84.36 51.67Q84.43 51.29 84.52 50.87L84.52 50.87Q84.90 49.37 85.51 48.50Q86.12 47.63 87.29 47.63L87.29 47.63Q87.53 47.63 87.86 47.65Q88.19 47.67 88.56 47.77L88.56 47.77Q88.56 48.61 88.09 50.56Q87.62 52.51 86.82 55.10Q86.03 57.68 84.99 60.41L84.99 60.41Q86.50 59.75 87.98 58.62Q89.46 57.50 90.73 55.95Q91.99 54.39 92.65 52.51L92.65 52.51L93.40 53.22Q92.70 55.38 91.13 57.14Q89.55 58.91 87.74 60.20Q85.93 61.49 84.43 62.20L84.43 62.20Q83.11 65.30 81.65 67.88Q80.20 70.47 78.55 72.00Q76.91 73.52 75.03 73.52ZM74.84 71.60L74.84 71.60Q75.73 71.60 77.26 69.90Q78.79 68.21 80.57 64.17L80.57 64.17Q78.79 65.06 77.28 65.98Q75.78 66.90 74.84 67.93Q73.90 68.96 73.90 70.14L73.90 70.14Q73.90 70.80 74.18 71.20Q74.46 71.60 74.84 71.60Z"></path>
  </svg>
);
