export async function resolveOrNull<T>(p: Promise<T>): Promise<T | null> {
  try { return await p } catch { return null }
}
