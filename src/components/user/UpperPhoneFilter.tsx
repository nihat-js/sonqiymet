"use client";
import { useState, useEffect } from "react";
import { Search, ChevronDown, ChevronUp, SlidersHorizontal } from "lucide-react";
import styled from "styled-components";
import Select from 'react-select';

const FilterContainer = styled.div`
  // padding: 1rem;
  // background-color: var(--obsidian);
  color: white;
`

const SearchContainer = styled.div`
  position: relative;
  margin-bottom: 1rem;
`

const SearchInput = styled.input`
  width: 100%;
  // background-color: #2a2a2a;
  border: 1px solid #3a3a3a;
  border-radius: 0.5rem;
  padding: 0.75rem 1rem 0.75rem 3rem;
  color: white;

  &:focus {
    outline: none;
    border-color: var(--mandarin);
  }

  &::placeholder {
    color: #888;
  }
`

const FilterSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
`

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`

const FilterButton = styled.button<{ $active?: boolean }>`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background-color: ${props => props.$active ? 'var(--mandarin)' : '#2a2a2a'};
  color: white;
  transition: all 0.2s;

  &:hover {
    background-color: ${props => props.$active ? 'var(--mandarin)' : '#3a3a3a'};
  }
`

const AdvancedButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--mandarin);
  padding: 0.5rem;
  border-radius: 0.5rem;

  &:hover {
    background-color: #2a2a2a;
  }
`

const AdvancedSection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  padding-top: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const CheckboxGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
`

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
`

const SearchButton = styled.button`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  background-color: var(--mandarin);
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  color: white;
  
  &:hover {
    background-color: #ff7b00;
  }
`

const customSelectStyles = {
  control: (base: any) => ({
    ...base,
    // background: '#2a2a2a',
    borderColor: '#3a3a3a',
    '&:hover': {
      borderColor: 'var(--mandarin)'
    }
  }),
  menu: (base: any) => ({
    ...base,
    // background: '#2a2a2a',
    border: '1px solid #3a3a3a'
  }),
  option: (base: any, state: { isFocused: boolean; isSelected: boolean }) => ({
    ...base,
    backgroundColor: state.isSelected ? 'var(--mandarin)' : 
                     state.isFocused ? '#3a3a3a' : '#2a2a2a',
    '&:hover': {
      // backgroundColor: '#3a3a3a'
    }
  }),
  singleValue: (base: any) => ({
    ...base,
    // color: 'white'
  }),
  multiValue: (base: any) => ({
    ...base,
    backgroundColor: 'var(--mandarin)',
  }),
  multiValueLabel: (base: any) => ({
    ...base,
    // color: 'white',
  }),
  input: (base: any) => ({
    ...base,
    // color: 'white'
  }),
  placeholder: (base: any) => ({
    ...base,
    // color: '#888'
  })
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

  return (
    <FilterContainer>
      <div className="container mx-auto">
        {/* Search Bar */}
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="iPhone 15 Pro, S24 Ultra..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Search 
            style={{
              position: 'absolute',
              left: '1rem',
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#888'
            }}
          />
          <SearchButton>
            Axtar
          </SearchButton>
        </SearchContainer>

        <FilterSection>
          {/* Brand and Model Selection in one line */}
          <Select
            placeholder="Marka seçin"
            options={brands}
            value={selectedBrand}
            onChange={setSelectedBrand}
            styles={customSelectStyles}
            isClearable
          />
          <Select
            isMulti
            placeholder="Model seçin"
            options={getModelOptions()}
            value={selectedModels}
            onChange={setSelectedModels}
            styles={customSelectStyles}
            isDisabled={!selectedBrand}
          />
        </FilterSection>

        {/* Price Range */}
        <FilterSection>
          <input
            type="number"
            placeholder="Min qiymət"
            value={priceRange.min}
            onChange={(e) => setPriceRange(prev => ({ ...prev, min: e.target.value }))}
            style={{
              padding: '0.5rem',
              borderRadius: '0.5rem',
              border: '1px solid #3a3a3a',
              backgroundColor: 'transparent',
              color: 'white'
            }}
          />
          <input
            type="number"
            placeholder="Max qiymət"
            value={priceRange.max}
            onChange={(e) => setPriceRange(prev => ({ ...prev, max: e.target.value }))}
            style={{
              padding: '0.5rem',
              borderRadius: '0.5rem',
              border: '1px solid #3a3a3a',
              backgroundColor: 'transparent',
              color: 'white'
            }}
          />
        </FilterSection>

        {/* Storage Options */}
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

        {/* Advanced Filters Toggle */}
        <AdvancedButton onClick={() => setShowAdvanced(!showAdvanced)}>
          <SlidersHorizontal size={20} />
          {showAdvanced ? "Ətraflı filtri gizlət" : "Ətraflı filtr"}
          {showAdvanced ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </AdvancedButton>

        {/* Advanced Filters Section */}
        {showAdvanced && (
          <AdvancedSection>
            {/* City Selection */}
            <Select
              placeholder="Şəhər seçin"
              options={cities}
              value={selectedCity}
              onChange={setSelectedCity}
              styles={customSelectStyles}
              isClearable
            />

            {/* Features Checkboxes */}
            <div>
              <p style={{ color: '#888', marginBottom: '0.5rem' }}>Xüsusiyyətlər</p>
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
                      style={{ accentColor: 'var(--mandarin)' }}
                    />
                    {feature}
                  </CheckboxLabel>
                ))}
              </CheckboxGroup>
            </div>
          </AdvancedSection>
        )}
      </div>
    </FilterContainer>
  );
}