/**
 * Promise with `resolve` and `reject` methods of itself
 */
export interface ControlledPromise<T = void> extends Promise<T> {
  resolve(value: T | PromiseLike<T>): void
  reject(reason?: any): void
}

/**
 * Return a Promise with `resolve` and `reject` methods
 *
 * @category Promise
 * @example
 * ```
 * const promise = createControlledPromise()
 *
 * await promise
 *
 * // in anther context:
 * promise.resolve(data)
 * ```
 */
export function createControlledPromise<T>(): ControlledPromise<T> {
  let resolve: any, reject: any
  const promise = new Promise<T>((_resolve, _reject) => {
    resolve = _resolve
    reject = _reject
  }) as ControlledPromise<T>
  promise.resolve = resolve
  promise.reject = reject
  return promise
}

type ArrayElement<ArrayType> = ArrayType extends (infer ElementType)[]
  ? ElementType
  : never
type ResolveType<T> = T extends Promise<infer R> ? R : T

export async function avoidTooFastPromise<T>(
  promise: T extends ArrayElement<T>[]
    ? (Promise<ArrayElement<T>> | ArrayElement<T>)[]
    : T | Promise<T>,
  minimumWaitTime: number
): Promise<
  T extends ArrayElement<T>[] ? ResolveType<ArrayElement<T>>[] : ResolveType<T>
> {
  const multiplePromisesProvided = Array.isArray(promise)

  const arrayOfPromises = multiplePromisesProvided ? promise : [promise]

  const resolved = (
    await Promise.all([
      new Promise((resolve) => setTimeout(resolve, minimumWaitTime)),
      ...arrayOfPromises,
    ])
  ).slice(1)

  return multiplePromisesProvided ? resolved : resolved[0]
}
