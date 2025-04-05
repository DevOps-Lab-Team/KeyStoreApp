import { http, HttpResponse } from "msw";

export const handlers = [
  // Пример обработчика для API
  http.get("/api/keys", () => {
    return HttpResponse.json([
      { id: 1, name: "Test Key 1", value: "value1" },
      { id: 2, name: "Test Key 2", value: "value2" },
    ]);
  }),

  // Добавьте здесь другие обработчики по мере необходимости
];
