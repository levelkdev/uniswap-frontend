import { Percent } from '@swapr/sdk'

import { ONE_BIPS } from '../../constants'
import { warningSeverity } from '../../utils/prices'
import { ErrorText } from './styles'

/**
 * Formatted version of price impact text with warning colors
 */
export default function FormattedPriceImpact({ priceImpact }: { priceImpact?: Percent }) {
  return (
    <ErrorText fontSize="12px" lineHeight="15px" severity={warningSeverity(priceImpact)}>
      {priceImpact ? (priceImpact.lessThan(ONE_BIPS) ? '<0.01%' : `${priceImpact.toFixed(2)}%`) : '-'}
    </ErrorText>
  )
}
