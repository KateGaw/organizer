import styled from 'styled-components'

type Props = {
  name: string
  onChange: (e: any) => void
  label: string
  checked: boolean
  styles?: any
}

const Checkbox = ({ name, onChange, label, checked, styles }: Props) => {
  return (
    <Container styles={styles}>
      <label>
        <Input name={name} type="checkbox" onChange={onChange} checked={checked} />
        {label}
      </label>
    </Container>
  )
}

export default Checkbox

const Container = styled.div<{ styles?: any }>`
  & > label {
    display: flex;
    align-items: center;
  }

  & > label > input {
    margin-right: 0.5rem;
  }

  ${(props) => (props.styles ? props.styles : '')}
`

const Input = styled.input`
  display: grid;
  width: 1.15em;
  height: 1.15em;
  margin: 0;
  font: inherit;
  color: var(--color-black);
  background-color: var(--color-white);
  border: 0.125rem solid var(--color-black);
  border-radius: 0.25rem;
  transform: translateY(-0.075em);
  place-content: center;
  appearance: none;

  ::before {
    content: '';
    width: 0.65em;
    height: 0.65em;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em var(--color-tertiary);
    transform-origin: bottom left;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
  }

  :checked::before {
    transform: scale(1);
  }
`
