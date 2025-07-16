import React, { useState } from 'react';
import './index.css';
import { Separator } from '../../components/Separator';
import { Button } from '../../components/Button';
import { Box, Typography } from '@mui/material';
import { evaluate } from 'mathjs';

export const Calculator = () => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');
  const [lastPressedEquals, setLastPressedEquals] = useState(false);

  const operators = ['+', '-', 'x', '/'];

  const handleClick = (value) => {
    setExpression((prev) => {
      const lastChar = prev.slice(-1);
      const isOperator = operators.includes(value);
      const lastIsOperator = operators.includes(lastChar);

      // Evitar iniciar con operador excepto -
      if (prev === '' && isOperator && value !== '-') {
        return '';
      }

      // Reemplazo de operador sobre operador
      if (lastIsOperator && isOperator) {
        return prev.slice(0, -1) + value;
      }

      // Continuar después de =
      if (lastPressedEquals) {
        setLastPressedEquals(false);
        if (isOperator) {
          return result + value;
        } else {
          setResult('');
          return value;
        }
      }

      if (value === '.') {
        if (prev === '') {
          return '0.';
        }

        const lastNumber = prev.split(/[-+x/]/).pop();
        if (lastNumber.includes('.')) {
          return prev;
        }
      }

      return prev + value;
    });
  };

  const handleClear = () => {
    setExpression('');
    setResult('');
    setLastPressedEquals(false);
  };

  const handleEvaluate = () => {
    try {
      const expressionToEval = expression.replace(/x/g, '*'); // 👈 aquí está la clave
      const evalResult = evaluate(expressionToEval).toString();
      setResult(evalResult);
      setLastPressedEquals(true);
    } catch {
      setResult('Error');
      setLastPressedEquals(false);
    }
  };

  const handleToggleSign = () => {
    setExpression((prev) => {
      const regex = /(-?\d+\.?\d*)$/;
      const match = prev.match(regex);

      if (match) {
        const number = match[0];
        const toggled = number.startsWith('-') ? number.slice(1) : '-' + number;
        return prev.slice(0, match.index) + toggled;
      }

      return prev;
    });
  };

  const handlePercent = () => {
    setExpression((prev) => {
      const regex = /(-?\d+\.?\d*)$/; // captura último número
      const match = prev.match(regex);

      if (match) {
        const number = parseFloat(match[0]);
        const percent = (number / 100).toString();
        return prev.slice(0, match.index) + percent;
      }

      return prev; // Si no hay número, no hace nada
    });
  };
  return (
    <div id="calculator">
      <div className="screen">
        <Box id="result">
          <Typography
            sx={{
              width: '100%',
              textAlign: 'right',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              color: '#777',
            }}
            variant="h4"
          >
            {expression || '0'}
          </Typography>
        </Box>
        <Typography
          sx={{
            width: '100%',
            textAlign: 'right',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            fontSize:
              (result || expression).length > 20
                ? '16px'
                : (result || expression).length > 10
                ? '20px'
                : '50px',
          }}
          variant="h1"
        >
          {result || '0'}
        </Typography>
      </div>
      <Separator />
      <div className="keyboard">
        <Button onClick={handleClear} className="button logical-operator">
          AC
        </Button>
        <Button
          onClick={() => handlePercent()}
          className="button logical-operator"
        >
          %
        </Button>
        <Button
          onClick={() => handleToggleSign()}
          className="button logical-operator"
        >
          +/-
        </Button>
        <Button
          onClick={() => handleClick('/')}
          className="button arithmetic-operators"
        >
          /
        </Button>
        <Button
          onClick={() => handleClick('7')}
          className="button numeric-keyboard"
        >
          7
        </Button>
        <Button
          onClick={() => handleClick('8')}
          className="button numeric-keyboard"
        >
          8
        </Button>
        <Button
          onClick={() => handleClick('9')}
          className="button numeric-keyboard"
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
        <Button onClick={handleEvaluate} className="button equal-key">
          =
        </Button>
      </div>
    </div>
  );
};
