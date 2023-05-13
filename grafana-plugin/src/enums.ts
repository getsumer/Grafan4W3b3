export enum QueryType {
  TotalCount = 'TOTAL_COUNT',
  TimeSeries = 'TIME_SERIES',
}

export enum AggregationField {
  Status = 'STATUS',
}

export enum TimeSeriesInterval {
  Daily = 'DAILY',
}

export enum ProcessedTransactionStatus {
  Success = 'SUCCESS',
  Fail = 'FAIL',
  Pending = 'PENDING',
}

export enum TransactionStatus {
  Processed = 'processed',
  NotProcessed = 'not_processed',
}
