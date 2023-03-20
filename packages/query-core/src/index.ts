/* istanbul ignore file */

export { CancelledError } from './retryer'
export { QueryCache } from './queryCache'
export { QueryClient } from './queryClient'
export { QueryObserver } from './queryObserver'
export { QueriesObserver } from './queriesObserver'
export { InfiniteQueryObserver } from './infiniteQueryObserver'
export { MutationCache } from './mutationCache'
export { MutationObserver } from './mutationObserver'
export { notifyManager } from './notifyManager'
export { focusManager } from './focusManager'
export { onlineManager } from './onlineManager'
export {
  hashKey,
  replaceEqualDeep,
  isServer,
  matchQuery,
  keepPreviousData,
} from './utils'
export type { MutationFilters, QueryFilters, Updater } from './utils'
export { isCancelledError } from './retryer'
export {
  dehydrate,
  hydrate,
  defaultDehydrateQuery,
  defaultDehydrateMutation,
} from './hydration'

// Types
export * from './types'
export type { Query, QueryState } from './query'
export type { Mutation, MutationState } from './mutation'
export type {
  DehydrateOptions,
  DehydratedState,
  HydrateOptions,
} from './hydration'
