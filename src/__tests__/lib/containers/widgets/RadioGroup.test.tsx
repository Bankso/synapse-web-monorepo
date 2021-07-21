import * as React from 'react'
import { mount, ReactWrapper } from 'enzyme'
import {
  RadioGroup,
  RadioGroupProps,
} from '../../../../lib/containers/widgets/RadioGroup'

const mockCallback = jest.fn()

function createTestProps(overrides?: RadioGroupProps): RadioGroupProps {
  return {
    options: [
      { label: 'Label0', value: 'value0' },
      { label: 'Label1', value: 'value1' },
      { label: 'Label2', value: 'value2' },
    ],
    id: 'radioGroup1',
    className: 'radioGroupClass',
    value: 'value1',
    onChange: mockCallback,

    ...overrides,
  }
}

let wrapper: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>
let props: RadioGroupProps

function init(overrides?: RadioGroupProps) {
  props = createTestProps(overrides)
  wrapper = mount(<RadioGroup {...props} />)
}

beforeEach(() => init())

describe('basic function', () => {
  it('should render with correct properties', () => {
    expect(wrapper.find('input')).toHaveLength(props.options.length)
    expect(wrapper.find('div').at(0).hasClass('radioGroupClass')).toBe(true)
    expect(wrapper.find('label').at(0).find('label').text()).toBe(
      props.options[0].label,
    )

    expect(wrapper.find('input').at(1).props().checked).toBe(true)
    expect(wrapper.find('input').at(2).props().checked).toBe(false)
  })

  it('should have correct item changed', () => {
    init({ ...props, value: 'value2' })
    expect(wrapper.find('input').at(0).props().checked).toBe(false)
    expect(wrapper.find('input').at(1).props().checked).toBe(false)
    expect(wrapper.find('input').at(2).props().checked).toBe(true)
  })

  it('should not crash without value specified', () => {
    init({ ...props, value: undefined })
    expect(wrapper.find('input').at(0).props().checked).toBe(false)
    expect(wrapper.find('input').at(1).props().checked).toBe(false)
    expect(wrapper.find('input').at(2).props().checked).toBe(false)
  })

  it('should call callbackFn on change with correct params and change the value', () => {
    let radio = wrapper.find('input').at(1)

    expect(radio.props().checked).toBe(true)

    wrapper.find('input').at(1).simulate('click')
    expect(mockCallback).toHaveBeenCalledWith(props.options[1].value)
  })
})
