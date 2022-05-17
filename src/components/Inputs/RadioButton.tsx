import styled from 'styled-components'

type Props = {
  name: string
  onChange: () => void
  label: string
  checked: boolean
  styles?: any
}

const RadioButton = ({ name, onChange, label, checked, styles }: Props) => {
  return (
    <Container styles={styles}>
      <Input
        name={name}
        type="radio"
        checked={checked}
        onChange={onChange}
      />
      <label onClick={onChange}>{label}</label>
    </Container>
  )
}

export default RadioButton

const Container = styled.div<{ styles?: any }>`
  input:checked + label,
  input:not(:checked) + label {
    position: relative;

    display: inline-block;
    padding-left: 1.75rem;

    font-size: 1rem;
    line-height: 1.25rem;
    color: var(--color-black);

    cursor: pointer;
  }

  input:checked + label:before,
  input:not(:checked) + label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;

    width: 1.125rem;
    height: 1.125rem;

    border: 1px solid var(--color-black);
    border-radius: 100%;
    background: transparent;
  }

  input:checked + label:after,
  input:not(:checked) + label:after {
    content: '';
    position: absolute;
    top: 0.25rem;
    left: 0.25rem;

    width: 0.75rem;
    height: 0.75rem;

    background: var(--color-secondary);
    border-radius: 100%;

    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }

  input:not(:checked) + label:after {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
  }

  input:checked + label:after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  ${(props) => (props.styles ? props.styles : '')}
`

const Input = styled.input`
  :checked,
  :not(:checked) {
    position: absolute;
    left: -9999px;
  }
`

