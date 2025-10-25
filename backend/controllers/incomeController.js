
const Income=require("../models/Income")
const User=require("../models/User")
const xlsx=require('xlsx')

// add income source
exports.addIncome=async(req,res)=>{
    const userId=req.user.id 

    try{
        const {icon,source,amount,date}=req.body

        if(!source || !amount||!date)
        {

            return res.status(400).json({message:"All fields are required"})
        }
        const newIncome=new Income({
            userId,
            icon,
            source,
            amount,
            date:new Date(date)
        });
        await newIncome.save()
        res.status(200).json(newIncome)

    }catch(err){
        res.status(500).json({message:"Server Error"})
    }
}

// get all income source
exports.getAllIncome=async(req,res)=>{
    const userId = req.user.id

    try{
        const income = await Income.find({userId}).sort({date:-1})
        res.json(income)

    }catch(err){
        res.status(500).json({message:"Server Error"})
    }
}

exports.deleteIncome=async(req,res)=>{
    

    try{
        await Income.findByIdAndDelete(req.params.id);
        res.json({message:"Income deleted successfully"})

    }catch(err){
        res.status(500).json({message:"Server Error"})
    }
}


exports.downloadIncomeExcel=async(req,res)=>{
    const userId=req.user.id

    try{
        const income=(await Income.find({userId})).toSorted({date:-1})

        const data=income.map((item)=>({
            Source:item.source,
            Amount:item.amount,
            Date:item.date
        }));

        const wb=writeXLSX.utils.book_new()
        const ws = xlsx.utils.json_to_sheet(data)
        xlsx.utils.book_append_sheet(wb,ws,"Income")
        xlsx.writeFile(wb,'income_details.xlsx')
        res.download('income_details.xlsx')

    }catch(error){
        res.status(500).json({message:"Server Error"})
    }
}




exports.downloadIncomeExcel = async (req, res) => {
  const userId = req.user.id;

  try {
    const income = await Income.find({ userId }).sort({ date: -1 });

    const data = income.map((item) => ({
      Source: item.source,
      Amount: item.amount,
      Date: item.date.toISOString().split("T")[0]
    }));

    const wb = xlsx.utils.book_new();
    const ws = xlsx.utils.json_to_sheet(data);
    xlsx.utils.book_append_sheet(wb, ws, "Income");

    const fileName = "income_details.xlsx";
    xlsx.writeFile(wb, fileName);

    res.download(fileName);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
