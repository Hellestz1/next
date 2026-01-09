# React Todo List

แอปพลิเคชันรายการสิ่งที่ต้องทำ (Todo List) สร้างด้วย React + TypeScript + Vite

## ✨ ฟีเจอร์

- ➕ เพิ่มรายการใหม่
- ✅ ทำเครื่องหมายว่าเสร็จแล้ว
- 🗑️ ลบรายการ
- 🔍 กรองรายการ (ทั้งหมด / ยังไม่เสร็จ / เสร็จแล้ว)
- 💾 บันทึกข้อมูลใน LocalStorage (ข้อมูลจะไม่หายเมื่อรีเฟรชหน้า)
- 🎨 UI สวยงาม รองรับ Responsive

## 🚀 วิธีรัน

1. ติดตั้ง dependencies:

```bash
npm install
```

2. รันโปรเจค:

```bash
npm run dev
```

3. เปิดเบราว์เซอร์ไปที่ http://localhost:5173

## 🛠️ เทคโนโลยีที่ใช้

- React 18
- TypeScript 5
- Vite 5
- CSS3 (Custom Properties, Flexbox, Animations)
- LocalStorage API

## 📁 โครงสร้างโปรเจค

```
react-todo-list-demo/
├── src/
│   ├── App.tsx        # Component หลัก
│   ├── App.css        # Styling
│   ├── main.tsx       # Entry point
│   ├── index.css      # Global styles
│   └── vite-env.d.ts  # Vite type declarations
├── index.html
├── package.json
├── tsconfig.json      # TypeScript config
├── tsconfig.node.json # TypeScript config for Node
├── vite.config.ts     # Vite config
└── README.md
```
