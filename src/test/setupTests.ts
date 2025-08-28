import '@testing-library/jest-dom'
import 'whatwg-fetch'

// Мокаємо fetch, щоб тести не ходили в мережу
beforeAll(() => {
  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: async () => ({}),
  }) as jest.Mock
})

// Приглушаємо console.error у тестах
let consoleErrorSpy: jest.SpyInstance
beforeAll(() => {
  consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {})
})
afterAll(() => {
  consoleErrorSpy?.mockRestore()
})

// Чистимо моки між тестами
afterEach(() => {
  jest.clearAllMocks()
})
