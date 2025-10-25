# 🌱 Eco_Air

**Eco_Air** es un sistema basado en **Arduino** para monitorear la **calidad del aire en tiempo real**.  
Los sensores recopilan datos ambientales (CO₂, partículas, temperatura, humedad, etc.) y los envían a una **base de datos central**.  
La información se visualiza en un **dashboard web interactivo** desarrollado con **React + Vite + Node.js**, permitiendo analizar el entorno de forma sencilla y precisa.

---

## ⚙️ Prerrequisitos frontend

Asegúrate de tener instaladas las siguientes herramientas en tu sistema:

- **Node.js** `>= 14.0.0`
- **Yarn** `>= 1.5.1`
- **NPM** `>= 5.5.1`

Puedes verificar tus versiones ejecutando:

```bash
node -v
npm -v
yarn -v
```

> 💡 **Recomendación:** se recomienda usar **Yarn** como gestor de paquetes para una instalación más estable y rápida.

---

## 🚀 Instalación y ejecución del frontend

1. Clona este repositorio o descarga los archivos del proyecto:

   ```bash
   git clone https://github.com/tuusuario/eco_air.git
   cd eco_air
   ```

2. Instala todas las dependencias necesarias:

   ```bash
   yarn install
   ```

   > ⚠️ **Advertencia:**  
   > Si encuentras errores relacionados con la versión de Node.js, usa el siguiente comando:
   >
   > ```bash
   > yarn install --ignore-engines
   > ```

3. Inicia el servidor de desarrollo:

   ```bash
   yarn dev
   ```

4. Abre tu navegador en:  
   👉 [http://localhost:5173](http://localhost:5173)

---

## 📊 Componentes del Proyecto

- **Arduino** – Captura los datos de sensores de calidad del aire.  
- **Backend (Supabase o AWS)** – Recibe y almacena los datos en la base de datos.  
- **Frontend (React + Vite)** – Dashboard para visualizar los datos en tiempo real.  
- **Base de datos** – Guarda los registros de medición (PostgreSQL o AWS).  

---

## 🧩 Estructura del proyecto

```bash
eco_airsense/
├── arduino/         # Código del microcontrolador
├── frontend/        # Dashboard React + Vite
├── .env.example     # Variables de entorno (sin credenciales reales)
└── README.md
```

---

## 🛠️ Soporte frontend

Si tienes problemas durante la instalación o ejecución:

- Verifica la versión de Node.js y Yarn.
- Elimina `node_modules` y reinstala con `yarn install`.
- Consulta la documentación o abre un issue en el repositorio.

> 💬 **TIP:** Mantén tu entorno actualizado y usa versiones LTS de Node.js para evitar incompatibilidades.

---

## 🧠 Autor

**Jonathan Ricardo Serna Galina (Eco)**  
Desarrollador e ingeniero en software apasionado por la tecnología, IoT y el impacto ambiental.  

📧 Contacto: [jonathan.rsg.serna@gmail.com]  
🌐 Blog: [ecojrsg.dev](https://ecojrsg.dev)

---

## 🪴 Licencia

El proyecto **Eco_Air** utiliza la plantilla **DashSpace - Admin Dashboard Template**, licenciada a través de **Envato Elements** bajo los siguientes términos:

> **LICENSE CERTIFICATE: Envato Elements Item**  
> Item Title: *DashSpace - Admin Dashboard Template*  
> Item URL: [https://elements.envato.com/dashspace-admin-dashboard-template-J2GUKDN](https://elements.envato.com/dashspace-admin-dashboard-template-J2GUKDN)  
> Item ID: J2GUKDN  
> Author: freekytheme  
> Licensee: Antonio Eduardo Botello Juárez  
> Registered Project Name: *Eco*  
> License Date: October 23rd, 2025  
> Item License Code: QGU28V4739  
>
> Esta licencia otorga derechos de uso **no exclusivo, comercial, mundial y revocable** para un **solo proyecto registrado**.  
> La validez de la licencia depende de que el producto final haya sido completado mientras la suscripción de Envato Elements esté activa.  
> Una vez creado el producto, la licencia se mantiene vigente durante la vida útil del mismo, incluso si la suscripción termina.  
>
> Para más información o consultas, contactar a [Envato Support](https://help.elements.envato.com/hc/en-us/requests/new).

---

El resto del código y componentes propios de **Eco_Air** se distribuyen bajo la licencia **MIT**, salvo los elementos sujetos a la licencia de Envato mencionada arriba.
