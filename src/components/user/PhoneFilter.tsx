"use client";

import { useState } from "react";
import styled from "styled-components";

// Styled components
const FilterContainer = styled.div`
  width: 100%;
  max-width: 300px;
  background: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  padding: 24px;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 16px;
  color: #333;
`;

const CheckboxContainer = styled.div`
  margin-bottom: 24px;
`;

const CheckboxLabel = styled.label`
  margin-left: 8px;
  font-size: 1rem;
  color: #555;
`;

const RadioContainer = styled.div`
  margin-bottom: 24px;
`;

const RadioLabel = styled.label`
  margin-left: 8px;
  font-size: 1rem;
  color: #555;
`;

const PriceInput = styled.input`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 6px;
  width: 100%;
  margin-right: 8px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const ApplyButton = styled.button`
  width: 100%;
  background-color: #007bff;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #0056b3;
    transform: scale(1.02);
  }
`;

const brands = ['Apple', 'Samsung', 'Xiaomi', 'Huawei', 'OnePlus'];
const storageOptions = ['4 GB', '8 GB', '16 GB', '32 GB', '64 GB', '128 GB', '256 GB', '512 GB'];
const priceCategories = [
  { label: '0 - 250 AZN', value: '0-250' },
  { label: '250 - 500 AZN', value: '250-500' },
  { label: '500 - 1000 AZN', value: '500-1000' },
  { label: '1000 - 2000 AZN', value: '1000-2000' },
  { label: '2000+ AZN', value: '2000+' },
];

export default function PhoneFilter() {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedStorage, setSelectedStorage] = useState<string[]>([]);
  const [selectedPrice, setSelectedPrice] = useState<string>('');
  const [minPrice, setMinPrice] = useState<number | ''>('');
  const [maxPrice, setMaxPrice] = useState<number | ''>('');

  const handleBrandChange = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const handleStorageChange = (storage: string) => {
    setSelectedStorage(prev =>
      prev.includes(storage) ? prev.filter(s => s !== storage) : [...prev, storage]
    );
  };

  return (
    <FilterContainer>
      <SectionTitle>Filter</SectionTitle>

      <CheckboxContainer>
        <h3>Brendlər</h3>
        {brands.map(brand => (
          <div key={brand} className="flex items-center">
            <input
              type="checkbox"
              id={brand}
              checked={selectedBrands.includes(brand)}
              onChange={() => handleBrandChange(brand)}
            />
            <CheckboxLabel htmlFor={brand}>{brand}</CheckboxLabel>
          </div>
        ))}
      </CheckboxContainer>

      <CheckboxContainer>
        <h3>Storage</h3>
        {storageOptions.map(storage => (
          <div key={storage} className="flex items-center">
            <input
              type="checkbox"
              id={storage}
              checked={selectedStorage.includes(storage)}
              onChange={() => handleStorageChange(storage)}
            />
            <CheckboxLabel htmlFor={storage}>{storage}</CheckboxLabel>
          </div>
        ))}
      </CheckboxContainer>

      {/* <RadioContainer>
        <h3>Price Range</h3>
        {priceCategories.map(category => (
          <div key={category.value} className="flex items-center">
            <input
              type="radio"
              id={category.value}
              name="price"
              value={category.value}
              checked={selectedPrice === category.value}
              onChange={() => setSelectedPrice(category.value)}
            />
            <RadioLabel htmlFor={category.value}>{category.label}</RadioLabel>
          </div>
        ))}
      </RadioContainer> */}

      <div>
        <h3>Qiymət aralığı </h3>
        <div className="flex space-x-2">
          <PriceInput
            type="number"
            placeholder="Min"
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
          />
          <PriceInput
            type="number"
            placeholder="Max"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </div>
      </div>

      <ApplyButton
        onClick={() => {
          console.log({
            selectedBrands,
            selectedStorage,
            selectedPrice,
            minPrice,
            maxPrice,
          });
        }}
      >
        Tətbiq et
      </ApplyButton>
    </FilterContainer>
  );
}
