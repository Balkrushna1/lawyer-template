import { z } from 'zod';
import { insertInquirySchema } from './schema';

export const api = {
  inquiries: {
    submit: {
      method: 'POST' as const,
      path: '/api/contact',
      input: insertInquirySchema,
      responses: {
        200: z.object({ success: z.boolean(), message: z.string() }),
      },
    },
  },
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}
