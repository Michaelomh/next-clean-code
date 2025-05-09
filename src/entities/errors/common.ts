export class AuthenticationError extends Error {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options)
  }
}

export class UnauthenticationError extends Error {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options)
  }
}

export class UnauthorizedError extends Error {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options)
  }
}
