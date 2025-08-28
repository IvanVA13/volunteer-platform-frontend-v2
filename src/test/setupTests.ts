import '@testing-library/jest-dom'
import 'whatwg-fetch' // поліфіл для jsdom

// Мокаємо fetch, щоб тести не ходили в мережу
beforeAll(() => {
  (globalThis as any).fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: async () => ({}),
  })
})

// (опціонально) приглушимо console.error у тестах
let consoleErrorSpy: jest.SpyInstance
beforeAll(() => {
  consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {})
})
afterAll(() => {
  consoleErrorSpy?.mockRestore()
})

// На всяк: почистити моки між тестами
afterEach(() => {
  jest.clearAllMocks()
})
