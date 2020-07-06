import { Watchlist, Stock } from '../@generated/types';

export const WatchlistService = {};

const KEY = 'watchlists';
let watchlists: WatchlistC[] = [];

const query = (): WatchlistC[] => {
    const localWatchlist = localStorage.getItem(KEY);
    if (localWatchlist) {
        watchlists = JSON.parse(localWatchlist);
        return watchlists;
    } else {
        watchlists = [];
        localStorage.setItem(KEY, JSON.stringify(watchlists));
        return watchlists;
    }
};

const addStock = async (watchlistId: string, symbol: Pick<Stock, 'symbol'>) => {
    const watchlistIndex = watchlists.findIndex(
        watchlist => watchlist.id === watchlistId
    );
};

type WatchlistC = {
    __typename?: 'Watchlist';
    id: string;
    name: string;
    stocks: Partial<Stock>[];
};

/* const defaultWatchlists: WatchlistC[] = [
    {
        id: '1',
        name: 'My Watchlist',
        stocks: [
            {
                symbol: 'TSLA',
                name: 'Tesla Inc.',
                lots: [
                    {
                        costPerShare: 25.43,
                        note: '',
                        shares: 10,
                        tradeDate: Date.now(),
                    },
                ],
            },
        ],
    },
]; */
