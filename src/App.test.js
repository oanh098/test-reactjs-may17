import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from './redux/store'
import App from './App'

//
describe ('<App />', () => {

    it('Render <App /> component correctly', () => {

        const {getByText} = render(<Provider store={store}><App /> </Provider>)
        expect(getByText(/Getting started with React testing library/i)).toBeInTheDocument()
    })
})


//test('Renders <App /> component correctly', () => {
//  const { getByText } = render(
//    <Provider store={store}>
//      <App />
//    </Provider>
//  )
//  const linkElement = getByText(/Getting started with React testing library/i)
//  expect(linkElement).toBeInTheDocument()
//})
