export async function runSafely<T>(body: () => Promise<T>, errorMessage: string, defaultValue: T | null = null,): Promise<T | null> {
    try {
        return await body();
    } catch (error) {
        console.error(`${errorMessage}: `, error);
        return defaultValue;
    }
}
