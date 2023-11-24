# telept-backend
1. สร้างไฟล์ .env ก่อนใช้ด้วยคับ(เพื่อ access DB)
    สิ่งที่ต้องใส่ในไฟล์อยู่ใน trello
2. ถ้าใช้กับ android emulator ในเครื่องต้องใช้path 10.0.2.2 แทน localhost

command:
    - cd telept-backend
    - nodemon ./src/index.ts 
        //เปิดใช้งาน restAPI Backend port:5000
    - npx prisma studio 
        //ต่อ Database port:5555
    - prisma db pull
    - prisma generate