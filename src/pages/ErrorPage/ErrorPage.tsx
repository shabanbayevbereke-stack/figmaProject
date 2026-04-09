export function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">404 - Страница не найдена</h1>
      <p className="text-lg text-gray-600 mb-8">
        Извините, страница, которую вы ищете, не существует.
      </p>
      <a href="/" className="text-blue-500 hover:underline">
        Вернуться на главную
      </a>
    </div>
  );
}
