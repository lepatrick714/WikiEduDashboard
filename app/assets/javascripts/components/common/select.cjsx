React = require 'react'
Conditional = require('../high_order/conditional.jsx').default
InputMixin = require '../../mixins/input_mixin.cjsx'

Select = React.createClass(
  displayName: 'Select'
  mixins: [InputMixin],
  getInitialState: ->
    value: @props.value
  render: ->
    if @props.label
      label = @props.label
      label += @props.spacer || ':'

    options = @props.options.map (option, i) =>
      <option value={i} key={i}>{option}</option>

    if @props.tooltip_text
      labelClass = 'tooltip-trigger'
      tooltip = (
        <div className="tooltip dark">
          <p>{@props.tooltip_text}</p>
        </div>
      )

    if @props.editable
      <label className="input_wrapper #{if @props.inline? && @props.inline then ' inline' else ''}">
        <div className={labelClass}>{label}{tooltip}</div>
        <select
          value={@state.value}
          onChange={@onChange}
        >
          {options}
        </select>
      </label>
    else
      <span>{@props.options[@props.value]}</span>
)

module.exports = Conditional(Select)
