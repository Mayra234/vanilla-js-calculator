import React from 'react';

export const Calculator = () => {
  return (
    <div class="container">
      <div class="floating-container">
        <div class="calculator">
          <div class="screen">
            <div class="operations-viewer">
              <span class="number">2</span>
              <span class="operation-symbol">x</span>
              <span class="number">20</span>
              <span class="operation-symbol">x</span>
              <span class="number">2</span>
            </div>
            <div class="operation-result">300</div>
          </div>
          <div class="separator"></div>
          <div class="keyboard">
            <button class="button logical-operator">c</button>
            <button class="button logical-operator">+/-</button>
            <button class="button logical-operator">%</button>
            <button class="button arithmetic-operators">/</button>
            <button class="button numeric-keyboard">7</button>
            <button class="button numeric-keyboard">8</button>
            <button class="button numeric-keyboard">9</button>
            <button class="button arithmetic-operators">x</button>
            <button class="button numeric-keyboard">4</button>
            <button class="button numeric-keyboard">5</button>
            <button class="button numeric-keyboard">6</button>
            <button class="button arithmetic-operators">-</button>
            <button class="button numeric-keyboard">1</button>
            <button class="button numeric-keyboard">2</button>
            <button class="button numeric-keyboard">3</button>
            <button class="button arithmetic-operators">+</button>
            <button class="button numeric-keyboard">00</button>
            <button class="button numeric-keyboard">0</button>
            <button class="button numeric-keyboard">.</button>
            <button class="button equal-key">=</button>
          </div>
        </div>
      </div>
      <div class="background-green"></div>
      <div class="background-gray"></div>
    </div>
  );
};
