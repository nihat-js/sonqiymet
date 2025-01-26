"use client";
import { useState, useEffect } from "react";
import { Search, ChevronDown, ChevronUp, SlidersHorizontal } from "lucide-react";
import styled from "styled-components";
import Select from 'react-select';

const FilterContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1rem;
  color: white;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 0.5rem;
  }
`;

const SearchContainer = styled.div`
  position: relative;
  margin-bottom: 2rem;
  max-width: 600px;
  margin: 0 auto 2rem auto;
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 2px solid var(--obsidian);
  background: transparent;
  padding: 0.75rem 1rem 0.75rem 3rem;
  color: var(--obsidian);
  transition: all 0.2s;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-bottom-color: var(--mandarin);
  }

  &::placeholder {
    color: #888;
  }
`

const SearchIcon = styled(Search)`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #888;
  transition: color 0.2s;

  ${SearchInput}:focus + & {
    color: var(--mandarin);
  }
`

const FilterSection = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.75rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 5px;
`;

const FilterButton = styled.button<{ $active?: boolean }>`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background-color: ${props => props.$active ? 'var(--obsidian)' : 'transparent'};
  border: 1px solid ${props => props.$active ? 'var(--obsidian)' : '#3a3a3a'};
  color: ${props => props.$active ? 'white' : '#666'};
  transition: all 0.2s;

  &:hover {
    background-color: ${props => props.$active ? 'var(--obsidian)' : 'rgba(24, 24, 27, 0.1)'};
    border-color: var(--obsidian);
    color: ${props => props.$active ? 'white' : 'var(--obsidian)'};
  }
`

const AdvancedButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--mandarin);
  padding: 0.5rem;
  border-radius: 0.5rem;
  margin-left: auto;
  font-size: 0.9rem;

  &:hover {
    background-color: rgba(255, 126, 0, 0.1);
  }
`

const AdvancedSection = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  padding-top: 1rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FilterLabel = styled.div`
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 0.25rem;
`;

const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const CheckboxLabel = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--obsidian);
  font-size: 0.9rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: all 0.2s;

  &:hover {
    background-color: rgba(24, 24, 27, 0.05);
  }

  input[type="checkbox"] {
    appearance: none;
    -webkit-appearance: none;
    width: 18px;
    height: 18px;
    border: 2px solid #ddd;
    border-radius: 4px;
    outline: none;
    cursor: pointer;
    position: relative;
    transition: all 0.2s;

    &:checked {
      background-color: var(--obsidian);
      border-color: var(--obsidian);

      &::after {
        content: '';
        position: absolute;
        left: 5px;
        top: 2px;
        width: 4px;
        height: 8px;
        border: solid white;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
      }
    }

    &:hover {
      border-color: var(--obsidian);
    }
  }
`;

const SpecsSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const SpecsLabel = styled.div`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.75rem;
  font-weight: 500;
`;

const SearchButton = styled.button`
  background-color: var(--mandarin);
  padding: 0.75rem 2rem;
  border-radius: 0.5rem;
  color: white;
  white-space: nowrap;
  
  &:hover {
    background-color: #ff7b00;
  }
`

const AdvancedFiltersContainer = styled.div`
  // border-top: 1px solid #3a3a3a;
  margin-top: 5px;
  padding-top: 1rem;
`;

const AdvancedHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const customSelectStyles = {
  control: (base: any) => ({
    ...base,
    minHeight: '36px',
    height: '36px',
    backgroundColor: 'white',
    borderColor: '#3a3a3a',
    '&:hover': {
      borderColor: 'var(--mandarin)'
    }
  }),
  menu: (base: any) => ({
    ...base,
    backgroundColor: 'white',
    border: '1px solid #3a3a3a'
  }),
  option: (base: any, state: { isFocused: boolean; isSelected: boolean }) => ({
    ...base,
    backgroundColor: state.isSelected ? 'var(--mandarin)' :
      state.isFocused ? '#f0f0f0' : 'white',
    color: state.isSelected ? 'white' : 'var(--obsidian)',
    '&:hover': {
      backgroundColor: state.isSelected ? 'var(--mandarin)' : '#f0f0f0'
    }
  }),
  singleValue: (base: any) => ({
    ...base,
    color: 'var(--obsidian)'
  }),
  multiValue: (base: any) => ({
    ...base,
    backgroundColor: 'var(--mandarin)',
  }),
  multiValueLabel: (base: any) => ({
    ...base,
    color: 'white',
  }),
  multiValueRemove: (base: any) => ({
    ...base,
    color: 'white',
    ':hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      color: 'white',
    },
  }),
  input: (base: any) => ({
    ...base,
    color: 'var(--obsidian)'
  }),
  placeholder: (base: any) => ({
    ...base,
    color: '#666'
  }),
  valueContainer: (base: any) => ({
    ...base,
    height: '36px',
    padding: '0 8px',
  }),
  indicatorsContainer: (base: any) => ({
    ...base,
    height: '36px',
  }),
};

export default function UpperPhoneFilter() {
  const [search, setSearch] = useState("");
  const [selectedBrand, setSelectedBrand] = useState<any>(null);
  const [selectedModels, setSelectedModels] = useState<any[]>([]);
  const [selectedStorage, setSelectedStorage] = useState<string[]>([]);
  const [selectedCity, setSelectedCity] = useState<any>(null);
  const [features, setFeatures] = useState<string[]>([]);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [priceRange, setPriceRange] = useState<{ min: string; max: string }>({ min: '', max: '' });
  const [mounted, setMounted] = useState(false);

  const brands = [
    { value: "Apple", label: "Apple" },
    { value: "Samsung", label: "Samsung" },
    { value: "Xiaomi", label: "Xiaomi" },
    { value: "Huawei", label: "Huawei" },
    { value: "Nothing", label: "Nothing" },
    { value: "OnePlus", label: "OnePlus" }
  ];

  const models = {
    Apple: ["iPhone 15 Pro", "iPhone 15", "iPhone 14 Pro", "iPhone 14", "iPhone 13"],
    Samsung: ["S24 Ultra", "S24+", "S24", "S23 Ultra", "Fold 5"],
    // ... other models
  };

  const cities = [
    { value: "baku", label: "Bakı" },
    { value: "ganja", label: "Gəncə" },
    { value: "sumgait", label: "Sumqayıt" },
    { value: "mingachevir", label: "Mingəçevir" },
    { value: "shirvan", label: "Şirvan" }
  ];

  const storageOptions = ["64GB", "128GB", "256GB", "512GB", "1TB"];
  const phoneFeatures = ["Face ID", "NFC", "Wireless charging", "eSIM"];

  const getModelOptions = () => {
    if (!selectedBrand) return [];
    return models[selectedBrand.value as keyof typeof models]?.map(model => ({
      value: model,
      label: model
    })) || [];
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Prevent hydration issues
  }

  // Add more filter options
  const conditions = ["Yeni", "Əla", "Yaxşı", "Orta", "Pis"];
  const colors = ["Qara", "Ağ", "Qızılı", "Bənövşəyi", "Göy", "Yaşıl"];
  const warranties = ["Var", "Yox"];
  const simCards = ["1", "2", "3", "4"];

  return (
    <FilterContainer>
      <SearchContainer>
        <div style={{ position: 'relative', flex: 1 }}>
          <SearchInput
            type="text"
            placeholder="iPhone 15 Pro, S24 Ultra..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <SearchIcon size={20} />
        </div>
        <SearchButton>
          Axtar
        </SearchButton>
      </SearchContainer>

      <FilterSection>
        <Select
          placeholder="Marka"
          options={brands}
          value={selectedBrand}
          onChange={setSelectedBrand}
          styles={customSelectStyles}
          isClearable
        />
        <Select
          isMulti
          placeholder="Model"
          options={getModelOptions()}
          value={selectedModels}
          onChange={setSelectedModels}
          styles={customSelectStyles}
          isDisabled={!selectedBrand}
        />
        <input
          type="number"
          placeholder="Min qiymət"
          value={priceRange.min}
          onChange={(e) => setPriceRange(prev => ({ ...prev, min: e.target.value }))}
          className="h-9 px-3 rounded-md border border-[#3a3a3a] bg-white text-obsidian"
        />
        <input
          type="number"
          placeholder="Max qiymət"
          value={priceRange.max}
          onChange={(e) => setPriceRange(prev => ({ ...prev, max: e.target.value }))}
          className="h-9 px-3 rounded-md border border-[#3a3a3a] bg-white text-obsidian"
        />
      </FilterSection>

      <ButtonGroup>
        {storageOptions.map((storage) => (
          <FilterButton
            key={storage}
            $active={selectedStorage.includes(storage)}
            onClick={() => {
              setSelectedStorage(prev =>
                prev.includes(storage)
                  ? prev.filter(s => s !== storage)
                  : [...prev, storage]
              )
            }}
          >
            {storage}
          </FilterButton>
        ))}
      </ButtonGroup>

      <SpecsSection>
        <CheckboxGroup>
          {phoneFeatures.map((feature) => (
            <CheckboxLabel key={feature}>
              <input
                type="checkbox"
                checked={features.includes(feature)}
                onChange={(e) => {
                  setFeatures(prev =>
                    e.target.checked
                      ? [...prev, feature]
                      : prev.filter(f => f !== feature)
                  )
                }}
              />
              {feature}
            </CheckboxLabel>
          ))}
        </CheckboxGroup>
      </SpecsSection>
      {/* 
      <AdvancedHeader>
        <AdvancedButton onClick={() => setShowAdvanced(!showAdvanced)}>
          <SlidersHorizontal size={16} />
          {showAdvanced ? "Ətraflı filtri gizlət" : "Ətraflı filtr"}
          {showAdvanced ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </AdvancedButton>
      </AdvancedHeader> */}
    </FilterContainer>
  );
}