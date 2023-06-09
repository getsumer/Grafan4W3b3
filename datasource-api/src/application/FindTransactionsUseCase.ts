import {
  Transaction,
  TransactionRepository,
  DappRepository,
} from '../domain'

export interface FindTransactionsInput {
  dappKey: string
  status: string
  startDate: Date
  endDate: Date
}

interface FindTransactionsOutput {
  transactions: Transaction[]
  count: number
}

export class FindTransactionsUseCase {
  constructor(
    private dappRepository: DappRepository,
    private transactionRepository: TransactionRepository,
  ) {}

  async execute({
    dappKey,
    status,
    startDate,
    endDate,
  }: FindTransactionsInput): Promise<FindTransactionsOutput> {
    const dapp = await this.dappRepository.findByKey(dappKey)
    if (!dapp) {
      throw new Error(`Dapp with key ${dappKey} not found.`)
    }
    const [transactions, count] = await Promise.all([
      this.transactionRepository.findBy({
        dappId: dapp.id,
        status,
        startDate,
        endDate,
      }),
      this.transactionRepository.countBy({
        dappId: dapp.id,
        status,
        startDate,
        endDate,
      }),
    ])
    return {
      transactions,
      count,
    }
  }
}