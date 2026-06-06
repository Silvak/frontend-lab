# Etapa 1: Build
FROM node:20-alpine AS builder

# Instala pnpm
RUN npm install -g pnpm

# Establece directorio de trabajo
WORKDIR /app

# Copia package.json y pnpm-lock.yaml
COPY package.json pnpm-lock.yaml* ./

# Instala todas las dependencias (necesarias para el build)
RUN pnpm install --frozen-lockfile

# Copia el resto del código fuente
COPY . .

# Ejecuta el build de Vite
RUN pnpm run build

# Etapa 2: Producción
FROM node:20-alpine AS runner

# Instala pnpm
RUN npm install -g pnpm

# Establece directorio de trabajo
WORKDIR /app

# Copia package.json y pnpm-lock.yaml desde el builder
COPY --from=builder /app/package.json ./
COPY --from=builder /app/pnpm-lock.yaml* ./

# Instala todas las dependencias incluyendo devDependencies
# Importante: NODE_ENV no debe estar en production antes de instalar
RUN pnpm install --frozen-lockfile

# Variable de entorno para producción (después de instalar dependencias)
ENV NODE_ENV=production

# Copia los archivos generados del build
COPY --from=builder /app/dist ./dist

# Copia la configuración de vite si existe (necesaria para vite preview)
COPY --from=builder /app/vite.config.js* ./

# Puerto por defecto que expone vite preview
EXPOSE 3000

# Comando de inicio
CMD ["pnpm", "run", "start"]
