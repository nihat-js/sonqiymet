'use client'

import { useState } from 'react'
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const brands = ['Apple', 'Samsung', 'Google', 'OnePlus', 'Xiaomi']
const conditions = ['New', 'Like New', 'Good', 'Fair']
const features = ['5G', 'Wireless Charging', 'Face ID', 'Fingerprint Sensor', 'Dual SIM']

export default function PhoneFilter() {
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [selectedConditions, setSelectedConditions] = useState<string[]>([])
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])

  const handleBrandChange = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    )
  }

  const handleConditionChange = (condition: string) => {
    setSelectedConditions(prev =>
      prev.includes(condition) ? prev.filter(c => c !== condition) : [...prev, condition]
    )
  }

  const handleFeatureChange = (feature: string) => {
    setSelectedFeatures(prev =>
      prev.includes(feature) ? prev.filter(f => f !== feature) : [...prev, feature]
    )
  }

  return (
    <div className="w-full max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-6 py-4">
        <h2 className="text-2xl font-bold mb-4">Filter Phones</h2>
        
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="price">
            <AccordionTrigger>Price Range</AccordionTrigger>
            <AccordionContent>
              <div className="mt-2">
                <Slider
                  min={0}
                  max={2000}
                  step={50}
                  value={priceRange}
                  onValueChange={setPriceRange}
                />
                <div className="flex justify-between mt-2 text-sm text-gray-600">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="brand">
            <AccordionTrigger>Brand</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                {brands.map(brand => (
                  <div key={brand} className="flex items-center">
                    <Checkbox
                      id={`brand-${brand}`}
                      checked={selectedBrands.includes(brand)}
                      onCheckedChange={() => handleBrandChange(brand)}
                    />
                    <label htmlFor={`brand-${brand}`} className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      {brand}
                    </label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="condition">
            <AccordionTrigger>Condition</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                {conditions.map(condition => (
                  <div key={condition} className="flex items-center">
                    <Checkbox
                      id={`condition-${condition}`}
                      checked={selectedConditions.includes(condition)}
                      onCheckedChange={() => handleConditionChange(condition)}
                    />
                    <label htmlFor={`condition-${condition}`} className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      {condition}
                    </label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="features">
            <AccordionTrigger>Features</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                {features.map(feature => (
                  <div key={feature} className="flex items-center">
                    <Checkbox
                      id={`feature-${feature}`}
                      checked={selectedFeatures.includes(feature)}
                      onCheckedChange={() => handleFeatureChange(feature)}
                    />
                    <label htmlFor={`feature-${feature}`} className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      {feature}
                    </label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <button
          className="w-full mt-6 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
          onClick={() => {
            console.log({
              priceRange,
              selectedBrands,
              selectedConditions,
              selectedFeatures
            })
          }}
        >
          Apply Filters
        </button>
      </div>
    </div>
  )
}

