import React from 'react';
import PropTypes from 'prop-types';

class InputField extends React.PureComponent {
    render() {
        return (
            <div className={`input-field ${this.props.className ? this.props.className : ''}`}>
                {!!this.props.label &&
                    <label htmlFor={this.props.name} className='input-label'>{this.props.label}</label>
                }
                {!!this.props.prefix &&
                    <i><span className={`symbols ${this.props.prefix.toLowerCase()}`} /></i>
                }
                <input
                    type={this.props.type}
                    name={this.props.name}
                    step={this.props.is_currency ? '0.01' : undefined}
                    placeholder={this.props.placeholder || undefined}
                    disabled={this.props.is_disabled}
                    value={this.props.value}
                    onChange={this.props.onChange}
                    required={this.props.required || undefined}
                />
                {!!this.props.helper &&
                    <span className='input-helper'>{this.props.helper}</span>
                }
            </div>
        );
    }
}

InputField.propTypes = {
    type           : PropTypes.string,
    number         : PropTypes.string,
    value          : PropTypes.number,
    onChange       : PropTypes.func,
    is_currency    : PropTypes.bool,
    is_nativepicker: PropTypes.bool,
    prefix         : PropTypes.string,
};

export default InputField;
