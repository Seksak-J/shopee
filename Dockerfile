# เลือกฐานของ Image จาก Node.js
FROM node:21

# กำหนดไดเร็กทอรีที่ทำงาน
WORKDIR /src/app

# คัดลอกไฟล์ package.json และ package-lock.json เพื่อติดตั้ง dependencies
COPY . .


# ติดตั้ง dependencies
RUN npm install

# คัดลอกไฟล์โค้ดของโปรเจ็กต์


# สร้างและแสดงโปรเจ็กต์


# RUN npm run production

# เปิด Port 3000 สำหรับการเชื่อมต่อ
EXPOSE 3000

# เริ่มต้นเซิร์ฟเวอร์ Next.js
CMD ["npm", "run", "production"]