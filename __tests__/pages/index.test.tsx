import { render, screen } from '@testing-library/react'
import Home from '../../src/pages'
import '@testing-library/jest-dom'
import Router from "next/router";

jest.mock('next/router')

describe('Home', () => {
  it('Displays landing page content', () => {
    const {container} = render(<Home />)

    // const heading = screen.getByRole('heading', {
    //   name: /Welcome to eGarage/i,
    // })

    // expect(heading).toBeInTheDocument()
  })
})

// describe('Check for the login router if it is working', () => {
//     let routerSpy

//     beforeEach(() => {
//         routerSpy = jest.spyOn(Router, 'push')
//     },

//     it('Login', () => {
//         expect(routerSpy).toBeCalledWith('/login')
//     }),
// })