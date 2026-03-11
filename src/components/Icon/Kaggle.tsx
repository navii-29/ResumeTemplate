import {FC, memo} from 'react';
import Icon, {IconProps} from './Icon';

const KaggleIcon: FC<IconProps> = memo(props => (
  <Icon {...props}>
    <path 
      d="M80.2 18.4h-15L38.7 56.1V18.4H26v91.2h12.7V70.5l28.7 39.1h16.3L48.6 63.7 80.2 18.4z" 
      fill="currentColor" 
    />
  </Icon>
));

export default KaggleIcon;
