export type GenericError = Error | string | undefined;

export function getErrorText(err: GenericError | unknown): string {
  return err ? (err instanceof Error ? err.message : String(err)) : '';
}
