export interface MatchParams {
    symbol?: string;
    tabId?: string;
    pageTitle: string;
}

export const StockRoutes = {
    main: `/stocks/:symbol?/:tabId?`,
    drawerTab: '/stocks/:symbol/:tabId',
};

export const WatchlistRoutes = {
    main: `/watchlist/`,
};

export const DevicesRoute = `/devices/:tabId?`;
