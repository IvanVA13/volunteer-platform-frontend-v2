// src/test/setupTests.ts
import '@testing-library/jest-dom'
import 'whatwg-fetch' // поліфіл для jsdom

// Коректно типізований мок fetch (без any)
const mockFetch: jest.MockedFunction<typeof fetch> = jest
  .fn()
  .mockResolvedValue({
    ok: true,
    json: async () => ({}),
  } as Response)

beforeAll(() => {
  // Підміняємо глобальну fetch під час тестів
  Object.defineProperty(globalThis, 'fetch', {
    value: mockFetch,
    writable: true,
  })
})

// (опційно) приглушимо console.error у тестах, щоб логи не засмічували вивід
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
