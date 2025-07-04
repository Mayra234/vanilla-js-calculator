import React, { useEffect, useState } from 'react';
import './index.css';
import { Separator } from '../../components/Separator';
import { Button } from '../../components/Button';
import { Box } from '@mui/material';

export const Calculator = () => {
  const [resultado, setResultado] = useState('');

  const handleClick = (valor) => {
    setResultado((prev) => prev + valor);
  };
  return (
    <div id="calculator">
      <div className="screen">
        <Box id="result">
          <span className="number">2</span>
          <span className="operation-symbol">x</span>
          <span className="number">20</span>
          <span className="operation-symbol">x</span>
          <span className="number">2</span>
          {resultado}
        </Box>
        <div className="operation-result">300</div>
      </div>
      <Separator />
      <div className="keyboard">
        <Button
          onClick={() => handleClick('')}
          className="button logical-operator"
        >
          AC
        </Button>
        <Button
          onClick={() => handleClick('%')}
          className="button logical-operator"
        >
          %
        </Button>
        <Button
          onClick={() => handleClick('')}
          className="button logical-operator"
        >
          ---
        </Button>
        <Button
          onClick={() => handleClick('/')}
          className="button arithmetic-operators"
        >
          /
        </Button>
        <Button
          onClick={() => handleClick('7')}
          className="button logical-operator"
        >
          7
        </Button>
        <Button
          onClick={() => handleClick('8')}
          className="button logical-operator"
        >
          8
        </Button>
        <Button
          onClick={() => handleClick('9')}
          className="button logical-operator"
        >
          9
        </Button>
        <Button
          onClick={() => handleClick('x')}
          className="button arithmetic-operators"
        >
          x
        </Button>
        <Button
          onClick={() => handleClick('4')}
          className="button numeric-keyboard"
        >
          4
        </Button>
        <Button
          onClick={() => handleClick('5')}
          className="button numeric-keyboard"
        >
          5
        </Button>
        <Button
          onClick={() => handleClick('6')}
          className="button numeric-keyboard"
        >
          6
        </Button>
        <Button
          onClick={() => handleClick('-')}
          className="button arithmetic-operators"
        >
          -
        </Button>
        <Button
          onClick={() => handleClick('1')}
          className="button numeric-keyboard"
        >
          1
        </Button>
        <Button
          onClick={() => handleClick('2')}
          className="button numeric-keyboard"
        >
          2
        </Button>
        <Button
          onClick={() => handleClick('3')}
          className="button numeric-keyboard"
        >
          3
        </Button>
        <Button
          onClick={() => handleClick('+')}
          className="button arithmetic-operators"
        >
          +
        </Button>
        <Button
          onClick={() => handleClick('00')}
          className="button numeric-keyboard"
        >
          00
        </Button>
        <Button
          onClick={() => handleClick('0')}
          className="button numeric-keyboard"
        >
          0
        </Button>
        <Button
          onClick={() => handleClick('.')}
          className="button numeric-keyboard"
        >
          .
        </Button>
        <Button onClick={() => handleClick('')} className="button equal-key">
          =
        </Button>
      </div>
    </div>
  );
};
