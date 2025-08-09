const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // يسمح للخادم بفهم البيانات بتنسيق JSON
app.use(cors()); // يسمح بطلبات من الواجهة الأمامية

// اتصال بقاعدة بيانات MongoDB
const mongoURI = 'mongodb+srv://<my-user>:<v2S8l9ebvsGnuTfU>@ecom.dgl20c5.mongodb.net/?retryWrites=true&w=majority&appName=Ecom'; // رابط قاعدة البيانات.
// ملاحظة: تأكد من أن MongoDB يعمل على جهازك.
mongoose.connect(mongoURI)
    .then(() => console.log('Connected to MongoDB successfully!'))
    .catch(err => console.error('Could not connect to MongoDB:', err));

// تعريف مسار بسيط لاختبار الخادم
app.get('/', (req, res) => {
    res.send('Welcome to the E-commerce Backend!');
});

// تشغيل الخادم
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});