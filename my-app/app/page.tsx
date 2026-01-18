'use client'

import { useState } from "react";

type transaction = {
  id: number;
  description: string;
  amount: number;
  type: 'income' | 'expense';
  date: string;
}


export default function Home() {
  const [transaction, setTransaction] = useState<transaction[]>([])
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')
  const [type, setType] = useState<'income' | 'expense'>('expense')

  const totalIncome = transaction.filter(t => t.type === 'income').reduce((sum, curr) => sum + curr.amount, 0);
  const totalExpense = transaction.filter(t => t.type === 'expense').reduce((sum, curr) => sum + curr.amount, 0);
  const balance = totalIncome - totalExpense;
  const addTransaction = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!description.trim() || !amount.trim() || isNaN(Number(amount))) {
      alert('กรุณากรอกข้อมูลให้ถูกต้อง');
      return;
    };
    const newTransaction: transaction = {
      id: Date.now(),
      description: description.trim(),
      amount: parseFloat(amount),
      type,
      date: new Date().toLocaleDateString('th-TH'),
    };
    setTransaction([newTransaction, ...transaction]);
    setDescription('');
    setAmount('');
    
  }
  return (

    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-indigo-100 py-8 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden ">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6">
          <h1 className="text-3xl font-bold text-center text-white">
            💰 บันทึกรายรับ - รายจ่าย
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-4 p-6 bg-gray-50">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white rounded-2xl p-4 shadow-md">
              <p className="text-sm text-gray-900">ยอดเงินคงเหลือ</p>
              <p className={`text-2xl font-bold  ${balance >= 0 ? 'text-green-600' : 'text-red-600'} `}>
                ฿{balance.toLocaleString()}
              </p>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow-md">
              <p className="text-sm text-gray-900">รายรับ</p>
              <p className={'text-2xl font-bold text-green-600'}>
                ฿{totalIncome.toLocaleString()}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-md">
              <p className="text-sm text-gray-900">รายจ่าย</p>
              <p className={'text-2xl font-bold  text-red-600'}>
                ฿{totalExpense.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
        <div className=" p-6 border-b">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">เพิ่มรายการใหม่</h2>
          <form onSubmit={addTransaction} className="space-y-4">
            <div className="grid grid-cols-1  md:grid-cols-1 gap-4">
              <div className="grid grid-cols-2 gap-4">
                <label className="block text-sm font-medium text-black">รายละเอียด</label>
                <label className="block text-sm font-medium text-black">จำนวนเงิน(฿)</label>
                <input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full p-2 rounded-2xl border focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="เช่น ซื้อข้าว ซื้อรถ ขายขนม"
                />
                <input
                  type="text"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full p-2 rounded-2xl border focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="0.00"
                />
              </div>
              <div>
                <label className="block text-sm font-xl text-black">ประเภท</label>
                <div className="flex gap-8">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      value='expense'
                      checked={type === 'expense'}
                      onChange={(e) => setType(e.target.value as 'expense')}
                      className="mr-2" />
                    <span className="text-black">รายจ่าย</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      value='income'
                      checked={type === 'income'}
                      onChange={(e) => setType(e.target.value as 'income')}
                      className="mr-2" />
                    <span className="text-black">รายรับ</span>
                  </label>

                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-2xl hover:bg-blue-600 w-full transition-colors mt-3">เพิ่มรายการ</button>
              </div>

            </div>
          </form>
        </div>
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">รายการทั้งหมด ({transaction.length})</h2>
          
            
        </div>

      </div>


    </div>


  );
}
