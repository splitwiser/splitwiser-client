import type { Transaction } from "./transaction";

interface BaseApiResponse {
  status: "success" | "fail";
  message?: string;
  data: unknown;
}

export interface TransactionListRes extends BaseApiResponse {
  data: Transaction[];
}
