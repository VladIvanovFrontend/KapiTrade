export const AssetType = {
    ZPIF: 'ZPIF',
    RentalBusinessShares: 'RentalBusinessShares',
    LeaseRightsAssignment: 'LeaseRightsAssignment',
    BusinessShares: 'BusinessShares',
    OTCBonds: 'OTCBonds',
    ConvertibleLoansInStartups: 'ConvertibleLoansInStartups',
    CashCurrencies: 'CashCurrencies',
    Deposits: 'Deposits',
    AgriculturalLands: 'AgriculturalLands',
    MetalBullionsAndCoins: 'MetalBullionsAndCoins',
    FuelAndMineralResources: 'FuelAndMineralResources',
};

export const AssetNameMap = {
    [AssetType.ZPIF]: 'ЗПИФ',
    [AssetType.RentalBusinessShares]: 'Доли в рентном бизнесе',
    [AssetType.LeaseRightsAssignment]: 'Переуступка прав аренды',
    [AssetType.BusinessShares]: 'Доли в бизнесе',
    [AssetType.OTCBonds]: 'Внебиржевые облигации',
    [AssetType.ConvertibleLoansInStartups]: 'Конвертируемые займы в стартапы',
    [AssetType.CashCurrencies]: 'Валюты наличные',
    [AssetType.Deposits]: 'Месторождения',
    [AssetType.AgriculturalLands]: 'Сельскохозяйственные земли',
    [AssetType.MetalBullionsAndCoins]: 'Слитки металлов, инвестиционные монеты',
    [AssetType.FuelAndMineralResources]: 'Топливо и минеральное сырье',
};
