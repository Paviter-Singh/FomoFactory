import React, { useEffect, useMemo } from 'react';
import type { AppDispatch, RootState } from '../store';
import { useSelector, useDispatch } from 'react-redux';
import { onChnage } from '../store/SymbolSlice';
import { useGetTradeBySymbolQuery } from '../store/services/TradeApi';
import { CompanySymbol, ListPriceData } from '../types';
// import { Column, useTable } from 'react-table';

import { ColumnDef } from '@tanstack/react-table'
import MyTable from './Table';
// import { Column, ColumnGroup, TableOptions, useTable } from 'react-table';
const ListPriceDataTable = () => {
    const rerender = React.useReducer(() => ({}), {})[1]
    const symbols: CompanySymbol[] = ['AAPL', 'GOOGL', 'MSFT', 'AMZN', 'TSLA'];
    const symbol = useSelector((state: RootState) => state.symbol.symbol)
    const { data, error, isLoading, refetch } = useGetTradeBySymbolQuery(symbol)
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        const interval = setInterval(() => {
            refetch()
        }, 5000)
        return () => clearInterval(interval)
    }, [refetch]);

    const handleSymbolChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(onChnage(event.target.value as CompanySymbol))
    };
    // const columnHelper = createColumnHelper<ListPriceData>()
    const columns = useMemo<ColumnDef<ListPriceData>[]>(
        () => [
            {
                header: 'ID',
                accessorKey: 'id',
            },
            {
                header: 'Symbol',
                accessorKey: 's',
                enableSorting: false,
                enableColumnFilter: false
            },
            {
                header: 'Last Price',
                accessorKey: 'p',
            },
            {
                header: 'Timestamp',
                accessorKey: 't',
                enableColumnFilter: false,
                cell: (props => {
                    let value = props.getValue();
                    return new Date(Number(value)).toLocaleString('en-IN', {
                        // year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: 'numeric',
                        minute: 'numeric',
                        second: 'numeric',
                        fractionalSecondDigits: 3,
                        // timeZone: 'Asia/Kolkata',
                        timeZoneName: 'short'
                    })
                }),
            },
            {
                header: 'Volume',
                accessorKey: 'v',
                enableColumnFilter: false,
                enableSorting: false
            },
            {
                header: 'Conditions',
                accessorKey: 'c',
                cell: props => {
                    const value = props.getValue() as string[];
                    return <>{value.map(con => {
                        return <span>{con}, </span>
                    })}</>
                },
                filterFn: 'arrIncludes',
                enableSorting: false
            },
        ],
        []
    );
    return (
        <div style={{ overflowX: 'auto' }}>
            <form className="max-w-sm mx-auto">
            <h1 className='text-2xl w-64'>Latest Stock prize</h1>
                <label htmlFor="companies" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Company</label>
                <select value={symbol} onChange={handleSymbolChange} id="companies" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    {symbols.map((symbol) => (
                        <option key={symbol} value={symbol}>{symbol}</option>
                    ))}
                </select>
            </form>
            {isLoading && <div>Loading...</div>}
            {error && <div>Failed to fetch data</div>}

            {data && <>
                <MyTable
                    {...{
                        data,
                        columns,
                    }}
                />
                <hr />
                <div>
                    <button onClick={() => rerender()}>Force Rerender</button>
                </div>
                <div>
                    <button onClick={() => refetch()}>Refresh Data</button>
                </div>
            </>}
        </div>);
};




export default ListPriceDataTable;
