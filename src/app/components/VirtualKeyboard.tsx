import React from 'react';


const KEYBOARD_LAYOUT = [
  ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'PageUp'],
  ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'PageDn'],
  ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter', 'Insert'],
  ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'ShiftRight', 'Up', 'Delete'],
  ['Ctrl', 'Alt', 'Command', ' ', 'AltRight', '0', 'Left', 'Down', 'Right']
];


const KEY_MAP: { [key: string]: string } = {
  '~': '`', 
  '!': '1', '@': '2', '#': '3', '$': '4', '%': '5', '^': '6', '&': '7', '*': '8', '(': '9', ')': '0',
  '_': '-', '+': '=',
  '{': '[', '}': ']', '|': '\\',
  ':': ';', '"': '\'',
  '<': ',', '>': '.', '?': '/',
  'Backspace': 'Backspace',
  'Tab': 'Tab',
  'CapsLock': 'CapsLock',
  'Enter': 'Enter',
  'Shift': 'Shift',
  'Control': 'Ctrl', 
  'Alt': 'Alt',
  'Meta': 'Command', 
  ' ': ' ',
  'ArrowUp': 'Up',
  'ArrowDown': 'Down',
  'ArrowLeft': 'Left',
  'ArrowRight': 'Right',
  'PageUp': 'PageUp',
  'PageDown': 'PageDn',
  'Delete': 'Delete',
  'Insert': 'Insert'
};


interface Props {
  activeKey: string;
}

const VirtualKeyboard = ({ activeKey }: Props) => {
  const getMappedKey = (key: string) => {
    
    if (key.length === 1 && key.toUpperCase() !== key.toLowerCase()) {
      return key.toUpperCase(); 
    }
    
    if (key === '~') return '`';
    if (key === '!') return '1';
   
    return KEY_MAP[key] || key;
  };

  return (
    <div className="bg-gray-200 p-2 rounded-lg shadow-inner border border-gray-300">
      {KEYBOARD_LAYOUT.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-center gap-1.5 mb-1.5">
          {row.map((key) => {
            const displayKey = key.replace('Right', ''); 
            const mappedActiveKey = getMappedKey(activeKey);

        
            const isActive = mappedActiveKey.toLowerCase() === key.toLowerCase() ||
                             (key === 'ShiftRight' && mappedActiveKey === 'Shift') ||
                             (key === 'AltRight' && mappedActiveKey === 'Alt') ||
                             (key === 'Command' && (mappedActiveKey === 'Meta' || mappedActiveKey === 'Command'));


            let keyWidthClass = 'w-10'; 
            let keyText = displayKey;

            
            switch (key) {
              case 'Backspace':
              case 'Tab':
              case 'Enter':
              case 'CapsLock':
                keyWidthClass = 'w-20';
                break;
              case 'Shift':
                keyWidthClass = 'w-24';
                break;
              case 'ShiftRight': 
                keyWidthClass = 'w-32';
                keyText = 'Shift';
                break;
              case ' ': 
                keyWidthClass = 'w-96';
                break;
              case 'Ctrl':
              case 'Alt':
              case 'Command':
                keyWidthClass = 'w-16'; // Adjust as needed
                break;
              case 'AltRight':
                keyWidthClass = 'w-16'; // Adjust as needed
                keyText = 'Alt';
                break;
              case 'PageUp':
              case 'PageDn':
              case 'Insert':
              case 'Delete':
              case 'Up':
              case 'Left':
              case 'Down':
              case 'Right':
                keyWidthClass = 'w-16';
                break;
              case '0': // Numeric pad 0 for the bottom right
                keyWidthClass = 'w-12';
                break;
            }

            return (
              <div
                key={key}
                className={`
                  ${keyWidthClass} h-12 rounded-md font-sans text-sm font-semibold
                  flex flex-col items-center justify-center p-0.5
                  border border-gray-400 bg-gray-100 text-gray-800
                  shadow-sm relative
                  ${isActive ? 'bg-cyan-400 text-white shadow-md' : 'hover:bg-gray-300 active:bg-gray-400'}
                  transition-all duration-100 ease-in-out
                `}
              >
                {/* Top character for shift cases (e.g., ! above 1) */}
                {key.length === 1 && (key === '!' || key === '@' || key === '#' || key === '$' || key === '%' || key === '^' || key === '&' || key === '*' || key === '(' || key === ')' || key === '_' || key === '+' || key === '{' || key === '}' || key === '|' || key === ':' || key === '"' || key === '<' || key === '>' || key === '?') ? (
                  <>
                    <span className="absolute top-1 left-2 text-xs">{key}</span>
                    <span className="absolute bottom-1 right-2 text-xs">{KEY_MAP[key] || key}</span>
                  </>
                ) : (
                  keyText
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default VirtualKeyboard;