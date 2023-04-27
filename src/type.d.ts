interface IAsset {
    cryptoIndex: number
    accType: string
    amount: number
    amountUSD: number
    realized: number
    realizedPercent: number
    unrealized: number
    unrealizedPercent: number
    total: number
    totalPercent: number
}

interface ISumAsset {
    netWorth: number
    realizedReturns: number
    unrealizedReturns: number
}

type AssetsState = {
    assets: IAsset[]
    sumAssets: ISumAsset
}

type Card = {
    cryptoIndex: number
    accType: String
    amount: number
    amountUSD: number
    realized: number
    realizedPercent: number
    unrealized: number
    unrealizedPercent: number
    total: number
    totalPercent: number
}

type MapItem = {
    name: string
    value: number
}

type CardProps = {
    asset: Card
}