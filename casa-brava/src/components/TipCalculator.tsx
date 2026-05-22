import React, { useState, useEffect } from 'react';
import './TipCalculator.css';

const TipCalculator: React.FC = () => {
  const [billAmount, setBillAmount] = useState<string>('');
  const [tipPercentage, setTipPercentage] = useState<string>('18');
  const [customTip, setCustomTip] = useState<string>('');
  const [numberOfPeople, setNumberOfPeople] = useState<string>('1');
  const [tipAmount, setTipAmount] = useState<number>(0);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [amountPerPerson, setAmountPerPerson] = useState<number>(0);

  const tipOptions = [
    { value: '10', label: '10%' },
    { value: '15', label: '15%' },
    { value: '18', label: '18%' },
    { value: '20', label: '20%' },
  ];

  useEffect(() => {
    calculateTip();
  }, [billAmount, tipPercentage, customTip, numberOfPeople]);

  const calculateTip = () => {
    const bill = parseFloat(billAmount) || 0;
    const people = parseInt(numberOfPeople) || 1;
    const tipPercent = customTip ? parseFloat(customTip) : parseFloat(tipPercentage);
    const tip = bill * (tipPercent / 100);
    const total = bill + tip;
    const perPerson = total / people;

    setTipAmount(tip);
    setTotalAmount(total);
    setAmountPerPerson(perPerson);
  };

  const handleTipChange = (value: string) => {
    setTipPercentage(value);
    if (value !== 'custom') {
      setCustomTip('');
    }
  };

  const handleCustomTipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomTip(e.target.value);
  };

  const resetCalculator = () => {
    setBillAmount('');
    setTipPercentage('18');
    setCustomTip('');
    setNumberOfPeople('1');
    setTipAmount(0);
    setTotalAmount(0);
    setAmountPerPerson(0);
  };

  return (
    <section id="tip-calculator" className="tip-calculator">
      <div className="container">
        <h2>Tip Calculator</h2>
        <p className="section-description">
          Calculate your tip and split the bill easily
        </p>

        <div className="calculator-container">
          <div className="calculator-form">
            <div className="form-group">
              <label htmlFor="billAmount" className="form-label">
                Bill Amount ($)
              </label>
              <input
                type="number"
                id="billAmount"
                className="form-input"
                value={billAmount}
                onChange={(e) => setBillAmount(e.target.value)}
                placeholder="0.00"
                min="0"
                step="0.01"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Tip Percentage</label>
              <div className="tip-options">
                {tipOptions.map((option) => (
                  <button
                    key={option.value}
                    className={`tip-btn ${tipPercentage === option.value && !customTip ? 'active' : ''}`}
                    onClick={() => handleTipChange(option.value)}
                  >
                    {option.label}
                  </button>
                ))}
                <button
                  className={`tip-btn ${tipPercentage === 'custom' || customTip ? 'active' : ''}`}
                  onClick={() => handleTipChange('custom')}
                >
                  Custom
                </button>
              </div>
              {tipPercentage === 'custom' || customTip ? (
                <div className="form-group custom-tip-input">
                  <input
                    type="number"
                    className="form-input"
                    value={customTip}
                    onChange={handleCustomTipChange}
                    placeholder="Enter custom tip %"
                    min="0"
                    step="0.1"
                  />
                </div>
              ) : null}
            </div>

            <div className="form-group">
              <label htmlFor="numberOfPeople" className="form-label">
                Number of People
              </label>
              <input
                type="number"
                id="numberOfPeople"
                className="form-input"
                value={numberOfPeople}
                onChange={(e) => setNumberOfPeople(e.target.value)}
                placeholder="1"
                min="1"
              />
            </div>

            <button className="btn btn-secondary" onClick={resetCalculator}>
              Reset
            </button>
          </div>

          <div className="calculator-results">
            <div className="result-card">
              <h3>Bill Summary</h3>
              <div className="result-item">
                <span>Tip Amount:</span>
                <span className="result-value">${tipAmount.toFixed(2)}</span>
              </div>
              <div className="result-item">
                <span>Total Amount:</span>
                <span className="result-value">${totalAmount.toFixed(2)}</span>
              </div>
              <div className="result-item">
                <span>Amount per Person:</span>
                <span className="result-value">${amountPerPerson.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TipCalculator;