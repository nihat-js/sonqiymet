"use client";
import { useState } from "react";
import { Search } from "lucide-react";

export default function Navbar3() {
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("");
  const [ram, setRam] = useState("");
  const [storage, setStorage] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");

  return (
    <div className="bg-white p-4 shadow-md">
      <div className="container mx-auto">
        <div className="w-4/5 m-auto my-5">
          <div className="relative">
            <input
              type="text"
              placeholder="iPhone 12 256GB Zavod ..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full p-3 pl-12 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-obsidian text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">
              Axtar
            </button>
          </div>
        </div>
        <div className="flex flex-wrap  justify-between items-center gap-4">
          <Select
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            options={["Apple", "Samsung", "Xiaomi", "Huawei"]}
            label="Marka"
          />
          <Select
            value={ram}
            onChange={(e) => setRam(e.target.value)}
            options={["4 GB", "6 GB", "8 GB", "12 GB"]}
            label="RAM"
          />
          <Select
            value={storage}
            onChange={(e) => setStorage(e.target.value)}
            options={["64 GB", "128 GB", "256 GB", "512 GB"]}
            label="Yaddaş"
          />
          <Select
            value={color}
            onChange={(e) => setColor(e.target.value)}
            options={["Qara", "Ağ", "Mavi", "Qırmızı"]}
            label="Rəng"
          />
          <Select
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
            options={["Yeni", "Əla", "Yaxşı", "Orta"]}
            label="Vəziyyət"
          />
        </div>
      </div>
    </div>
  );
}

function Select({
  value,
  onChange,
  options,
  label,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  label: string;
}) {
  return (
    <div className="flex items-center">
      <label className="mr-2 text-sm font-medium text-gray-700">{label}:</label>
      <select
        value={value}
        onChange={onChange}
        className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Seçin</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}