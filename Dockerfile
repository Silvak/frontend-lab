# Etapa 1: Build
FROM node:20-alpine AS builder

# Establece directorio de trabajo
WORKDIR /app

# Copia package.json y package-lock.json
COPY package.json package-lock.json* ./

# Instala todas las dependencias (necesarias para el build)
RUN npm install

# Copia el resto del código fuente
COPY . .

# Ejecuta el build de Vite
RUN npm run build

# Etapa 2: Producción
FROM node:20-alpine AS runner

# Establece directorio de trabajo
WORKDIR /app

# Variable de entorno para producción
ENV NODE_ENV=production

# Copia package.json desde el builder
COPY --from=builder /app/package.json ./

# Instala todas las dependencias (vite está en devDependencies pero es necesario para vite preview)
RUN npm install --no-audit --no-fund

# Copia los archivos generados del build
COPY --from=builder /app/dist ./dist

# Copia la configuración de vite si existe (necesaria para vite preview)
COPY --from=builder /app/vite.config.js* ./

# Puerto por defecto que expone vite preview
EXPOSE 3000

# Comando de inicio
CMD ["npm", "run", "start"]
