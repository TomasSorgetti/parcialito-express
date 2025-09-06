# Usar una imagen base de Node
FROM node:18

# Establecer directorio de trabajo
WORKDIR /usr/src/app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Buildear el front
# RUN npm run build

# Copiar el resto del código
COPY . .

# Exponer el puerto
EXPOSE 8080

# Comando para desarrollo con --watch
CMD ["npm", "run", "dev"]