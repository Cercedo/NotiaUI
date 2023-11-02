import { useState } from 'react';
import { Link } from 'react-router-dom';

import viteLogo from '@/assets/favicon.svg';
import reactLogo from '@/assets/react.svg';

export const LandingPage = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center h-screen flex flex-col items-center justify-center">
      <div className="grid grid-cols-2">
        <a
          href="https://vitejs.dev"
          target="_blank"
          rel="noreferrer"
          className="bg-transparent"
        >
          <img
            src={viteLogo}
            className="h-36 p-6 hover:drop-shadow-[0_0_2em_#646cffaa]"
            alt="Vite logo"
          />
        </a>
        <a
          href="https://react.dev"
          target="_blank"
          rel="noreferrer"
          className="bg-transparent"
        >
          <img
            src={reactLogo}
            className="animate-spin h-36 p-6 hover:drop-shadow-[0_0_2em_#61dafbaa]"
            style={{
              animationDuration: '20s',
            }}
            alt="React logo"
          />
        </a>
      </div>
      <h1 className="text-[51px] font-bold my-[34px]">Vite + React</h1>
      <div className="p-8">
        <div className="grid grid-cols-2 gap-4 font-medium">
          <button
            className="py-2 px-4 rounded-lg border-2 border-transparent transition hover:border-[#646cff] duration-300"
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </button>
          <Link
            to="/app"
            className="py-2 px-4 rounded-lg border-2 border-transparent transition hover:border-[#646cff] duration-300"
          >
            Get started
          </Link>
        </div>
        <p className="my-4 text-sm">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-[#888]">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
};
