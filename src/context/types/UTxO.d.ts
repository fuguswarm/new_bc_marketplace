import { Asset } from './Asset';
export declare type UTxO = {
    input: {
        outputIndex: number;
        txHash: string;
    };
    output: {
        address: string;
        amount: Asset[];
        dataHash?: string;
        plutusData?: string;
        scriptRef?: string;
        scriptHash?: string;
    };
};
