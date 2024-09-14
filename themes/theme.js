import { theme } from '@chakra-ui/core'
import icons from './icons'
import colors from './colors'
import space from './space'
import fonts from './fonts'

const customTheme = {
    ...theme,
    ...colors,
    ...icons,
    ...space,
    ...fonts
};

export default customTheme