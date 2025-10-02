import { Card } from '@/components/ui/card';

export default function SchoolHeader() {
  return (
    <div className="school-gradient py-8 px-4 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-amber-900/20"></div>
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-2 drop-shadow-lg">
          G ALUTHWALA M.V.
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-600 mx-auto mb-4"></div>
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">
          Get-Together Party 2025
        </h2>
        <p className="text-lg md:text-xl text-yellow-200 font-medium">
          🎉 The Ultimate School Celebration 🎉
        </p>
      </div>
    </div>
  );
}