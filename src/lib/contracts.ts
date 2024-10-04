import { Address } from 'viem';
import SPACE_CROWN_ABI from './abis/SpaceCrownAbi';
import { bsc } from 'viem/chains';

/**
 * All supported contracts with their ABIs and deployments.
 */
export const Contracts = {
    SpaceCrown: {
        abi: SPACE_CROWN_ABI,
        deployments: {
            [bsc.id]: '0xb2ea51BAa12C461327d12A2069d47b30e680b69D' as Address,
        } as const,
    },
};
