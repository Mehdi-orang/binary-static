import React from 'react';
import { FormRow } from '../../_common/components/forms.jsx';

export const Salutation = ({ className }) => (
    <FormRow
        type='select'
        className={className}
        id='salutation'
        label={it.L('Title')}
    >
        <option value='Mr'>{it.L('Mr')}</option>
        <option value='Mrs' className='ru-hide'>{it.L('Mrs')}</option>
        <option value='Ms'>{it.L('Ms')}</option>
        <option value='Miss' className='ru-hide'>{it.L('Miss')}</option>
    </FormRow>
);

export const FirstName = ({ className, hint }) => (
    <FormRow
        type='text'
        id='first_name'
        label={it.L('First name')}
        attributes={{maxLength: '30', className: className || undefined}}
        hint={hint}
    />
);

export const LastName = ({ className, hint }) => (
    <FormRow
        type='text'
        id='last_name'
        label={it.L('Family name')}
        attributes={{maxLength: '30', className: className || undefined}}
        hint={hint}
    />
);

export const DateOfBirth = ({ className }) => (
    <FormRow
        type='text'
        id='date_of_birth'
        label={it.L('Date of birth')}
        attributes={{size: '12', readOnly: true, className: className || undefined }}
    />
);

export const Residence = () => (
    <FormRow type='custom' id='residence' label={it.L('Country of residence')}>
        <label id='lbl_residence'></label>
    </FormRow>
);

export const AccountOpeningReason  = ({ row_id, row_class }) => (
    <FormRow
        type='select'
        id='account_opening_reason'
        label={it.L('Account opening reason')}
        row_id={row_id}
        row_class={row_class}
    >
        <option value=''>{it.L('Please select')}</option>
        <option value='Speculative'>{it.L('Speculative')}</option>
        <option value='Income Earning'>{it.L('Income earning')}</option>
        <option value='Hedging'>{it.L('Hedging')}</option>
    </FormRow>
);

export const AddressLine1 = ({ hint, no_hint }) => (
    <FormRow
        type='text'
        id='address_line_1'
        label={it.L('First line of home address')}
        attributes={{maxLength: '70'}}
        hint={hint || (no_hint ? '' : it.L('Kindly provide your complete address.<br>This will be used to authenticate your identity when you open a real account.'))}
    />
);

export const AddressLine2 = ({ hint }) => (
    <FormRow
        type='text'
        id='address_line_2'
        label={it.L('Second line of home address')}
        attributes={{maxLength: '70'}}
        hint={hint}
    />
);

export const AddressCity = ({ hint }) => (
    <FormRow
        type='text'
        id='address_city'
        label={it.L('Town/City')}
        attributes={{maxLength: 35}}
        hint={hint}
    />
);

export const AddressState = () => (
    <FormRow type='select' id='address_state' label={it.L('State/Province')} />
);

export const AddressPostcode = ({ hint }) => (
    <FormRow
        type='text'
        id='address_postcode'
        label={it.L('Postal code/ZIP')}
        attributes={{maxLength: '20'}}
        hint={hint}
    />
);

export const Phone = ({ hint }) => (
    <FormRow
        type='text'
        id='phone'
        label={it.L('Telephone')}
        attributes={{maxLength: '35'}}
        hint={hint}
    />
);

export const SecretQuestion = () => (
    <FormRow type='select' id='secret_question' label={it.L('Secret question')}>
        <option value='Favourite dish'>{it.L('Favourite dish')}</option>
        <option value="Mother's maiden name">{it.L('Mother\'s maiden name')}</option>
        <option value='Name of your pet'>{it.L('Name of your pet')}</option>
        <option value='Name of first love'>{it.L('Name of first love')}</option>
        <option value='Memorable town/city'>{it.L('Memorable town/city')}</option>
        <option value='Memorable date'>{it.L('Memorable date')}</option>
        <option value='Brand of first car'>{it.L('Brand of first car')}</option>
        <option value='Favourite artist'>{it.L('Favourite artist')}</option>
    </FormRow>
);

export const SecretAnswer = () => (
    <FormRow
        type='text'
        id='secret_answer'
        label={it.L('Answer to secret question')}
        attributes={{ maxLength: '50', autoComplete: 'off' }}
    />
);

export const Tnc = () => (
    <div className='center-text'>
        <div className='gr-row'>
            <div className='gr-12-m gr-padding-10 gr-centered'>
                <input type='checkbox' name='tnc' id='tnc' />
                <label htmlFor='tnc'>
                    {it.L(
                        'I have read and agree to the [_1]terms and conditions[_2] of the site.',
                        `<a target="_blank" href="${it.url_for('terms-and-conditions')}">`,
                        '</a>'
                    )}
                </label>
            </div>
        </div>

        <button className='button' type='submit'>{it.L('Open Account')}</button>
    </div>
);

export const ClientMessage = () => (
    <div className='errorbox rbox invisible' id='client_message'>
        <div className='rbox-wrap'>
            <div className='gr-12 rbox-content' id='client_message_content'>
                <p className='center-text notice-msg'></p>
            </div>
        </div>
    </div>
 );

export const TaxInformationForm = () => (
    <React.Fragment>
        <div id='tax_information_note' className='gr-12'>
            <p>{it.L('Binary Investments (Europe) Ltd. is required to collect tax information under the Common Reporting Standard (CRS) and the Foreign Account Tax Compliance Act (FATCA).')}</p>
            <p>{it.L('Please enter your [_1]tax information[_2] below to continue.', '<a href="https://ec.europa.eu/taxation_customs/tin/tinByCountry.html" target="_blank">', '</a>')}</p>
            <p>{it.L('Rest assured that your information will only be used for CRS/FATCA reporting purposes and will be kept safe.')}</p>
            <p>{it.L('If we have reason to believe that your tax information is incomplete, we may contact you for clarification.')}</p>
        </div>
        <FormRow type='select'
                 id='tax_residence'
                 label={it.L('Tax residence')}
                 tooltip={it.L('Please state the country (or countries) where you are liable to personal income tax. Note that you may be considered resident for tax purposes in more than one jurisdiction. In such case please choose all countries of your tax residence. If you are in any doubt regarding your tax residence you are advised to consult a tax or legal professional.')}
                 className='invisible'
                 attributes={{multiple: 'multiple'}} />
        <FormRow type='text'
                 label={it.L('Tax identification number')}
                 tooltip={it.L('Please provide the tax identification number for each jurisdiction where you are a tax resident. If you cannot provide this information, please contact our customer support team for help.')}
                 id='tax_identification_number'
                 attributes={{ maxLength: 20 }} />
    </React.Fragment>
);

export const TaxInformationDeclaration = () => (
    <React.Fragment>
        <div className='gr-12 gr-padding-10'>
            <input type='checkbox' id='chk_tax_id' />
            <label htmlFor='chk_tax_id'>
                {it.L('I hereby confirm that the tax information I provided is true and complete. I will also inform Binary Investments (Europe) Ltd. about any changes to this information.')}
            </label>
        </div>
        <div className='gr-12 gr-padding-10'>
            <p className='no-margin'>
                <i><span className='errorfield'>* </span>{it.L('You may be considered a tax resident in more than one jurisdiction. Please consult your tax advisor and verify that your tax information is accurate.')}</i>
            </p>
        </div>
    </React.Fragment>
);

export const GeocodeResponse = () => (
    <div className='gr-row'>
        <div className='gr-12 gr-padding-10 center-text'>
            <p id='geocode_error' className='notice-msg no-margin invisible'>
                {it.L('Your address could not be verified by our automated system. You may proceed but please ensure that your address is complete.')}
            </p>
        </div>
    </div>
);

