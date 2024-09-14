import PerfectScrollbar from 'react-perfect-scrollbar'
import Layout from './layout'
import {
  ThemeProvider
  , ColorModeProvider
  , Flex
  , CSSReset
} from '@chakra-ui/core'
import customTheme from '../themes'

const App = () => {
  return (
    <div className="container">
      <main>
        <ThemeProvider theme={customTheme}>
          <ColorModeProvider>
            <Flex direction='column' align='center' justify='center'>
              <CSSReset />
              <PerfectScrollbar>
                <Layout />
              </PerfectScrollbar>
            </Flex>
          </ColorModeProvider>
        </ThemeProvider>
      </main>
    </div>
  )
}



export default App