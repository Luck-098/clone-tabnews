export default function PaginaNamorada() {
  return (
    <main className="min-h-screen bg-gradient-to-tr from-pink-100 via-red-50 to-pink-100 flex items-center justify-center p-4">
      
      {/* Card Principal */}
      <div className="max-w-sm w-full bg-white rounded-3xl shadow-2xl overflow-hidden border-t-4 border-pink-400 p-8 text-center">
        
        {/* Coração Animado (Usando apenas o que já tem no Tailwind) */}
        <div className="flex justify-center mb-6">
          <div className="text-5xl animate-bounce">
            ❤️
          </div>
        </div>

        <h1 className="text-2xl font-extrabold text-gray-800 mb-4 tracking-tight">
          Para o meu amor
        </h1>

        {/* Sua frase original vai aqui */}
        <div className="bg-pink-50 p-4 rounded-2xl mb-6">
          <p className="text-gray-700 italic leading-relaxed">
            Eu te amo muito, se você me ama de um risadinha e grave sua reação ao ver o site e me mande. kakak
          </p>
        </div>

        {/* Segunda frase sugerida */}
        <p className="text-sm text-pink-500 font-semibold uppercase tracking-widest mb-8">
          Feito com código e muito carinho
        </p>

        {/* Botão Decorativo */}
        <button  className="w-full py-3 bg-pink-500 text-white rounded-xl font-bold hover:bg-pink-600 transition-all active:scale-95 shadow-md">
          <a href="https://www.instagram.com/p/DLxl93POlim/?img_index=1">Nossa História ✨</a> 
        </button>
      </div>

      {/* Detalhes flutuantes simples nos cantos */}
      <div className="fixed bottom-10 left-10 text-pink-300 opacity-50 text-4xl animate-pulse">✨</div>
      <div className="fixed top-10 right-10 text-pink-300 opacity-50 text-4xl animate-pulse delay-700">✨</div>
    </main>
  );
}