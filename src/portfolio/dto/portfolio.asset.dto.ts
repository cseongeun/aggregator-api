import { Token } from '@seongeun/aggregator-base/lib';
import { Exclude, Expose } from 'class-transformer';

export class AssetDTO extends Token {
  _portfolio: {
    amount: string;
  };
}

export class AssetResponseDTO {
  @Exclude() private readonly _name;
  @Exclude() private readonly _symbol;
  @Exclude() private readonly _decimals;
  @Exclude() private readonly _address;
  @Exclude() private readonly _totalSupply;
  @Exclude() private readonly _logoLink;
  @Exclude() private readonly _priceUSD;
  @Exclude() private readonly _pair0;
  @Exclude() private readonly _pair1;
  @Exclude() private readonly _wrapped;
  @Exclude() private readonly _result;

  constructor(assetDTO: AssetDTO) {
    console.log(assetDTO.tokenPrice.value);
    this._name = assetDTO.name;
    this._symbol = assetDTO.symbol;
    this._decimals = assetDTO.decimals;
    this._address = assetDTO.address;
    this._totalSupply = assetDTO.totalSupply;
    this._logoLink = assetDTO.logoLink;
    this._priceUSD = assetDTO.tokenPrice?.value || '0';
    this._pair0 = assetDTO.pair0
      ? {
          name: assetDTO.pair0.name,
          symbol: assetDTO.pair0.symbol,
          decimals: assetDTO.pair0.decimals,
          address: assetDTO.pair0.address,
          totalSupply: assetDTO.pair0.totalSupply,
          logoLink: assetDTO.pair0.logoLink,
        }
      : null;
    this._pair1 = assetDTO.pair1
      ? {
          name: assetDTO.pair1.name,
          symbol: assetDTO.pair1.symbol,
          decimals: assetDTO.pair1.decimals,
          address: assetDTO.pair1.address,
          totalSupply: assetDTO.pair1.totalSupply,
          logoLink: assetDTO.pair1.logoLink,
        }
      : null;
    this._wrapped = assetDTO.wrapped
      ? {
          name: assetDTO.wrapped.name,
          symbol: assetDTO.wrapped.symbol,
          decimals: assetDTO.wrapped.decimals,
          address: assetDTO.wrapped.address,
          totalSupply: assetDTO.wrapped.totalSupply,
          logoLink: assetDTO.wrapped.logoLink,
        }
      : null;
    this._result = assetDTO._portfolio;
  }

  @Expose()
  get name(): string {
    return this._name;
  }

  @Expose()
  get symbol(): string {
    return this._symbol;
  }

  @Expose()
  get decimals(): number {
    return this._decimals;
  }

  @Expose()
  get address(): string {
    return this._address;
  }

  @Expose()
  get totalSupply(): string {
    return this._totalSupply;
  }

  @Expose()
  get logoLink(): string {
    return this._logoLink;
  }

  @Expose()
  get priceUSD(): string {
    return this._priceUSD;
  }

  @Expose()
  get pair0(): any {
    return this._pair0;
  }

  @Expose()
  get pair1(): any {
    return this._pair1;
  }

  @Expose()
  get wrapped(): any {
    return this._wrapped;
  }

  @Expose()
  get _portfolio(): any {
    return this._result;
  }
}
