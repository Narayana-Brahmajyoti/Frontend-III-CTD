import "@testing-library/jest-dom"
import { render, fireEvent } from "@testing-library/react"
import { describe, expect } from "vitest"

import { FifteenthClass } from "./lessons/FifteenthClass"

describe('DecimaQuintaAula component', () => {

    it('Deveria ser renderizado em tela', () => {

        const { getByText } = render(<FifteenthClass />)

        expect(getByText('Cadastrar endereços')).toBeInTheDocument()

    })

//     it('Fluxo cadastro', () => {

//         const { getByLabelText, getByText } = render(<FifteenthClass />)
//         const input = getByLabelText('cep')
//         const submitButton = getByLabelText('submit-button')

//         fireEvent.change(input, { target: { value: '' } })
//         fireEvent.click(submitButton)

//         setTimeout(() => {
//  //Nome do Endereço
//             expect(getByText('Nome do Endereço')).toBeInTheDocument()

//         }, 2000)

//     })

})