import React from 'react';
import './index.css';
import { Separator } from '../../components/Separator';
import { CalculatorScreen } from '../../components/CalculatorScreen';
import { Button } from '../../components/Button';

export const Calculator = () => {
  return (
    <div className="calculator">
      <div className="screen">
        <CalculatorScreen>
          <span className="number">2</span>
          <span className="operation-symbol">x</span>
          <span className="number">20</span>
          <span className="operation-symbol">x</span>
          <span className="number">2</span>
        </CalculatorScreen>
        <div className="operation-result">300</div>
      </div>
      <Separator />
      <div className="keyboard">
        <Button className="logical-operator">c</Button>
        <Button className="logical-operator">+/-</Button>
        <Button className="logical-operator">%</Button>
        <Button className="arithmetic-operators">/</Button>
        <Button className="logical-operator">7</Button>
        <Button className="logical-operator">8</Button>
        <Button className="logical-operator">9</Button>
        <Button className="arithmetic-operators">x</Button>
        <Button className="numeric-keyboard">4</Button>
        <Button className="numeric-keyboard">5</Button>
        <Button className="numeric-keyboard">6</Button>
        <Button className="arithmetic-operators">-</Button>
        <Button className="numeric-keyboard">1</Button>
        <Button className="numeric-keyboard">2</Button>
        <Button className="numeric-keyboard">3</Button>
        <Button className="arithmetic-operators">+</Button>
        <Button className="numeric-keyboard">00</Button>
        <Button className="numeric-keyboard">0</Button>
        <Button className="numeric-keyboard">.</Button>
        <Button className="equal-key">=</Button>
      </div>
    </div>
  );
};
