"use client";

import { FilterIcon, X } from "lucide-react";
import { useState } from "react";
import styled from "styled-components";

// Styled components
const FilterContainer = styled.div`
  width: 100%;
  max-width: 340px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  padding: 24px;
  border: 1px solid #f0f0f0;
`;

const SectionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 16px;
  color: #1a1a1a;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 32px;
    height: 2px;
    background: #007bff;
    border-radius: 2px;
  }
`;

const CategoryTitle = styled.h3`
  font-size: 0.95rem;
  color: #2c3e50;
  margin-bottom: 12px;
  font-weight: 500;
`;

const CheckboxContainer = styled.div`
  margin-bottom: 32px;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  border-radius: 8px;
  transition: all 0.2s ease;
  &:hover {
    background: #f8f9fa;
  }
`;

const StyledCheckbox = styled.input`
  width: 18px;
  height: 18px;
  cursor: pointer;
  accent-color: #007bff;
`;

const CheckboxLabel = styled.label`
  margin-left: 12px;
  font-size: 1rem;
  color: #4a5568;
  cursor: pointer;
  user-select: none;
`;

const PriceRangeContainer = styled.div`
  margin-bottom: 32px;
`;

const PriceInputGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-top: 12px;
`;

const PriceInput = styled.input`
  border: 1.5px solid #e2e8f0;
  border-radius: 8px;
  padding: 10px 14px;
  width: 100%;
  transition: all 0.2s ease;
  font-size: 0.95rem;

  &:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
  }

  &::placeholder {
    color: #a0aec0;
  }
`;

const ApplyButton = styled.button`
  width: 100%;
  background-color: #007bff;
  color: white;
  padding: 14px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 500;
  transition: all 0.2s ease;
  margin-top: 8px;

  &:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 123, 255, 0.2);
  }

  &:active {
    transform: translateY(0);
  }
`;

const ColorOption = styled.div<{ color: string }>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${props => props.color};
  border: 2px solid ${props => props.color === '#FFFFFF' ? '#e2e8f0' : 'transparent'};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &.selected {
    box-shadow: 0 0 0 2px #fff, 0 0 0 4px #007bff;
  }
`;

const ColorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 8px;
  margin-bottom: 24px;
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

const colors = [
  { name: 'Qara', value: '#000000' },
  { name: 'Ağ', value: '#FFFFFF' },
  { name: 'Qızılı', value: '#FFD700' },
  { name: 'Gümüşü', value: '#C0C0C0' },
  { name: 'Mavi', value: '#0000FF' },
  { name: 'Qırmızı', value: '#FF0000' },
];

const features = [
  { id: 'faceId', label: 'Face ID' },
  { id: 'touchId', label: 'Touch ID' },
  { id: 'wirelessCharging', label: 'Simsiz şarj' },
  { id: 'fastCharging', label: '5G' },
  { id: 'dualSim', label: 'Dual SIM' },
  { id: 'nfc', label: 'NFC' },
];

const models = {
  Apple: ['iPhone 15 Pro Max', 'iPhone 15 Pro', 'iPhone 15', 'iPhone 14 Pro Max', 'iPhone 14'],
  Samsung: ['Galaxy S24 Ultra', 'Galaxy S24+', 'Galaxy S24', 'Galaxy S23', 'Galaxy A54'],
  Xiaomi: ['13T Pro', '13T', 'Redmi Note 13 Pro', 'Redmi Note 13', 'POCO X5'],
  Huawei: ['P60 Pro', 'P60', 'Nova 11 Pro', 'Nova 11', 'Mate 60'],
  OnePlus: ['12', '12R', 'Nord CE 3', '11', '10 Pro'],
};

export default function LeftPhoneFilter() {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedModels, setSelectedModels] = useState<string[]>([]);
  const [selectedStorage, setSelectedStorage] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState<number | ''>('');
  const [maxPrice, setMaxPrice] = useState<number | ''>('');

  const handleBrandChange = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
    // Clear selected models when brand selection changes
    setSelectedModels([]);
  };

  const handleModelChange = (model: string) => {
    setSelectedModels(prev =>
      prev.includes(model) ? prev.filter(m => m !== model) : [...prev, model]
    );
  };

  const handleStorageChange = (storage: string) => {
    setSelectedStorage(prev =>
      prev.includes(storage) ? prev.filter(s => s !== storage) : [...prev, storage]
    );
  };

  const handleColorChange = (color: string) => {
    setSelectedColors(prev =>
      prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
    );
  };

  const handleFeatureChange = (feature: string) => {
    setSelectedFeatures(prev =>
      prev.includes(feature) ? prev.filter(f => f !== feature) : [...prev, feature]
    );
  };

  return (
    <FilterContainer>
      <SectionTitle className="flex justify-between items-center gap-2">
        <FilterIcon className="h-5 w-5 text-gray-400" />
        Filterlər
        <X className="h-5 w-5 text-gray-400" />
      </SectionTitle>

      <CheckboxContainer>
        <CategoryTitle>Markalar</CategoryTitle>
        {brands.map(brand => (
          <CheckboxWrapper key={brand}>
            <StyledCheckbox
              type="checkbox"
              id={brand}
              checked={selectedBrands.includes(brand)}
              onChange={() => handleBrandChange(brand)}
            />
            <CheckboxLabel htmlFor={brand}>{brand}</CheckboxLabel>
          </CheckboxWrapper>
        ))}
      </CheckboxContainer>

      {selectedBrands.length > 0 && (
        <CheckboxContainer>
          <CategoryTitle>Modellər</CategoryTitle>
          {selectedBrands.map(brand => 
            models[brand as keyof typeof models].map(model => (
              <CheckboxWrapper key={model}>
                <StyledCheckbox
                  type="checkbox"
                  id={model}
                  checked={selectedModels.includes(model)}
                  onChange={() => handleModelChange(model)}
                />
                <CheckboxLabel htmlFor={model}>{model}</CheckboxLabel>
              </CheckboxWrapper>
            ))
          )}
        </CheckboxContainer>
      )}

      <CheckboxContainer>
        <CategoryTitle>Yaddaş</CategoryTitle>
        {storageOptions.map(storage => (
          <CheckboxWrapper key={storage}>
            <StyledCheckbox
              type="checkbox"
              id={storage}
              checked={selectedStorage.includes(storage)}
              onChange={() => handleStorageChange(storage)}
            />
            <CheckboxLabel htmlFor={storage}>{storage}</CheckboxLabel>
          </CheckboxWrapper>
        ))}
      </CheckboxContainer>

      <div style={{ marginBottom: '24px' }}>
        <CategoryTitle>Rənglər</CategoryTitle>
        <ColorGrid>
          {colors.map(color => (
            <ColorOption
              key={color.value}
              color={color.value}
              className={selectedColors.includes(color.value) ? 'selected' : ''}
              onClick={() => handleColorChange(color.value)}
              title={color.name}
            />
          ))}
        </ColorGrid>
      </div>

      <CheckboxContainer>
        <CategoryTitle>Xüsusiyyətlər</CategoryTitle>
        {features.map(feature => (
          <CheckboxWrapper key={feature.id}>
            <StyledCheckbox
              type="checkbox"
              id={feature.id}
              checked={selectedFeatures.includes(feature.id)}
              onChange={() => handleFeatureChange(feature.id)}
            />
            <CheckboxLabel htmlFor={feature.id}>{feature.label}</CheckboxLabel>
          </CheckboxWrapper>
        ))}
      </CheckboxContainer>

      <PriceRangeContainer>
        <CategoryTitle>Qiymət aralığı</CategoryTitle>
        <PriceInputGroup>
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
        </PriceInputGroup>
      </PriceRangeContainer>

      <ApplyButton
        onClick={() => {
          console.log({
            selectedBrands,
            selectedModels,
            selectedStorage,
            selectedColors,
            selectedFeatures,
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
