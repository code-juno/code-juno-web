type RateLimitEntry = {
  count: number;
  resetTime: number;
};

export class RateLimiter {
  private rateLimitMap = new Map<string, RateLimitEntry>();
  private readonly duration: number;
  private readonly maxRequests: number;

  constructor(durationMs: number, maxRequests: number) {
    this.duration = durationMs;
    this.maxRequests = maxRequests;
  }

  isLimited(key: string): boolean {
    const now = Date.now();
    const userLimit = this.rateLimitMap.get(key);

    if (!userLimit || userLimit.resetTime < now) {
      this.rateLimitMap.set(key, {
        count: 1,
        resetTime: now + this.duration,
      });
      return false;
    }

    if (userLimit.count >= this.maxRequests) {
      return true;
    }

    userLimit.count += 1;
    this.rateLimitMap.set(key, userLimit);
    return false;
  }

  getLimitInfo(key: string): RateLimitEntry | undefined {
    return this.rateLimitMap.get(key);
  }
}
