export type Transaction = {
  transaction_id: number;
  name: string;
  amount: number;
  split_amount: number;
  is_settled: boolean;
  payer: number;
  payee: number;
};
