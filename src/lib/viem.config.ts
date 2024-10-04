import { createPublicClient, http } from 'viem';
import { bsc } from 'viem/chains';

export const viemClient = createPublicClient({
    chain: bsc,
    transport: http(),
});
