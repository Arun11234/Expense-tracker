const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const Expense = require("./expense");
mongoose.connect(
  "mongodb+srv://arun:arun1234@cluster0.kyp4i2e.mongodb.net/newDB?retryWrites=true&w=majority",
  {
    useUnifiedTopology: true, //                                                                     1
  }
); //                                                              1    1
app.get("/expenses", async (req, res) => {
  //                                                  1         1
  const expenses = await Expense.find(); //                                                 1              1
  res.send(expenses); //                                                                  1                   1
});
app.post("./expenses", (req, res) => {
  res.send("<h1>hi </h1>");
});
// const express = require("express");
// const mongoose = require("mong oose");
// const app = express();
// const port = 3000;
// const Expense = require("./models/expense");

// mongoose.connect("mongodb://0.0.0.0:27017/Expense", {
//   useUnifiedTopology: true,
// });

// app.use(express.json());

// app.get("/expenses", async (req, res) => {
//   const expenses = await Expense.find();
//   res.send(expenses);
// });

// app.post("/expenses", async (req, res) => {
//   try {
//     const newExpense = new Expense(req.body);
//     const savedExpense = await newExpense.save();
//     res.status(201).json(savedExpense);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
