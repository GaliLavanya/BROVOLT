'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Leaf, X, HelpCircle, ArrowRight, Zap, Coins, TreePine } from 'lucide-react'

export default function SustainabilityContent() {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false)
  const [vehicleType, setVehicleType] = useState<'sedan' | 'suv' | 'hybrid'>('sedan')
  const [weeklyMileage, setWeeklyMileage] = useState<number>(200)

  // Constants for calculation
  const emissions = {
    sedan: 0.404, // kg CO2 per mile (EPA average gas sedan)
    suv: 0.515,   // kg CO2 per mile (EPA average SUV)
    hybrid: 0.220, // kg CO2 per mile
  }

  const fuelCostPerMile = {
    sedan: 0.15, // USD per mile
    suv: 0.20,   // USD per mile
    hybrid: 0.08, // USD per mile
  }

  const evCostPerMile = 0.04 // USD per mile average charging cost

  // Calculations
  const annualMileage = weeklyMileage * 52
  // Since BREVOLT is 100% renewable, EV emissions are 0.
  const co2SavedKg = Math.round(annualMileage * emissions[vehicleType])
  const moneySaved = Math.round(annualMileage * (fuelCostPerMile[vehicleType] - evCostPerMile))
  const treesEquivalent = Math.round(co2SavedKg / 22) // Average mature tree absorbs 22kg CO2 per year

  return (
    <>
      {/* Carbon Calculator CTA */}
      <section className="py-20 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Track Your Impact</h2>
          <p className="text-lg text-muted-foreground mb-8">See how much CO2 you can save by switching to EV charging with BREVOLT.</p>
          <button
            onClick={() => setIsCalculatorOpen(true)}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-lg hover:shadow-primary/20 cursor-pointer"
          >
            Calculate Your Carbon Savings
          </button>
        </div>
      </section>

      {/* Carbon Calculator Modal */}
      <AnimatePresence>
        {isCalculatorOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="bg-card border border-border rounded-lg max-w-2xl w-full overflow-hidden shadow-2xl relative"
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-card/90 backdrop-blur-md px-6 py-4 border-b border-border flex items-center justify-between z-10">
                <div className="flex items-center space-x-2 text-accent">
                  <Leaf className="w-6 h-6 animate-pulse" />
                  <span className="font-bold text-lg text-foreground">BREVOLT Carbon Calculator</span>
                </div>
                <button
                  onClick={() => setIsCalculatorOpen(false)}
                  className="p-1 text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <label className="block text-foreground font-semibold mb-3">
                    1. Select Your Current Gas Vehicle Type
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { id: 'sedan', label: 'Gas Sedan', desc: 'Avg. 25 MPG' },
                      { id: 'suv', label: 'Gas SUV/Truck', desc: 'Avg. 18 MPG' },
                      { id: 'hybrid', label: 'Gas Hybrid', desc: 'Avg. 45 MPG' },
                    ].map((type) => (
                      <button
                        key={type.id}
                        onClick={() => setVehicleType(type.id as any)}
                        className={`p-4 border rounded-lg text-center transition-all cursor-pointer ${
                          vehicleType === type.id
                            ? 'border-accent bg-accent/10 text-accent font-bold shadow-md'
                            : 'border-border bg-card text-muted-foreground hover:border-primary/50'
                        }`}
                      >
                        <p className="text-sm md:text-base text-foreground font-semibold">{type.label}</p>
                        <p className="text-xs text-muted-foreground mt-1">{type.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-foreground font-semibold">
                      2. Weekly Mileage
                    </label>
                    <span className="text-accent font-bold text-lg">{weeklyMileage} miles / week</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="1000"
                    step="10"
                    value={weeklyMileage}
                    onChange={(e) => setWeeklyMileage(Number(e.target.value))}
                    className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-accent"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>10 miles</span>
                    <span>1,000 miles</span>
                  </div>
                </div>

                {/* Results Section */}
                <div className="bg-muted/40 border border-border/80 rounded-lg p-6 space-y-4">
                  <h3 className="text-lg font-semibold text-foreground border-b border-border/50 pb-2 flex items-center gap-1.5">
                    Your Annual Estimated Impact with BREVOLT
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                    {/* CO2 Saved */}
                    <div className="bg-card border border-border p-4 rounded-lg text-center relative overflow-hidden group">
                      <div className="absolute top-0 left-0 w-full h-1 bg-accent" />
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
                        <Leaf className="w-5 h-5 text-accent" />
                      </div>
                      <p className="text-2xl font-bold text-foreground">{co2SavedKg.toLocaleString()} kg</p>
                      <p className="text-xs text-muted-foreground mt-1 font-semibold">CO2 Offset</p>
                    </div>

                    {/* Money Saved */}
                    <div className="bg-card border border-border p-4 rounded-lg text-center relative overflow-hidden group">
                      <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                        <Coins className="w-5 h-5 text-primary" />
                      </div>
                      <p className="text-2xl font-bold text-foreground">${moneySaved.toLocaleString()}</p>
                      <p className="text-xs text-muted-foreground mt-1 font-semibold">Fuel Savings</p>
                    </div>

                    {/* Trees Equivalent */}
                    <div className="bg-card border border-border p-4 rounded-lg text-center relative overflow-hidden group">
                      <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500" />
                      <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-3">
                        <TreePine className="w-5 h-5 text-emerald-500" />
                      </div>
                      <p className="text-2xl font-bold text-foreground">{treesEquivalent.toLocaleString()}</p>
                      <p className="text-xs text-muted-foreground mt-1 font-semibold">Trees Equivalent</p>
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground/80 leading-relaxed text-center mt-2 italic">
                    Calculations are based on 100% renewable energy grid power charging vs. EPA average combustion engine fuel economy standards.
                  </p>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="bg-muted/30 px-6 py-4 border-t border-border flex items-center justify-between">
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Zap size={14} className="text-accent" /> Powered by 100% Green Tech
                </span>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setIsCalculatorOpen(false)}
                    className="px-4 py-2 text-muted-foreground hover:text-foreground font-semibold rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      setIsCalculatorOpen(false)
                      // Navigate to mobile app to track
                      window.location.href = '/mobile-app'
                    }}
                      className="px-5 py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-1 cursor-pointer shadow-md"
                  >
                    Start Saving Now <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
