import React from 'react';

const KEYBOARD_LAYOUT = [
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='],
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'"],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'],
  [' '], 
];

interface Props {
  activeKey: string;
}

const VirtualKeyboard = ({ activeKey }: Props) => {
  return (
    <div className="bg-[#21222c] p-4 rounded-lg shadow-lg">
      {KEYBOARD_LAYOUT.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-center gap-2 mb-2">
          {row.map((key) => {
            const isActive = activeKey.toLowerCase() === key.toLowerCase();
            const keyClass = `
              h-12 rounded-md font-mono text-lg flex items-center justify-center transition-colors duration-100
              ${isActive ? 'bg-cyan-400 text-black' : 'bg-gray-600 text-gray-200'}
              ${key === ' ' ? 'w-96' : 'w-12'}
            `;
            return (
              <div key={key} className={keyClass}>
                {key}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default VirtualKeyboard;